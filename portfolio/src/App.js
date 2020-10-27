import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={About}/>
        <Route path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact}/>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
