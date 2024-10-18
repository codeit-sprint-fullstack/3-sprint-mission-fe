import '../css/body.css';
import ItemCompo from './ItemCompo';

function Body1() {
    return (
        <div className='best-item'>
            <div className='best-item-text'>베스트 상품</div>
            <div className='item-container'>
                <ItemCompo />
                <ItemCompo />
                <ItemCompo />
                <ItemCompo />
            </div>
        </div>
    );
}

export default Body1;