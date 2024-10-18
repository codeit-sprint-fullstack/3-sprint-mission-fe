import '../css/body.css';
import AllItemCompo from './AllItemCompo';

function Body2() {
    return (
        <div className='all-item'>
            <div className='all-item-header'>
                <div className='all-item-text'>판매 중인 상품</div>
                <div className='all-item-option'>
                    <input className='all-item-searchbox' placeholder='검색할 상품을 입력해주세요'></input>
                    <button className='all-item-addButton'>상품 등록하기</button>
                    <select className='selectBox'>
                        <option className='option1'>최신순</option>
                        <option className='option2'>좋아요순</option>
                    </select>
                </div>
            </div>
            <div className='all-item-list'>
                <AllItemCompo />
                <AllItemCompo />
                <AllItemCompo />
                <AllItemCompo />
                <AllItemCompo />
                <AllItemCompo />
                <AllItemCompo />
                <AllItemCompo />
                <AllItemCompo />
                <AllItemCompo />
            </div>
        </div>
    );
}

export default Body2;