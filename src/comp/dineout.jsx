import Navbar from "./nav";
import Footer from "./Footer";
import Scan from "./scan_to_download";
import Ahrest from "./ahrest";
import Ashcards from "./ahrestcard";
export default function Dineout(){
    return(
        <>
            <Navbar></Navbar>
            <Ahrest></Ahrest>
            <Ashcards></Ashcards>
            <Scan></Scan>
            <Footer></Footer>
        </>
    )
}