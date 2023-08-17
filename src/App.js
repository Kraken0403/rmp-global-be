import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogInner from './pages/BlogInner';
import ServicesInner from './pages/ServicesInner';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about-us" element={<About/>}/>
          <Route exact path="/contact-us" element={<Contact/>}/>
          <Route exact path="/blogs" element={<Blogs/>}/>
          <Route exact path="/services" element={<ServicesInner/>}/>
          <Route exact path="/blogs/:id" element={<BlogInner/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
