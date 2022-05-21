import { Link, NavLink } from 'react-router-dom';
import { useState, useContext, useRef } from 'react';

import { searchContext } from '../context';

import './header.scss';

import searchLogo from '../../assets/logos/search-icon.svg';
import mainLogo from '../../assets/logos/logo-brand.svg';
import menuLogo from '../../assets/logos/menu-img.svg';
import closeLogo from '../../assets/logos/close.svg';

export const Header = () => {
  const { setInputValue } = useContext(searchContext);
  const searchValue = useRef(null);
  const [visible, setvisible] = useState(true);
  const onClicked = () => {
    setvisible(!visible);
  };

  const handleInputValue = () => {
    setInputValue(searchValue.current.value);
  };

  return (
    <header className={'header container'}>
      <div className="header__left-side">
        <Link to={'/'}>
          <img className="header__main-logo" src={mainLogo} alt="logo-brand" />
        </Link>
        <button className="header__menu-btns" onClick={onClicked} width="32px">
          {visible ? (
            <img className="header__menu-btn" src={menuLogo} alt="menu" />
          ) : (
            <img className="header__close-btn" src={closeLogo} alt="close" width="24px" />
          )}
        </button>
      </div>
      <div className={visible ? 'header__right-side open-modal' : 'header__right-side'}>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink className={'header__nav-link header__nav-link--active'} to={'#'}>
                All
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink className={'header__nav-link'} to={'#'}>
                Design Theory
              </NavLink>
            </li>

            <li className="header__nav-item">
              <NavLink className={'header__nav-link'} to={'#'}>
                UX
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink className={'header__nav-link'} to={'#'}>
                UI
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink className={'header__nav-link'} to={'#'}>
                Typography
              </NavLink>
            </li>
          </ul>
        </nav>
        <form className="header__form">
          <input
            type="text"
            onChange={handleInputValue}
            ref={searchValue}
            className="header__form-input"
            placeholder="Search"
          />
          <button className="header__form-btn" type="button">
            <img src={searchLogo} />
          </button>
        </form>
      </div>
    </header>
  );
};
