# Read Me

# Installation Guide

# Tools Used
- [airbnb react-dates](https://github.com/airbnb/react-dates)
- [babel object spread operator](https://babeljs.io/docs/plugins/transform-object-rest-spread/)
- [cross-env - cross platform ENV varibale]
(https://www.npmjs.com/package/cross-env)
- [dotenv - loads env varibales from .env files](https://www.npmjs.com/package/dotenv)
- [Enzyme](http://airbnb.io/enzyme/docs/api/)
- [Express](http://express.js)
- [Extract Text Pugin](https://www.npmjs.com/package/extract-text-webpack-plugin)
- [Firebase](https://firebase.google.com/docs/)
- [Heroku](www.heroku.com)
- [Heroku Cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
- [History](https://www.npmjs.com/package/history)
- [jest](https://facebook.github.io/jest/)
- [momentjs](https://momentjs.com/)
- [numeralJs](http://numeraljs.com/) - js numeric format library.
- [react-redux](https://github.com/reactjs/react-redux)
- [react-test-render](https://github.com/facebook/react/tree/master/packages/react-test-renderer)
- [Redux](www.redux.js.org)
- [Redux-mock-store](https://github.com/arnaudbenard/redux-mock-store)
- [redux devtool extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [Thunk middleware for Redux](https://github.com/gaearon/redux-thunk)
- [webpack production server](https://webpack.js.org/guides/production/)

## Techniques Used
- [ES6 destructing](http://www.deadcoderising.com/2017-03-28-es6-destructuring-an-elegant-way-of-extracting-data-from-arrays-and-objects-in-javascript/)

# Concept notes

## Why Do we Need Something Like Redux?
[Link to video](https://completereactcourse.com/courses/217645/lectures/3382375)

Redux is a state management library, it helps overcome some of the difficulties of working with component based state management.
Tacking and changing data.

**Differences Simple and Complex**
- No Clear Parent for storing state:
Simple - app only had 3 levels and the state lived in the top of the section (IndecisionApp).  It all stemmed from one section at the top

Complex - Expensify app has 2 sections AddExpensePAge and ExpenseDashboardPage which is then managed by React Router. But where does the state live, there isn't one parent that keeps track of them all.

- Components aren't really reusable:
Simple - Action had 2 props that were passed down from Indecision app.  Therefore they were both tied together.  If Action was to be reused as a child of header then props would need to be passed down from IndecisionApp to Header to the duplicate action.

Complex - We need a way for each component describes what it needs from the state and what it needs to change in terms of state.

**Where do I store my app state in a complex React app?**

**How do I create components that are actually reusable?**

*Answer - Use Redux*

**Redux**
- Props are still okay to use.  We just want to avoid lengthy passing down of props.
- We Create a Redux store (A state container). It's just an object. Each component will be responsible for:
    - Read data off of the store 
    - Control how we change the data in the store

## What is a Redux Selector
[redux selector](https://www.saltycrane.com/blog/2017/05/what-are-redux-selectors-why-use-them/)

## Heroku commands
Push to Heroku
```
git push heroku master
```

Retrieve list of ENV variables for Heroku server
```
heroku config 
```

Set a new ENV varibale for Heroku server
```
Heroku config:set
```

Remove an ENV varibale from the Heroku server
```
Heroku config:unset
```