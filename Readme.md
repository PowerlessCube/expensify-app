# Read Me

# Installation Guide

# Tools Used
- [airbnb react-dates](https://github.com/airbnb/react-dates)
- [babel object spread operator](https://babeljs.io/docs/plugins/transform-object-rest-spread/)
- [jest](https://facebook.github.io/jest/)
- [momentjs](https://momentjs.com/)
- [react-redux](https://github.com/reactjs/react-redux)
- [react-test-render](https://github.com/facebook/react/tree/master/packages/react-test-renderer)
- [Redux](www.redux.js.org)
- [redux devtool extension](https://github.com/zalmoxisus/redux-devtools-extension)

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

