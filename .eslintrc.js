module.exports = {
    "extends": ["airbnb", "prettier"],
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": "error",
        "react/prop-types": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-one-expression-per-line": 0,
        "react/prefer-stateless-function" : 0,
        "react/destructuring-assignment" : 0,
        "react/button-has-type": 0,
    }   
};