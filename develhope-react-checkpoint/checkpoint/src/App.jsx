
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from './Home';
import Address from './Address';
import Details from './Details';

function App() {

  return(
    <div>
        <Router>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/address" element={<Address />} />
                <Route path="/dashboard" element={<Details />} />
            </Routes>
        </Router>
    </div>
)
}

export default App
