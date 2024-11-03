import Nav from '../layouts/navbar/Navbar';
import Main from '../layouts/main/Main';

const ItemsPage = () => {
  return (
    <>
      <Nav currentPath={'/items'} />
      <Main />
    </>
  );
};

export default ItemsPage;
