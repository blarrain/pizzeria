import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';

function App() {

  return (
    <>
    <Navbar/>
    {/* <Home/> */}
    <Login />
    <Register />
    <Footer/>
    </>
  )
}

export default App
