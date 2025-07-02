import { useEffect } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

import Home from './pages/home';
import Contact from './pages/contact_us';
import Clientele from './pages/client'
import Project from './pages/projects'
import Certificate from './pages/certificate';
import Team from './pages/team';
import Services from './pages/services';
import Vendors from './pages/vendor';

import Ongoing from './pages/projects/ongoing';
import Completed from './pages/projects/completed';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clientele" element={<Clientele />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects/ongoing" element={<Ongoing />} />
          <Route path="/projects/completed" element={<Completed />} />
          <Route path="/vendors" element={<Vendors />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;


// const App = () <h1>Hello</h1>=> {
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   );
// }

// export default App

// export default function App(){
//   return(
//     <h1>hello</h1>
//   );
// }
