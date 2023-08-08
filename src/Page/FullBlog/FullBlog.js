import React, { useState, useEffect } from 'react';
import style from './FullBlog.module.css';
import NavBar from '../../Component/NavBar/NavBar';
import CallButton from '../../Component/CallButton/CallButton';
import Footer from '../../Component/Footer/Footer';
import BlogForm from '../../Component/BlogForm/BlogForm';
import axios from 'axios';
import { Link, useParams, useLocation } from 'react-router-dom';

function FullBlog() {
  const { blogTitle } = useParams();
  const location = useLocation();
  const blogName = location.pathname.slice(6,12);
  const urlFriendlyTitle = blogName.replace(/-/g, ' ');

  const [active, setActive] = useState(false);
  const [blog, setBlog] = useState([]);
  const [initialCardsData, setInitialCardsData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Load initial blog data from local storage
    const savedBlog = JSON.parse(localStorage.getItem('blog2'));
    if (savedBlog) {
      setBlog(savedBlog);
    }

    // Fetch all blog data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://easyryt.onrender.com/client/getAllBlog');
        setInitialCardsData(response?.data?.data || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
   
    const handleFilter = () => {
      const result = initialCardsData.filter((item) => item.title.slice(0,6) === urlFriendlyTitle);
      console.log('Filtered result:', result);
     setBlog(result)
      // Do something with the filtered result, if needed
    };

    handleFilter();
  }, [initialCardsData, urlFriendlyTitle]);

  const handleCardClick = (heading) => {
    const filteredCards = initialCardsData.filter((card) => card.heading === heading);
    localStorage.setItem('blog2', JSON.stringify(filteredCards));
  };

  const BlogContent = ({ htmlContent }) => {
    return <div className={style.description} dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div className={style.imgbox}>
          <div className={style.imginnerbox}>
            <h3>{blog[0]?.title}</h3>
            <h6>{blog[0]?.createdAt}</h6>
            <div className={style.imgcontainer}>
              <img className={active ? style.active : ''} src={blog[0]?.blogImg} alt="blog" />
            </div>
          </div>
          <BlogForm />
        </div>
        <div className={style.infobox}>
          <div className={style.info}>
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
                  return elem.description.toLowerCase().includes(search.toLowerCase());
                })
                .map((card, index) => (
                  <Link to={`/Blog/${card?.title}`} key={index}>
                    <div className={style.card} onClick={() => handleCardClick(card?.heading)}>
                      <div className={style.imgbox2}>
                        <img src={card?.blogImg} alt={card.heading} />
                      </div>
                      <h5>{card?.title}</h5>
                      <h5>{card?.heading}</h5>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <CallButton />
      <Footer />
    </div>
  );
}

export default FullBlog;
