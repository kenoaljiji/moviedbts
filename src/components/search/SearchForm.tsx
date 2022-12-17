import { useState, useContext, useEffect, useRef, useMemo } from 'react';
import classes from './Search.module.scss';
import { debounce } from 'lodash';
import globalContext from '../../context/globalContext';
import { searchMovies, listMovies } from '../../api/apiServices';

const Search = () => {
    const GlobalContext = useContext(globalContext);

    const { state, dispatch } = GlobalContext;

    const { category, searchTerm } = state;

    const [searchValue, setSearchValue] = useState<string>(searchTerm);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const categoryName = category === 'tv' ? 'Tv Shows' : 'Movies';

    const debouncedFilter = useMemo(
        () =>
            debounce(() => {
                if (inputRef?.current?.value === searchValue) {
                    dispatch({
                        type: 'QUERY_INPUT',
                        payload: searchValue,
                    });
                }
            }, 1000),

        [searchValue, dispatch],
    );

    useEffect(() => {
        if (searchValue.length > 3) {
            debouncedFilter();
        } else dispatch({ type: 'QUERY_INPUT', payload: '' });
    }, [debouncedFilter, dispatch, searchValue]);

    useEffect(() => {
        if (searchTerm.length > 3) {
            searchMovies(category, searchTerm, dispatch);
        } else {
            listMovies(category, dispatch);
        }
    }, [category, dispatch, searchTerm]);

    return (
        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
            <div className={classes['form-group']}>
                <label>Search {categoryName}</label>
                <input
                    className={classes['form-control']}
                    placeholder={`Search a ${categoryName}`}
                    type="text"
                    value={searchValue}
                    ref={inputRef}
                    onChange={(e) => setSearchValue(e.target.value)}
                    autoComplete="off"
                />
            </div>
        </form>
    );
};

export default Search;
