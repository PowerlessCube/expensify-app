import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

// Challenge
// Create 6 new files for the 6 components
// setup imports, component, default export
// import into AppRouter so they can be used.

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

const NotFoundPage = () => (
    <div>
        404! - <Link to='/'>Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
        <NavLink to='/edit' activeClassName='is-active'>Edit Expenses</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
    </header>
);

const AppRouter = () => (
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

export default AppRouter;