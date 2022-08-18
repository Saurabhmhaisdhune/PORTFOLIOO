import './App.css';
import { useNavigate, Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  const navigate = useNavigate();
  return (
  <>
  <nav className='main-nav'>
    <div className='logo'>
        <h2>
            <span className='name'># Saurabh Mhaisdhune</span>
        </h2>
    </div>
    <div className='menu-link'>
        <ul className='navbars'>
            <li onClick={()=>{navigate('/');}} className='li'>HOME</li>
            <li onClick={()=>{navigate('/about');}} className='li'>ABOUT</li>
            <li onClick={()=>{navigate('/skills');}} className='li'>SKILLS</li>
            <li onClick={()=>{navigate('/projects');}} className='li'>PROJECT</li>
            <li onClick={()=>{navigate('/contact');}} className='li'>CONTACT</li>
        </ul>
    </div>
    </nav>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App;