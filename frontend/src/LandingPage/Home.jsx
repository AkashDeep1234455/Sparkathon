import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { useState } from "react";
import { SearchDataProvider } from "../components/context";
function Home() {
    const [searchData,setSearchData] = useState([]);
    return ( 
        <>
        <SearchDataProvider searchData={searchData}>
            <NavBar setSearchData={setSearchData} />
            <Outlet />
        </SearchDataProvider>
        </>
     );
}

export default Home;