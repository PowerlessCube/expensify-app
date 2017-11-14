import React from 'react';
import ReactDOM from 'react-dom';
// 1 instance of Browserrouter to create new router and use route for everysingle page. path and what we want to do when user visits that page.
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const ExpenseDashBoardPage = () => (
    <div>
        This is from my add expense component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my dashboard component
    </div>
);

/*
Challenge 
edit EditExpensePage
help HelpPage
*/

// Route Requires 2 props - path and component.
// exact says it will only look for the exact route.
const routes = (
    <BrowserRouter> 
        <div>
            <Route path='/' component={ExpenseDashBoardPage} exact={true}/>
            <Route path='/create' component={AddExpensePage}/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

/* 
React Router 
https://reacttraining.com/react-router/
*/
