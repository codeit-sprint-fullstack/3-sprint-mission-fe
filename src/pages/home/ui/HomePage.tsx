import FeaturedSection from '@/components/layout/Article/FeaturedSection';

type Article = {
  id: number;
  image: string;
  title: string;
  username: string;
  likes: number;
  date: string;
};

const HomePage = async () => {
  const articles: Article[] = [
    {
      id: 1,
      image: '/image.avif',
      title: '맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?',
      username: '총명한판다',
      likes: 10592,
      date: '2024-04-16',
    },
    {
      id: 2,
      image: '/image.avif',
      title: '맥북 14인치 32기가 4테라 정도 사양이면 얼마에 팔아야하나요?',
      username: '총명한판다',
      likes: 15731,
      date: '2024-12-03',
    },
    {
      id: 3,
      image: '/image.avif',
      title: '맥북 16인치 64기가 2테라 정도 사양이면 얼마에 팔아야하나요?',
      username: '총명한판다',
      likes: 8351,
      date: '2024-12-06',
    },
  ];
  return (
    <div className="mx-auto max-w-[75rem]">
      <h2 className='font-title text-xl font-bold text-gray-900 mt-2 mb-6'>
        베스트 게시글
      </h2>
      <div className='articles flex flex-wrap justify-center gap-6'>
        {articles.map((article) => (
          <FeaturedSection
            key={article.id}
            articles={[article]}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
