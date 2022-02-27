import './App.css';
import Button from 'react-bootstrap/Button';
import {
  Navbar,
  Home,
  Portfolio,
  About,
  Contact,
} from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    {/* <h1>Hello</h1>
    <Button variant="warning">Primary</Button>{' '}
    <Portfolio /> */}
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />}>  
      </Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
