import React, { useState, useEffect } from "react";
import style from "./ThirteenthSection.module.css";
import { Link } from "react-router-dom";



const ThirteenthSection = () => {

  const cardsData = [
    {
      image: "https://www.creative-tim.com/blog/content/images/wordpress/2017/09/mia-baker-322594.jpg",
      heading: "Restaurant Website Development:",
      description: "Restaurant website development involves creating a user-friendly and visually appealing online platform for restaurants to showcase their menus, services, and brand. ",
    },
    {
      image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg",
      heading: "Designs,Wireframes & Mockups",
      description: "Designs, wireframes, and mockups are essential elements in the development process, ensuring cohesive visual representation and user experience for web and app projects.",
    },
    {
      image: "https://assets.justinmind.com/wp-content/uploads/2020/02/free-resource-unsplash-backgrounds.png",
      heading: "Prototype Demo",
      description: "A prototype demo is a visual representation of a product or software's functionalities and interactions, allowing stakeholders to preview its features before development completion.",
    },
    {
      image: "https://wpamelia.com/wp-content/uploads/2019/01/Screenshot_219.jpg",
      heading: "Change And Confirmation",
      description: "Change and confirmation refer to the process of verifying modifications made to a product or system before implementing them, ensuring the accuracy and approval of the updates.",
    },
    {
      image: "https://img.freepik.com/free-vector/landing-page-website-template-with-abstract-low-poly-design_1048-14390.jpg",
      heading: "SEO",
      description: "SEO (Search Engine Optimization) is the process of improving a website's visibility on search engine results pages, increasing organic traffic and enhancing online presence for better business performance.",
    },
    {
      image: "https://t4.ftcdn.net/jpg/03/12/29/79/360_F_312297947_N1M2l36fFOy8nErkLXDRTWJMz1eptOK7.jpg",
      heading: "Support And Maintenance",
      description: "Support and maintenance encompass ongoing activities to ensure the smooth operation, updates, and resolution of issues for software, websites, or systems to keep them functional, secure, and up-to-date.",
    },

    // Add more card data as needed...
  ];

  localStorage.setItem("blog2",JSON.stringify(cardsData))

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 4000); // 2-second delay

    return () => clearInterval(interval);
  }, [cardsData.length]);

  return (
    <div className={style.main}>
      <h1>Our Recent Blogs</h1>
      <p className={style.para}>
        Having Exclusive To Work With Startups To Corporate, We Have In-Depth
        Insighs About The Versatile Needs Of Diversified Industry Domains.
      </p>
      <div className={style.innerbox}>
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`${style.card} ${
              index === currentCardIndex ? style.active : ""
            }`}
          >
            <div className={style.imgbox}>
              <img
                className={style.img2}
                src={card.image}
                alt={`img${index + 1}`}
              />
            </div>
            <div className={style.infoBox}>
              <h6>{card.heading}</h6>
              <p>{card.description}</p>
            <Link to={"/FullBlog2"}><p style={{ color: "blue" }}>View</p></Link>  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirteenthSection;
