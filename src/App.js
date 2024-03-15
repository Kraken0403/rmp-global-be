import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogInner from './pages/BlogInner';
import VirtualCFO from './pages/VirtualCFO';
import TaxCompliance from './pages/TaxCompliance';
import Misservices from './pages/Misservices';
import Financial from './pages/Financial';
import VirtualCFOService from './pages/VirtualCFOService';
import DataLabellingService from './pages/DataLabellingService';
import DataAnalyticsService from './pages/DataAnalyticsService';
import BookKeeping from './pages/Bookkeeping';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import ReactGA from 'react-ga';

const trackingId ="UA-291012853-1";
ReactGA.initialize(trackingId);

function App() {

  const location = useLocation();
  return (
    <div className="App">
       {/* <ScrollToTop/> */}
       <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about-us" element={<About/>}/>
          <Route key='contact' exact path="/contact-us" element={<Contact/>}/>
          <Route key="blogs" exact path="/blogs" element={<Blogs/>}/>
          <Route key="cfo" exact path="/virtual-cfo" element={<VirtualCFO/>}/>
          <Route key="tax" exact path="/tax-compliance" element={<TaxCompliance/>}/>
          <Route key={location.pathname} exact path="/blogs/:slug" element={<BlogInner/>}/>
          <Route key="mis" exact path="/mis-services" element={<Misservices/>}/>
          <Route key="fin" exact path="/financial" element={<Financial/>}/>
          <Route key="cirt" exact path="/virtual-CFO-service" element={<VirtualCFOService/>}/>
          <Route key="datalabel" exact path="/datalabelling-service" element={<DataLabellingService/>}/>
          <Route key="dataanal" exact path="/dataanalytics-service" element={<DataAnalyticsService/>}/>
          <Route key="bookkeep" exact path="/book-keeping" element={<BookKeeping/>}/>
        </Routes>
        <a
        href="https://wa.me/+919512453532"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>

        </AnimatePresence>
          {/* <RoutesWithAnimation/> */}

    </div>
  );
}

export default App;
