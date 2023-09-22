import React from 'react'
import style from "./Home.module.css"
import NavBar from '../../Component/NavBar/NavBar'
import FirstSection from '../../Section/FirstSection/FirstSection'
import SecondSection from '../../Section/SecondSection/SecondSection'
import ThirdSection from '../../Section/ThirdSection/ThirdSection'
import ForthSection from '../../Section/ForthSection/ForthSection'
import FifthSection from '../../Section/FifthSection/FifthSection'
import SixthSection from '../../Section/SixthSection/SixthSection'
import SeventhSection from '../../Section/SeventhSection/SeventhSection'
import EightSection from '../../Section/EightSection/EightSection'
import NinthSection from '../../Section/NinthSection/NinthSection'
import TenthSection from '../../Section/TenthSection/TenthSection'
import Popup from '../../Component/Popup/Popup'
import EleventhSection from '../../Section/EleventhSection/EleventhSection'
import Footer from '../../Component/Footer/Footer'
import TwelvethSection from '../../Section/TwelvethSection/TwelvethSection'
import ThirteenthSection from '../../Section/ThirteenthSection/ThirteenthSection'
import FourteenSection from '../../Section/FourteenSection/FourteenSection'
import { Servicesaccordian } from '../../Component/Accordion/Accordion'
import ClientsAccordion from '../../Component/ClientsAccordion/ClientsAccordion'
import CallButton from '../../Component/CallButton/CallButton'
import { Helmet } from 'react-helmet';

function Home() {
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
      sameAs: 'https://www.tutedude.com/', // Replace with the actual URL
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
      sameAs: 'https://www.tutedude.com/', // Replace with the actual URL
    },
  }));
  return (
    <div className={style.main}>
{/* Render the internship track schema */}
  <script type="application/ld+json">{JSON.stringify(internshipTrackSchema)}</script>
{/* Render the course schema */}
<script type="application/ld+json">{JSON.stringify(courseSchema)}</script>
        <Helmet>
        <title>We Transform Digital Solutions</title>
        <meta charSet="utf-8" />
        <meta
          name="Easyryt Software Solutions offers the tools you require to revolutionize & expedite your business. We stand as a prominent software development enterprise with over a decade of experience in crafting cutting-edge resolutions."
          content="At Easyryt, we are dedicated to transforming your vision into reality through cutting-edge technology and innovative solutions. As a leading IT company, we offer a comprehensive range of services tailored to meet the unique requirements of businesses across diverse industries. With a talented team of experts, we take pride in delivering exceptional results that drive growth, efficiency, and success for our clients."
        />
      </Helmet>
        <NavBar/>
        <Popup/>
          <FirstSection/>
          <SecondSection/>
          <ThirdSection/>
          <ForthSection/>
          <FifthSection/>
          <SixthSection/>
          <SeventhSection/>
          {/* <EightSection/> */}
          <NinthSection/>
          <TenthSection/>
          <EleventhSection/>
          <TwelvethSection/>
          <ThirteenthSection/>
          <FourteenSection/>
           <ClientsAccordion/>
           <CallButton/>
          <Footer/>
     
    </div>
  )
}

export default Home
