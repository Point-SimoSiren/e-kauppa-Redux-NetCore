import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TuoteLista from './components/TuoteLista'
import AppNavbar from './components/AppNavbar'
import { initTuotteet } from './reducers/tuoteReducer'
import { connect } from 'react-redux'
import Ostoskori from './components/Ostoskori'

const App = (props) => {
    useEffect(() => {
        props.initTuotteet()
    }, [])

    return (
        <Router>
            <div className="App">
                <AppNavbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={TuoteLista} />
                        <Route exact path="/ostoskori" component={Ostoskori} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
export default connect(null, { initTuotteet })(App)