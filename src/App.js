import './App.css';
import Home from './Page/Home/Home';
import { Helmet } from 'react-helmet';
import ReactGa from "react-ga"
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
     ReactGa.initialize( 'G-NTP4X1RHEG')
     ReactGa.pageview(window.location.pathname + window.location.search)
  },[])

  return (
    <div className="App">
         <Helmet>
        <title>We Transform Digital Solutions</title>
         <link rel='canonical' href='https://easyryt.com/' />
        <meta
          name="google-site-verification" 
          content="bAYfY5U6tIPUgvlUMmjLrF4qJfpWPI3C9ZnkA7EYPLk"
        />
      </Helmet>
     <Home />
    </div>
  );
}

export default App;
