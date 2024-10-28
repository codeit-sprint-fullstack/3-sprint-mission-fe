import BestItem from "./BestItem";
import AllItem from "./AllItem";
import '../css/BestItem.css';
import '../css/AllItem.css';

function BodyMain() {
    return (
        <div className="body-main">
            <BestItem />
            <AllItem />
        </div>
    );
}

export default BodyMain;

