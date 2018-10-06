import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'



import './todo/App.css'
import App from './App';
import list from './g7c';

ReactDOM.render(

    <Router>
        <div>
<div className='fahad'>
<Link to='/App' className='link2'>Todo</Link>

<Link to='/' className='link1' >Competetion</Link>
<hr />
</div>

<div className='faha'>
    
<Route exact path="/App" component={App}/>
      <Route exact path="/" component={list}  />

</div>
   </div>



</Router>
    
    
    , document.getElementById('root'));
