import ArticleDetail from '@/components/ArticleDetail';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import instance from '@/lib/instance';

export default function Product() {
    const router = useRouter();
    const { articleId } = router.query;
    const [article, setArticle] = useState(null);

    const fetchArticle = async () => {
        if (!articleId) return;
        try {
            const response = await instance.get(`/articles/${articleId}`);
            const commentsResponse = await instance.get(`/articles/${articleId}/comments?limit=10`);
            setArticle({
                ...response.data,
                comments: commentsResponse.data.list,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleCommentAdded = () => {
        fetchArticle();
    };

    useEffect(() => {
        fetchArticle();
    }, [articleId]);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            <ArticleDetail article={article} onCommentAdded={handleCommentAdded} />
        </>
    );
}
