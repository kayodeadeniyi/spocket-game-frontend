import React from 'react'

let options = ['user 1', 'user 2']

let startAngle = 0
let arc = Math.PI / (options.length / 2)
let spinTimeout = null

let spinAngleStart
let spinTime = 0
let spinTimeTotal = 0

let ctx



export default class Wheel extends React.Component {
  componentDidMount() {
    document.getElementById('spin').addEventListener('click', this.spin.bind(this))
    this.drawRouletteWheel()
  }

  byte2Hex(n) {
    var nybHexString = '0123456789ABCDEF'
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1)
  }

  RGB2Color(r,g,b) {
  	return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b)
  }

  getColor(item, maxitem) {
    var phase = 0
    var center = 128
    var width = 127
    var frequency = Math.PI*2/maxitem

    let red   = Math.sin(frequency*item+2+phase) * width + center
    let green = Math.sin(frequency*item+0+phase) * width + center
    let blue  = Math.sin(frequency*item+4+phase) * width + center

    return this.RGB2Color(red,green,blue)
  }

  drawRouletteWheel() {
    var canvas = document.getElementById('canvas')
    if (canvas.getContext) {
      var outsideRadius = 200
      var textRadius = 160
      var insideRadius = 125

      ctx = canvas.getContext('2d')
      ctx.clearRect(0,0,500,500)

      ctx.strokeStyle = 'black'
      ctx.lineWidth = 2

      ctx.font = 'bold 12px Helvetica, Arial'

      for(var i = 0; i < options.length; i++) {
        var angle = startAngle + i * arc
        //ctx.fillStyle = colors[i]
        ctx.fillStyle = this.getColor(i, options.length)

        ctx.beginPath()
        ctx.arc(250, 250, outsideRadius, angle, angle + arc, false)
        ctx.arc(250, 250, insideRadius, angle + arc, angle, true)
        ctx.stroke()
        ctx.fill()

        ctx.save()
        ctx.shadowOffsetX = -1
        ctx.shadowOffsetY = -1
        ctx.shadowBlur    = 0
        ctx.shadowColor   = 'rgb(220,220,220)'
        ctx.fillStyle = 'black'
        ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius,
                      250 + Math.sin(angle + arc / 2) * textRadius)
        ctx.rotate(angle + arc / 2 + Math.PI / 2)
        var text = options[i]
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0)
        ctx.restore()
      }

      //Arrow
      ctx.fillStyle = 'black'
      ctx.beginPath()
      ctx.moveTo(250 - 4, 250 - (outsideRadius + 5))
      ctx.lineTo(250 + 4, 250 - (outsideRadius + 5))
      ctx.lineTo(250 + 4, 250 - (outsideRadius - 5))
      ctx.lineTo(250 + 9, 250 - (outsideRadius - 5))
      ctx.lineTo(250 + 0, 250 - (outsideRadius - 13))
      ctx.lineTo(250 - 9, 250 - (outsideRadius - 5))
      ctx.lineTo(250 - 4, 250 - (outsideRadius - 5))
      ctx.lineTo(250 - 4, 250 - (outsideRadius + 5))
      ctx.fill()
    }
  }

  spin() {
    spinAngleStart = Math.random() * 10 + 10
    spinTime = 0
    spinTimeTotal = Math.random() * 3 + 4 * 10000
    this.rotateWheel()
  }

  rotateWheel() {
    spinTime += 100
    if(spinTime >= spinTimeTotal) {
      this.stopRotateWheel()
      return
    }
    let spinAngle = spinAngleStart - this.easeOut(spinTime, 0, spinAngleStart, spinTimeTotal)
    startAngle += (spinAngle * Math.PI / 180)
    this.drawRouletteWheel()
    spinTimeout = setTimeout(this.rotateWheel.bind(this), 30)
  }

  stopRotateWheel() {
    clearTimeout(spinTimeout)
    var degrees = startAngle * 180 / Math.PI + 90
    var arcd = arc * 180 / Math.PI
    var index = Math.floor((360 - degrees % 360) / arcd)
    ctx.save()
    ctx.font = 'bold 30px Helvetica, Arial'
    var text = options[index]
    this.props.updateScore(text)
    ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10)
    ctx.restore()
  }

  easeOut(t, b, c, d) {
    var ts = (t/=d)*t
    var tc = ts*t
    return b+c*(tc + -3*ts + 3*t)
  }

  render() {
    return (
      <>
        <canvas id='canvas' width='500' height='500'></canvas>
        <button type='button' id='spin' className='btn btn-primary'>Spin</button>
      </>
    )
  }
}
