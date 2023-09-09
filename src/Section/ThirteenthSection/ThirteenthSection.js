import React, { useState, useEffect } from "react";
import style from "./ThirteenthSection.module.css";
import { Link ,useParams} from "react-router-dom";
import { cardsData } from "../../Const/Const";
import axios from "axios";




const ThirteenthSection = () => {
  const [cardsData, setCardsData] = useState([]);
  const [search, setSearch] = useState("");
  const [initialCardsData, setData] = useState([]);
  const { blogTitle } = useParams(); // Capture the blogTitle parameter

  console.log(blogTitle,"Blog")

  useEffect(() => {
    const handlegetData = async () => {
      try {
        const response = await axios.get('https://easyryt.onrender.com/client/getAllBlog');
        setData(response?.data?.data);
        console.log(response?.data?.data,"blog data")
        setCardsData(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    handlegetData();
  }, []);

  function scrollToTop() {
    localStorage.setItem("BlogName", JSON.stringify(cardsData[0]?.title));
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scrolling animation
    });
  }

  localStorage.setItem("blog2", JSON.stringify(cardsData));

  const handleCardClick = (heading) => {
    const filteredCards = initialCardsData.filter(
      (card) => card.heading === heading
    );
    setCardsData(filteredCards);
  };

  const [active, setActive] = useState(false);

  useEffect(() => {
  
    const toggleActive = () => {
      setActive((prevActive) => !prevActive);
    };

    const intervalId = setInterval(toggleActive, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const BlogContent = ({ htmlContent }) => {
    return <div className={style.description} dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  const originalString = cardsData[0]?.title;
  const urlFriendlyString = originalString?.replace(/\s+/g, '-');

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
           onClick={()=>handleCardClick(card.heading) }
            key={index}
       
          >
            <div className={style.imgbox}>
              <img
                className={style.img2}
                src={card?.blogImg}
                alt={`img${index + 1}`}
              />
            </div>
            <div className={style.infoBox}>
              <h6>{card?.title}</h6>
            <Link to={`/Blog/${urlFriendlyString }`} onClick={scrollToTop}><p style={{ color: "blue" }}>View</p></Link>  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirteenthSection;
