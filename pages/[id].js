import ArticleDetail from '@/components/ArticleDetail';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import instance from '@/lib/axios';


export default function Product() {
    const router = useRouter();
    const { id } = router.query;
    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {
        if (!id) return; // id가 없는 경우 아무 작업도 하지 않음
        try {
            const response = await instance.get(`/article/${id}`);
            setArticles(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchArticles(); // 컴포넌트가 마운트될 때 호출
    }, [id]);

    return (
        <>
            <Header />
            {articles.map((article) => (
                <ArticleDetail key={article.id} article={article}
                    onCommentAdded={fetchArticles} />
            ))}
        </>
    );
}
