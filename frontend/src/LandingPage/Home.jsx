import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
function Home() {
    return ( 
        <>
        <NavBar/>
        <Outlet/>
        </>
     );
}

export default Home;