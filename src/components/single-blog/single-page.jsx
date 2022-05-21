import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './single-page.scss';

import clubs from '../../assets/logos/clubs.svg';
import share from '../../assets/logos/share.svg';
import group from '../../assets/logos/Group.svg';
import mainImg from '../../assets/img/Img 01.png';

export const SinglePage = () => {
  const param = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + param.id)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <div className="single ">
        <div className="single__left-side">
          <div className="single__clubs">
            <img src={clubs} alt="clubs" width={'18px'} />
            <span>125</span>
          </div>
          <div className="single__clubs">
            <img src={share} alt="clubs" width={'18px'} />
            <span>70</span>
          </div>
        </div>
        <div className="single__right-side">
          <h2>user interface</h2>
          <div key={param} className="single__card">
            <div className="single__card-body">{posts.title}</div>
            <div className="single__card-footer">
              <div className="single__footer-title">october 24, 2020 |</div>
              <div className="single__footer-icon">
                <img src={group} alt="group" width={'14px'} />
                <span>3 minutes read</span>
              </div>
            </div>
            <img className="single__image" src={mainImg} alt="mainImg" />
            <p>{posts.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
