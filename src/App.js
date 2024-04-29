// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Project from './project/Project';
import Resume from './resume/Resume';
import Nav1 from './components/Nav1';
import Footer from './components/Footer';
import About from './about_files/About';

function App() {
  return (
    <div className="App">
    
    <Router>
      <Nav1/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    <Route path="/project" element={<Project/>}/>
      <Route path="/Resume" element={<Resume/>}></Route>
    </Routes>
   
    <Footer/>
    </Router>

    </div>
  );
}

export default App;
