module.exports = {
  extends: "react-app",
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jsx-quotes": [1, "prefer-single"],
    "react/require-default-props": [0, { forbidDefaultForRequired: true }],
    "react/destructuring-assignment": [0],
    semi: [2, "never"],
    quotes: [2, "single"],
    "comma-dangle": [2, "never"],
    "max-len": [0],
    "react/button-has-type": [0]
  }
};
