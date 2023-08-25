import './App.css';
import Home from './Page/Home/Home';
import { Helmet } from 'react-helmet';
import ReactGa from "react-ga"
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
     ReactGa.initialize( 'G-NTP4X1RHEG')
     ReactGa.initialize( 'G-0NGJW5GEC0')
     ReactGa.pageview(window.location.pathname + window.location.search)
  },[])

  return (
    <div className="App">

         <Helmet>
 
        <title>We Transform Digital Solutions</title>
       
         <meta name="google-site-verification" content="md3XXfRXs9D9pKk-pFi4NVawAxv3086p7DrjamuYVQM" />
      </Helmet>
     <Home />
    </div>
  );
}

export default App;


