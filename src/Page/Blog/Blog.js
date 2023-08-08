import React, { useState, useEffect } from "react";
import style from "./Blog.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import ThirteenthSection from "../../Section/ThirteenthSection/ThirteenthSection";
import ClientsAccordion from "../../Component/ClientsAccordion/ClientsAccordion";
import Footer from "../../Component/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CallButton from "../../Component/CallButton/CallButton";

const Blog = () => {
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
        setCardsData([response?.data?.data[0]]);
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
      <NavBar />
      <div className={style.container}>
        <div className={style.leftBox}>
          <div className={style.bigCard}>
            <div className={style.imgBox}>
              <img
                className={active ? style.active : ""}
                src={cardsData[0]?.blogImg}
              />
            </div>
            <h5>{cardsData[0]?.heading}</h5>
            <hr />
            <p className={style.para}> <BlogContent htmlContent={cardsData[0]?.description}/></p>
            <Link to={`/Blog/${urlFriendlyString }`} onClick={scrollToTop}>
              <button className={style.btn}>Continue Reading→</button>
            </Link>
          </div>
        </div>
        <div className={style.rightBox}>
          <input
            className={style.searchInputbox}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search here..."
          />
          {initialCardsData
            .filter((elem) => {
              return elem.description.toLowerCase().includes(search.toLowerCase());
            })
            .map((card, index) => (
              <div
                className={style.card}
                key={index}
                onClick={() => handleCardClick(card.heading)}
              >
                <div className={style.imgbox2}>
                  <img src={card?.blogImg} alt={card?.heading} />
                </div>
                <h5>{card?.heading}</h5>
               
                <p className={style.parainfo}> <BlogContent htmlContent={card?.description}/></p>
              </div>
            ))}
        </div>
      </div>
      <div className={style.section2}>
        <ThirteenthSection />
        <CallButton />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
