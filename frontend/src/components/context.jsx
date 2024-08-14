import React, { createContext, useContext } from 'react';

const SearchDataContext = createContext();

export const useSearchData = () => useContext(SearchDataContext);

export const SearchDataProvider = ({ children, searchData }) => {
    return (
        <SearchDataContext.Provider value={searchData}>
            {children}
        </SearchDataContext.Provider>
    );
};