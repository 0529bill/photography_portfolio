import React from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Contact from '@Components/Pages/Contact'
import Main from '@Components/Pages/Main';
import Portrait from '@Components/Pages/Portrait'
import Street from '@Components/Pages/Street'


function App() {
  return (
    <div className="App">
     <HashRouter>
        <Switch>
          <Route exact path='/photography_portfolio'>
            <Main />
          </Route>
          <Route exact path='/photography_portfolio/portrait'>
            <Portrait />
          </Route>
          <Route exact path='/photography_portfolio/street'>
            <Street />
          </Route>
          <Route exact path='/photography_portfolio/contact'>
            <Contact />
          </Route>
        </Switch>
     </HashRouter>
    </div>
  );
}

export default App;

