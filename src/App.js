import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
// KOMPONENTLER SIYAHISI
import Navbar from './components/Navbar'
import Introduction from './components/Introduction';


function App() {
  
  useEffect(() => {
  AOS.init({
    duration : 2000
  });
}, []);




  return (
    // React Fragment
    <>

   <Navbar />
   <Introduction />
   </>
   
  );
}
// 2017 import export
export default App;
