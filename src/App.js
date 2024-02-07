import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './Pages/Home'
import About from './Pages/About';
import Me from './Pages/Me';

function App() {
  return (
     <Router>
     <Header/>

     <Routes>
            <Route element={<Home/> } exact path="/" />
            <Route element={<About/> } exact path="/About" />
            <Route element={<Me/> } exact path="/Me" />
           

     </Routes>

     </Router>
  );
}

export default App;
