module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:testing-library/react"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": ['./tsconfig.json'], // Specify it only for TypeScript files
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "testing-library"
    ],
    "rules": {
        "react/prop-types" : "off",
        "react/react-in-jsx-scope" : "off",
        "@typescript-eslint/no-floating-promises":"off"
    }
}
