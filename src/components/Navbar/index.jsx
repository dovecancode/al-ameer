import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { pageLinks, Button } from '../../Data';
import { NavLink, Link } from 'react-router-dom';
import '../Navbar/style.css';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
        setIsMenuOpen(false);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
        <Link to="/" className="activeLogo">
          <h1 className="first">
            Al-<span className="second">Ameer</span>
          </h1>
        </Link>
        <div className={`navLink ${isMenuOpen ? 'active' : ''}`}>
          {pageLinks.map((pageLink) => {
            const { id, link, text } = pageLink;
            return (
              <NavLink key={id} to={link} className="link" onClick={closeMenu}>
                {text}
              </NavLink>
            );
          })}
          <Link
            to="appointment"
            className="appointmentBtnActive"
            onClick={closeMenu}
          >
            <Button word="Appointment" />
          </Link>
        </div>
        <div className="navbarBtn">
          <SearchIcon
            className="searchIcon"
            sx={{
              fontSize: 30,
              marginRight: 3,
              color: '#FCFEFE',
              cursor: 'pointer',
            }}
          />
          <Link to="appointment" className="appointmentBtn">
            <Button word="Appointment" />
          </Link>
        </div>
        <div className="iconMenu" id="iconMenu" onClick={toggleMenu}>
          {isMenuOpen ? (
            <CloseIcon
              sx={{
                fontSize: 35,
                color: '#FCFEFE',
              }}
            />
          ) : (
            <MenuIcon
              sx={{
                fontSize: 35,
                color: '#FCFEFE',
              }}
            />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
