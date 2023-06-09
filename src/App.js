import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import { Home } from './components/pages/Home';
import { Company } from './components/pages/Company';
import { Contact } from './components/pages/Contact';
import { NewProject } from './components/pages/NewProject';
import { Projects } from './components/pages/Projects';

// Layout
import { Container } from './components/layouts/Container';
import { Navbar } from './components/layouts/Navbar';
import { Footer } from './components/layouts/Footer';


function App() {

  return (
    <div className="App">

      <Router>
        <Navbar />
        <Container customClass='min-height'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newproject" element={<NewProject />} />
          </Routes>
        </Container>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
