import './App.css';
import Navbar from './components/Navbar';
import Button from 'react-bootstrap/Button';
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="App">
    <Navbar />
    <h1>Hello</h1>
    <Button variant="warning">Primary</Button>{' '}
    <Portfolio />
    </div>
  );
}

export default App;
