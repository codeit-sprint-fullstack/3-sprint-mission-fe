import HeaderPart from './ProductPage/header.js';
import MainPart from './ProductPage/mainPart.js';
import FooterPart from './ProductPage/footer.js';
import PaginationBar from './ProductPage/pagination.js';

function ProductPage() {
    return(
        <div>
            <HeaderPart/>
            <MainPart/>
            <PaginationBar/>
            <FooterPart/>
      </div>
    )
}

export default ProductPage;