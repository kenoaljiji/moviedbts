import React from 'react';
import classes from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={`${classes.footer}`}>
      <p>Copyright &copy; tmdb 2022 by Aljiji Kenan</p>
    </footer>
  );
};

export default Footer;
