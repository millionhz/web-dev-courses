# Template

## Sample `.eslintrc`

```json
{
  "extends": ["react-app", "airbnb", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true
      }
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ]
  },
  "env": {
    "browser": true
  }
}
```

## devDependencies

```json
"devDependencies": {
  "eslint": "^8.2.0",
  "eslint-config-airbnb": "^19.0.4",
  "eslint-config-prettier": "^8.5.0",
  "eslint-plugin-import": "^2.25.3",
  "eslint-plugin-jsx-a11y": "^6.5.1",
  "eslint-plugin-prettier": "^4.2.1",
  "eslint-plugin-react": "^7.28.0",
  "eslint-plugin-react-hooks": "^4.3.0",
  "prettier": "^2.7.1"
}
```