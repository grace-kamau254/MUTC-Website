  
 import Home from "./Components/Pages/Home";   
import Leadership from "./Components/Pages/Leadership";
import Header from "./Components/Nav"
import Footer from './Components/Footer/Footer'
import Track from "./Components/Pages/Track/Track";
import { Route,Routes } from "react-router-dom";
 function App() {
   return (
     <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership" element={<Leadership />} />
<Route path="/tracks" element={<Track />} />
      </Routes>       
       <Footer/>
       </div>
   );
 }
 export default App