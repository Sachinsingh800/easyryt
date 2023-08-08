import React,{useState,useEffect} from 'react'
import style from "./FullBlog.module.css"
import NavBar from '../../Component/NavBar/NavBar'
import CallButton from '../../Component/CallButton/CallButton';
import Footer from '../../Component/Footer/Footer';
import BlogForm from '../../Component/BlogForm/BlogForm';
import axios from 'axios';
import ClientsAccordion from '../../Component/ClientsAccordion/ClientsAccordion';
import { Link, useParams } from "react-router-dom";



function FullBlog() {
    const blog=JSON.parse(localStorage.getItem("blog2"))
    const [active, setActive] = useState(false);
    const { blogTitle } = useParams(); 
  

    
    const [cardsData, setCardsData] = useState([]);
    const [search, setSearch] = useState("");
    const [initialCardsData, setData] = useState([]);


  
    useEffect(() => {
      const handlegetData = async () => {
        try {
          const response = await axios.get('https://easyryt.onrender.com/client/getAllBlog');
          setData(response.data.data);
          setCardsData([response.data.data[0]])
        } catch (error) {
          console.log(error);
        }
      };
      handlegetData();
    }, []);
  
  
  
    const handleCardClick = (heading) => {
      const filteredCards = initialCardsData.filter(
        (card) => card.heading === heading
      );
      localStorage.setItem("blog2",JSON.stringify(filteredCards))
    };
  

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
    const BlogContent = ({ htmlContent }) => {
      return <div className={style.description} dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    };

 
  return (
    <div className={style.main}>
      <NavBar/>
      <div className={style.container}>
        <div className={style.imgbox}>
          <div className={style.imginnerbox}>
          <h3>{blog[0]?.title}</h3>
          <h6>{blog[0]?.createdAt}</h6>
          <div className={style.imgcontainer}>
          <img    className={active ? style.active : ""}  src={blog[0]?.blogImg}  alt='blog' />
          </div>
        
          </div>
     
        <BlogForm/>
        </div>
          <div className={style.infobox}>
            <div  className={style.info}>
          <BlogContent htmlContent={blog[0]?.description} />
            </div>
          <div className={style.form}>
            <h2>Recent Blog</h2>
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
       <Link to={`/Blog/${card?.title}`}>  <div
                className={style.card}
                key={index}
                onClick={() => handleCardClick(card.heading)}
              >
                <div className={style.imgbox2}>
                  <img src={card.blogImg} alt={card.heading} />
                </div>
                <h5>{card.title}</h5>
                <h5>{card.heading}</h5>
              </div>
              </Link>     
            ))}
        </div>
          </div>
          </div>
    
      </div>
      <CallButton/>
      <Footer/>
    </div>
  )
}

export default FullBlog
