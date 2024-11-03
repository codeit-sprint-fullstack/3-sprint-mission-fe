import HeaderItem from "./components/HeaderItem";
import ItemsBody from "./components/ItemsBody";
import Footer from "../../../shared/components/Footer";
import "./css/Items.css";
import "./css/HeaderItem.css";

function Item() {
    return (
        <>
            <HeaderItem />
            <ItemsBody />
            <Footer />
        </>
    );
}

export default Item;