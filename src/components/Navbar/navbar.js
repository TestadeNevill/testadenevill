

import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';


function Navbar() {
    return (
        <div className="navbar">
            <Router>
                {/* <div className="navbar"> */}
                <div className="navbar">

                    <Link to="/">Home</Link>

                    <Link to="/about">About Me</Link>

                    <Link to="/contact">Contact</Link>



                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>


        </div>
    );
}

export default Navbar;