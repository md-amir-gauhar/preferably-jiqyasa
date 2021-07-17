import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';

import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app" style={{ backgroundImage: 'url(./ques1.png' }}>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
