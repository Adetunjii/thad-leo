import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact'
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch,Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
