# eslint-plugin-no-js-when-react-used

suggests to change the file name from .jsx to js when react is used

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-js-when-react-used`:

```sh
npm install eslint-plugin-no-js-when-react-used --save-dev
```

## Usage

Add `no-js-when-react-used` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-js-when-react-used"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-js-when-react-used/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


