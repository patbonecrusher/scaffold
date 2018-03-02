# Parcel js / vscode debugging sample

Demonstrate how to use straight ES6 in latest chrome.

## Prerequisites

``` bash
yarn global add parcel-bundler
# or
npm i -g parcel-bundler
```

## To test

``` bash
git clone thisrepo

yarn
# or
npm i

# run the bundler
parcel src/index.html
```

In vs code, debug the using Launch Chrome... configuration.

_Note_ Any breakpoint added before starting the debugger may not trigger.  They work fine once the the app is running in chrome.  Then you can add breakpoint and refresh the chrome page.

_Note_ Parcel bundler does some funky stuff by default with async/await.  I've added the following in package.json to make it work.

``` json
  "browserslist": [
    "last 1 Chrome versions"
  ]
```
