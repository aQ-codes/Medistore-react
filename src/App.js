  import './App.css';
  import Navbar from './components/Navbar';
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";




  // import Home from './components/Navbar';


function App() {
  const navigate = useNavigate();

  useEffect(()=>{
    navigate('/home');
    
   },[]);

  return (
     <div>
      
     </div>
  );
}

export default App;
