import './App.css';
import Home from './Page/Home/Home';
import { Helmet } from 'react-helmet';
import ReactGa from "react-ga"
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
     ReactGa.initialize( 'G-NTP4X1RHEG')
     ReactGa.pageview('/')
  },[])

  return (
    <div className="App">
         <Helmet>
        <title>We Transform Digital Solutions</title>
         <link rel='canonical' href='https://easyryt.com/' />
        <meta
          name="Easyryt Software Solutions offers the tools you require to revolutionize & expedite your business. We stand as a prominent software development enterprise with over a decade of experience in crafting cutting-edge resolutions."
          content="At Easyryt, we are dedicated to transforming your vision into reality through cutting-edge technology and innovative solutions. As a leading IT company, we offer a comprehensive range of services tailored to meet the unique requirements of businesses across diverse industries. With a talented team of experts, we take pride in delivering exceptional results that drive growth, efficiency, and success for our clients."
        />
      </Helmet>
     <Home />
    </div>
  );
}

export default App;
