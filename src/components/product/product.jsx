import { useEffect, useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import { searchContext } from '../context';

import icon from '../../assets/logos/icon.svg';
import facebook from '../../assets/logos/facebook.svg';
import git from '../../assets/logos/gitHub.svg';
import twitter from '../../assets/logos/twitter.svg';
import linkedin from '../../assets/logos/linkedin.svg';
import group from '../../assets/logos/Group.svg';

import './product.scss';

export const Product = () => {
  const limit = 10;
  const prevRef = useRef();
  const nextRef = useRef();
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [globalPosts, setGlobalPosts] = useState([]);
  const { inputValue } = useContext(searchContext);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setGlobalPosts(posts);
  }, [posts]);

  useEffect(() => {
    const filteredPosts = posts.filter((post) => post.title.includes(inputValue));
    setGlobalPosts(filteredPosts);
  }, [inputValue]);

  const handlePrevBtn = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNextBtn = () => {
    setPage(page + 1);
  };

  return (
    <div className="container">
      <main className="main">
        <div className="main__left-side">
          <h1>What I do! </h1>
          <p className="main__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis
            ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.
          </p>
          <button className="main__explore-btn">EXPLORE ME</button>
          <button>
            <img src={icon} alt="icon" />
          </button>
          <div className="main__icons">
            <Link className="main__icon-link" to={'#'}>
              <img src={facebook} alt="facebook" />
            </Link>
            <Link className="main__icon-link" to={'#'}>
              <img src={git} alt="facebook" />
            </Link>
            <Link className="main__icon-link" to={'#'}>
              <img src={twitter} alt="facebook" />
            </Link>
            <Link className="main__icon-link" to={'#'}>
              <img src={linkedin} alt="facebook" />
            </Link>
          </div>
        </div>
        {posts.length > 0 && (
          <div className="main__right-side">
            <h2>Recent Posts</h2>
            {globalPosts.slice((page - 1) * limit, limit * page).map((post) => (
              <div key={post.id} className="main__card">
                <div className="main__card-header">
                  <p>September 24.2020</p>
                  <p>Design theory</p>
                </div>
                <div className="main__card-body">
                  <Link to={'/posts/' + post.id}>{post.title} </Link>
                </div>
                <div className="main__card-footer">
                  <img src={group} alt="group" />
                  <span>3 minutes read</span>
                </div>
                <hr />
              </div>
            ))}
            <div className="main__pagination">
              <button ref={prevRef} onClick={handlePrevBtn}>
                prev
              </button>
              <button ref={nextRef} onClick={handleNextBtn}>
                next
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
