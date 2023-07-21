import React from 'react';
import style from './LeftSection.module.css';

const LeftSection = () => {
  return (
    <div className={style.main}>
        <h1>Recent Posts</h1>
      <div className={style.container}>
        <div
          className={`${style.random_div} ${style.large_div}`}
          data-width="30"
          data-height="20"
        >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVKNwE2Gkoqtafp07QC8ZS_jndQE624-GEZQ&usqp=CAU" />
        </div>
        <div
          className={`${style.random_div} ${style.small_div}`}
          data-width="20"
          data-height="20"
        >
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvbwq8kCcndS2NrDB_IiDRiBNa5KSkfeTFmg&usqp=CAU" />
        </div>
      </div>
      <div className={style.container}>
      <div
          className={`${style.random_div} ${style.small_div}`}
          data-width="20"
          data-height="20"
        >
  <img src="https://thumbs.dreamstime.com/b/landscape-nature-view-background-view-window-landscape-nature-view-background-view-window-wonderful-landscape-121459679.jpg" />
        </div>
        <div
          className={`${style.random_div} ${style.large_div}`}
          data-width="30"
          data-height="20"
        >
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-Zs1jAhbmypFTiTem5s6YzJpLB4tyD2F_Q&usqp=CAU" />
        </div>
      
      </div>
      <div className={style.container}>
        <div
          className={`${style.random_div} ${style.large_div}`}
          data-width="30"
          data-height="20"
        >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbDvE4qSzr_394bpMl7v_PAVERZ36LRpz6KR0jYFG--HDttbsZ2MUO7kbAos-D8b9DDs&usqp=CAU" />
        </div>
        <div
          className={`${style.random_div} ${style.small_div}`}
          data-width="20"
          data-height="20"
        >
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxGHrZN22cp7SB9wrmS2c_C556HO8ZdLj5Yw&usqp=CAU" />
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
