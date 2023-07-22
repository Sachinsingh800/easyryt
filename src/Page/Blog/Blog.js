import React, { useState, useEffect } from "react";
import style from "./Blog.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import ThirteenthSection from "../../Section/ThirteenthSection/ThirteenthSection";
import ClientsAccordion from "../../Component/ClientsAccordion/ClientsAccordion";
import Footer from "../../Component/Footer/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  const [search, setSearch] = useState("");
  const initialCardsData = [
    {
      heading: "Heading1",
      image: "https://images04.nicepage.com/feature/583347/blog-category.jpg",
      description:
        "As parents and Internet advocates, we’re passionate about children’s safety online, and we do everything in our power to keep our kids safe. Just as we buckle them into seatbelts and make regular doctors visits, we keep tabs on what they’re doing online, using tools like encryption to protect them from danger..",
    },
    {
      heading: "Heading2",
      image:
        "https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/13691038-5aa8-4672-9b95-348c0733cabc/2021/09/06/4d690337-1a11-498d-9838-a15d6f97935a/effc500a-5d2f-4b5c-8556-66c9f72445bd.png",
      description:
        "How do I create a blog that will enchant visitors and make them come back to it again and again, subscribe, and share it with friends?” is one of the most common questions of newbie bloggers.",
    },
    {
      heading: "Heading3",
      image:
        "https://static.wixstatic.com/media/0e0314_20c9171713d947b8bd599af42798f491~mv2.png/v1/fill/w_1000,h_571,al_c,q_90,usm_0.66_1.00_0.01/0e0314_20c9171713d947b8bd599af42798f491~mv2.png",
      description:
        "How do I create a blog that will enchant visitors and make them come back to it again and again, subscribe, and share it with friends?” is one of the most common questions of newbie bloggers.",
    },
    {
      heading: "Heading4",
      image:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/07/Screenshot-2021-07-12-160240.png?auto=format&q=60&fit=max&w=930",
      description:
        "How do I create a blog that will enchant visitors and make them come back to it again and again, subscribe, and share it with friends?” is one of the most common questions of newbie bloggers.",
    },
    {
      heading: "Heading5",
      image:
        "https://i.graphicmama.com/blog/wp-content/uploads/2020/09/16071525/15-Inspiring-Blog-Design-Examples.png",
      description:
        "How do I create a blog that will enchant visitors and make them come back to it again and again, subscribe, and share it with friends?” is one of the most common questions of newbie bloggers.",
    },
    {
      heading: "Heading6",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBX89x-4-_06pVlKMkWrXODXnj2f9WJYIRs5cYiYHcF5JSU7ATmB5XQTM_LgcVKyKKgI&usqp=CAU",
      description:
        "How do I create a blog that will enchant visitors and make them come back to it again and again, subscribe, and share it with friends?” is one of the most common questions of newbie bloggers.",
    },
    // Add more card objects as needed
  ];

  const [cardsData, setCardsData] = useState([initialCardsData[0]]);
  localStorage.setItem("blog",JSON.stringify(cardsData))

  const handleCardClick = (heading) => {
    const filteredCards = initialCardsData.filter(
      (card) => card.heading === heading
    );
    setCardsData(filteredCards);
  };

  const [active, setActive] = useState(false);

  useEffect(() => {
    // Function to toggle the active state every 5 seconds
    const toggleActive = () => {
      setActive((prevActive) => !prevActive);
    };

    // Set up the interval to toggle the active state every 5 seconds
    const intervalId = setInterval(toggleActive, 5000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div className={style.leftBox}>
          <div className={style.bigCard}>
            <div className={style.imgBox}>
              <img
                className={active ? style.active : ""}
                src={cardsData[0]?.image}
              />
            </div>
            <h5>{cardsData[0]?.heading}</h5>
            <hr />
            <p className={style.para}>{cardsData[0]?.description}</p>
        <Link to={"/FullBlog"}><button className={style.btn}>Continue Reading→</button></Link>   
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
              return elem.description
                .toLowerCase()
                .includes(search.toLowerCase());
            })
            .map((card, index) => (
              <div
                className={style.card}
                key={index}
                onClick={() => handleCardClick(card.heading)}
              >
                <div className={style.imgbox2}>
                  <img src={card.image} alt={card.heading} />
                </div>
                <h5>{card.heading}</h5>
                <p className={style.parainfo} >{card.description}</p>
              </div>
            ))}
        </div>
      </div>
      <div className={style.section2}>
        <ThirteenthSection />
        <ClientsAccordion />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
