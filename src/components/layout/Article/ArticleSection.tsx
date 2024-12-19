const ArticleSection = ({ articles }) => (
  <section className='posts-section'>
    <h2 className='section-title'>게시글</h2>
    <SearchBar />
    {posts.map((post) => (
      <PostItem
        key={post.id}
        post={post}
      />
    ))}
  </section>
);
