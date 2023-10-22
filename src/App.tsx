import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
