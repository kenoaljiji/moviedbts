import React, { useContext, useCallback } from 'react';
import classes from './Header.module.scss';
import logo from '../../../assets/logo.svg';
import SearchForm from '../../search/SearchForm';
import globalContext from '../../../context/globalContext';
import Button from '../../UI/button/Button';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const GlobalContext = useContext(globalContext);

  const { state, dispatch } = GlobalContext;

  const { category } = state;

  const goToCategory = useCallback(
    (category: string) => {
      dispatch({
        type: 'SET_CATEGORY',
        payload: category,
      });
    },

    [dispatch]
  );

  return (
    <div className='container'>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <Button
            click={() => goToCategory('movie')}
            color={`${classes['nav-link']} ${
              category === 'movie' && classes.active
            }`}
            value='Movie'
          />

          <Button
            color={`${classes['nav-link']} ${
              category === 'tv' && classes.active
            }`}
            click={() => goToCategory('tv')}
            value={'Tv Shows'}
          />
        </nav>
        <div className={classes.logo}>
          <Link to='/'>
            <img src={logo} alt='Movie Db App' />
          </Link>
        </div>
      </header>
      <SearchForm />
    </div>
  );
};
export default Header;
