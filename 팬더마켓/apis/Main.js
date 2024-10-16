import { getArticle, getArticleList, createArticle, patchArticle, deleteArticle } from "./ArticleService.js";
import { getProduct, getProductList, createProduct, patchProduct, deleteProduct} from "./ProductService.js";


async function getArt(idNum) {
    const get = await getArticle(idNum);
    console.log(get);
}


function App(){
    const [count, setcount] =useState(0);
    const handleClick = () =>{
        setcount(count+1)
    };
}