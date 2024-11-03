import { Link } from 'react-router-dom';
import Button from '../../shared/Button';

const AddProductButton = () => {
  return (
    <Link to={'/registration'}>
      <Button>상품 등록하기</Button>
    </Link>
  );
};

export default AddProductButton;
