import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const ExpenseDashBoardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add expense component    
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my edit expense component.
    </div>
);

const HelpPage = () => (
    <div>
        This is from help page.
    </div>
);
// a href='/'>Go home</a> would cause a page refresh and server call
// instead we're going to set an event listener, overide the default behaviour and specify where we want to re-render instead.
const NotFoundPage = () => (
    <div>
        404! - <Link to='/'>Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/create'>Create Expense</Link>
            </li>
            <li>
                <Link to='/edit'>Edit Expenses</Link>
            </li>
            <li>
                <Link to='/help'>Help</Link>
            </li>
        </ul>
    </header>
);

// link to home page
// link to the create expense page
// link to the edit page
// linking to the help page

const routes = (
    <BrowserRouter> 
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ExpenseDashBoardPage} exact={true}/>
                <Route path='/create' component={AddExpensePage}/>
                <Route path='/edit' component={EditExpensePage}/>
                <Route path='/help' component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>        
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));