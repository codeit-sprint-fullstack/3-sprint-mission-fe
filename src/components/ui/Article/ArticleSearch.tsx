const ArticleSection = async () => {
  const classNames = 'bg-gray-100 w-full py-[0.5625rem] px-4 gap-2.5 rounded-xl'
  const placeholder = '검색할 상품을 입력해주세요';
  return (
    <div className='flex'>
      <input type='text' placeholder={placeholder} className={classNames} />
    </div>
  )
}

export default ArticleSection;
