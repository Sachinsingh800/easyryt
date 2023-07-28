import React,{useState,useEffect} from 'react'
import style from "./FullBlog2.module.css"
import NavBar from '../../Component/NavBar/NavBar'
import CallButton from '../../Component/CallButton/CallButton';
import Footer from '../../Component/Footer/Footer';
import BlogForm from '../../Component/BlogForm/BlogForm';
import axios from 'axios';

function FullBlog2() {
    const blog=JSON.parse(localStorage.getItem("blog2"))
    const [active, setActive] = useState(false);

    const [cardsData, setCardsData] = useState([]);
    const [search, setSearch] = useState("");
    const [initialCardsData, setData] = useState([]);
  
  
    useEffect(() => {
      const handlegetData = async () => {
        try {
          const response = await axios.get('https://easyryt.onrender.com/admin/getAllBlog');
          setData(response.data.data);
          setCardsData([response.data.data[0]])
        } catch (error) {
          console.log(error);
        }
      };
      handlegetData();
    }, []);
  
  
  
  
  
  
    // console.log(cardsData,"ss")
    localStorage.setItem("blog",JSON.stringify(cardsData))
  
    const handleCardClick = (heading) => {
      const filteredCards = initialCardsData.filter(
        (card) => card.heading === heading
      );
      setCardsData(filteredCards);
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
      return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    };
  return (
    <div className={style.main}>
      <NavBar/>
      <div className={style.container}>
        <div className={style.imgbox}>
        <img    className={active ? style.active : ""}  src={blog[0]?.blogImg}  alt='blog' />
        </div>
          <div className={style.infobox}>
            <div  className={style.info}>
            <h3><span>Title:</span>{blog[0]?.title}</h3>
            <hr/>
          <h4><span>Heading:</span>{blog[0]?.heading}</h4>
          <hr/>
          <BlogContent htmlContent={blog[0]?.description} />
            </div>
          <div className={style.form}>
          <BlogForm/>
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
                  <img src={card.blogImg} alt={card.heading} />
                </div>
                <h5>{card.headings}</h5>
                <p className={style.parainfo} >{card.description}</p>
              </div>
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

export default FullBlog2
