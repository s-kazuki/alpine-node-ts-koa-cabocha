{
  "defaultSeverity": "error",
  "extends": [
    "tslint:recommended",
    "tslint-config-prettier"
  ],
  "jsRules": {},
  "rulesDirectory": [
    "tslint-plugin-prettier"
  ],
  "rules": {
    "prettier": [
      true,
      {
        "semi": false,
        "singleQuote": true
      }
    ],
    "no-console": false,
    "interface-name": false,
    "object-literal-sort-keys": false,
    "max-classes-per-file": false
  }
}
