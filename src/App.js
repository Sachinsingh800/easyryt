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
  const internshipTracks = [
    {
      name: 'Full Stack Internship Track',
      rating: '4.9',
      numberOfReviews: '350+',
    },
    {
      name: 'Python Internship Track',
      rating: '4.8',
      numberOfReviews: '300+',
    },
    {
      name: 'App Development Internship Track',
      rating: '4.6',
      numberOfReviews: '200+',
    },
    // Add more internship tracks if needed
  ];

  const courses = [
    {
      name: 'UI/UX Design',
      description: 'The best part about Tutedude courses are their mentors, they ...',
    },
    {
      name: 'Mern Stack',
      description: "Tutedude's mern stack was recommended to me by a friend ...",
    },
    {
      name: 'Python',
      description: 'I enrolled on the Python course of Tutedude which helped me a lot ...',
    },
    {
      name: 'Data Science',
      description: 'I was looking for flexible courses which can help me with my ...',
    },
    // Add more courses if needed
  ];

  // Create schema markup for internship tracks
  const internshipTrackSchema = internshipTracks.map((track, index) => ({
    '@context': 'http://schema.org',
    '@type': 'Course',
    name: track.name,
    description: `${track.name} ${track.rating} · ${track.numberOfReviews}`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: track.rating,
      reviewCount: track.numberOfReviews,
    },
    position: index + 1, // Use index to define position
    provider: {
      '@type': 'Organization',
      name: 'Tutedude',
      sameAs: 'https://www.easyryt.com/', // Replace with the actual URL
    },
  }));

  // Create schema markup for courses
  const courseSchema = courses.map((course) => ({
    '@context': 'http://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: 'Tutedude',
      sameAs: 'https://www.easyryt.com/', // Replace with the actual URL
    },
  }));

  return (
    <div className="App">
      

         <Helmet>
        <script type="application/ld+json">{JSON.stringify(internshipTrackSchema)}</script>

        <script type="application/ld+json">{JSON.stringify(courseSchema)}</script>
 
        <title>We Transform Digital Solutions</title>
       
         <meta name="google-site-verification" content="md3XXfRXs9D9pKk-pFi4NVawAxv3086p7DrjamuYVQM" />
      </Helmet>
     <Home />
    </div>
  );
}

export default App;


