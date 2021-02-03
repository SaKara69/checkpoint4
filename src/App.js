import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Patrimony from './components/Patrimony';
import KingsCourt from './components/KingsCourt';
import Booking from './components/Booking';
import Events from './components/Events';
import Contact from './components/Contact';
import Admin from './components/Admin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='welcome'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/patrimoine' component={Patrimony} />
          <Route exact path='/cour_du_roi' component={KingsCourt} />
          <Route exact path='/reservation' component={Booking} />
          <Route exact path='/evenements' component={Events} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/admin' component={Admin} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
