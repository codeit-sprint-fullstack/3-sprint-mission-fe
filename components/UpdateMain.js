import styles from '@/css/WriteMain.module.css';
import { useEffect, useState } from 'react';
import instance from '@/lib/instance';
import { useRouter } from 'next/router';

export default function UpdateMain() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();
    const { id } = router.query;

    const getArticle = async () => {
        if (!id) return;

        try {
            const response = await instance.get(`/articles/${id}`);
            const article = response.data;
            setTitle(article.title);
            setContent(article.content);
        } catch (error) {
            console.error('게시글 데이터를 불러오는 데 실패했습니다:', error);
        }
    };

    const handlePostSubmit = async () => {
        const accessToken = localStorage.getItem('accessToken');

        try {
            await instance.patch(`/articles/${id}`, {
                title,
                content,
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            });
            alert("게시글이 수정되었습니다!");
            router.push(`/articles/${id}`);
        } catch (error) {
            console.error('게시글 수정 중 오류 발생:', error);
        }
    };

    useEffect(() => {
        getArticle();
    }, []);

    return (
        <>
            <div className={styles.WriteMainContain}>
                <div className={styles.WriteMainTitle}>게시글 수정하기</div>
                <div
                    onClick={handlePostSubmit}
                    className={styles.WriteMainButton}>
                    수정
                </div>
            </div>
            <div className={styles.WriteMainText}>
                <div className={styles.WriteMainDes}>*제목</div>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={styles.WriteMainTitleInput}
                    placeholder='제목을 입력해주세요' />

                <div className={styles.WriteMainDes}>*내용</div>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className={styles.WriteMainDetailInput}
                    placeholder='내용을 입력해주세요' />
            </div>
        </>
    );
}