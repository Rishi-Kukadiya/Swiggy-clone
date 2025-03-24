import Navbar from "./nav"
import Mindfood from "./mindfood"
import Resinash from "./resinahm"
import Footer from "./Footer"
import Scan from "./scan_to_download";
export default function Fooddeliverycd(){
    return(
        <>
            <Navbar></Navbar>
            <Mindfood></Mindfood>
            <Resinash></Resinash>
            <Scan></Scan>
            <Footer></Footer>
        </>
    )
}