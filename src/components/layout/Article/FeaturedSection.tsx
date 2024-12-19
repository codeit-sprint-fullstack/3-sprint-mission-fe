import FeaturedCard from '@/components/ui/Article/FeaturedCard';

const FeaturedSection = async ({ articles }) => (
  <section className='featured-section'>
    {articles.map((article) => (
      <FeaturedCard
        key={article.id}
        article={article}
      />
    ))}
  </section>
);

export default FeaturedSection;
