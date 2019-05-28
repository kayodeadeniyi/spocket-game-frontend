import { alertConstants } from '../constants'

export const success = message => ({type: alertConstants.SUCCESS, message})

export const error = message => ({type: alertConstants.ERROR, message})

export const clear = () => ({type: alertConstants.CLEAR})
