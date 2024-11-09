import './index.css';

const PageButtonRecent = () => {

  const pageNationHandle = async (e) => {
    const prodsList = await getProducts(fetchSortData);
    setProdsList(prodsList.list);
  };

  const button = [];
  for (let i = 1; i <= 5; i++) {
    button.push(
      <button key={i} onClick={pageNationHandle}>
        {i}
      </button>
    );
  }
  return button;
};

export default PageButtonRecent;