import Header from './components/header';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';
import PageFooter from './components/footer'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div class="body">
        <Route exact path="/" component={About}/>
        <Route path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact}/>
        </div>
  
      </Router>
      <PageFooter/>
    </div>
  );
}

export default App;
