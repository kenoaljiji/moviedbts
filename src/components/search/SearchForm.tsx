import React, { useContext, useEffect, useCallback, useRef } from 'react';
import classes from './Search.module.scss';
import { debounce } from 'lodash';
import globalContext from '../../context/globalContext';
import { useSearchParams } from 'react-router-dom';
import { searchMovies, listMovies } from '../../api/apiServices';

const Search = () => {
  const GlobalContext = useContext(globalContext);

  const { state, dispatch } = GlobalContext;

  const { category } = state;

  const [searchParams, setSearchParams] = useSearchParams();

  const inputRef: any = useRef();

  const query: any = searchParams.get('query');

  const categoryName = category === 'tv' ? 'Tv Shows' : 'Movies';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newQuery = e.target.value;

    if (newQuery === '') {
      setSearchParams({});
    } else
      setSearchParams({
        query: newQuery,
      });
  };

  const debouncedFilter = useCallback(
    debounce(() => {
      if (inputRef.current.value === query) {
        if (query?.length > 3) {
          searchMovies(category, query, dispatch);
        } else {
          listMovies(category, dispatch);
        }
      }
    }, 1000),

    [query, category, dispatch, inputRef]
  );

  useEffect(() => {
    if (query) {
      debouncedFilter();
    } else listMovies(category, dispatch);
  }, [debouncedFilter, category, dispatch, query]);

  return (
    <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
      <div className={classes['form-group']}>
        <label>Search {categoryName}</label>
        <input
          className={classes['form-control']}
          placeholder={`Search a ${categoryName}`}
          type='text'
          defaultValue={query}
          ref={inputRef}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Search;
