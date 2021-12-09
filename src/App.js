import './App.css';
import Home from './components/home';
import Destination from './components/destination';
import Crew from './components/crew';
import Technology from './components/technology';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/destination" element={<Destination/>}/>
        <Route  path="/crew" element={<Crew/>}/>
        <Route  path="/technology" element={<Technology/>}/>
      </Routes>
    </Router>
  );
}

export default App;
