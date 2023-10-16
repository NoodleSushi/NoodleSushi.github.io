import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
