import './pageBtn.css'
import left from '../image/left.png';
import right from '../image/right.png';

function Pagebtn () {
    return(
        <div className='pageBtn'>
                <button className='page'><img src={left} alt='왼쪽 화살표'/></button>
                <button className='page'>1</button>
                <button className='page'>2</button>
                <button className='page'>3</button>
                <button className='page'>4</button>
                <button className='page'>5</button>
                <button className='page'><img src={right} alt='오른쪽 화살표'/></button>
        </div>
        )
}

export default Pagebtn;