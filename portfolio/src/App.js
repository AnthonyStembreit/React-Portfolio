import Header from './components/header';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';
import PageFooter from './components/footer'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
  
      <Router>
        <Header />
        <div class="body">
        <Route exact path="/React-Portfolio/" component={About}/>
        <Route exact path="/projects" component={Projects} />
        <Route path="/contact" component={Contact}/>
        </div>
  
        <PageFooter/>
      </Router>

  );
}

export default App;
