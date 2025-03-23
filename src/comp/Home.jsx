import Header from "./Header"
import Food from "./Food"
import Footer from "./Footer"
import Scan_to_download from "./scan_to_download"
import Dine from "./Dine"
export default function Home(){
    return(
        <>
        <Header></Header>
        <Food></Food>
        <Dine></Dine>
        <Scan_to_download></Scan_to_download>
        <Footer></Footer>
        </>
    )
}