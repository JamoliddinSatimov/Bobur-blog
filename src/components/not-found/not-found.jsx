import './not-found.scss';
import notFoundImg from '../../assets/logos/not-found.svg';
import rightArrow from '../../assets/logos/arraw-right.svg';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container not-found__container">
        <img className="not-found__img" src={notFoundImg} alt="not found" width="500px" height="193px" />
        <h2>Page not found - 404</h2>
        <p>This page not found (deleted or never exists).Try a phrase in search box or back to home and start again.</p>
        <div className="not-found__link-wrapper">
          <Link to={'/'}>
            <span>TAKE ME HOME!</span>
            <img src={rightArrow} alt="arrow to right" />
          </Link>
        </div>
      </div>
    </div>
  );
};
