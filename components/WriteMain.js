import styles from '@/css/WriteMain.module.css';
import { useState } from 'react';
import instance from '@/lib/instance';
import { useRouter } from 'next/router';

export default function WriteMain() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();

    const handlePostSubmit = () => {
        instance.post(`/articles`, {
            image: "image.png",
            title,
            content,
        }).then((response) => {
            console.log(response);
            alert("게시글이 등록되었습니다!");
            const articleId = response.data?.id; // id가 있는지 확인
            if (articleId) {
                router.push(`/articles/${articleId}`);
            } else {
                console.error("응답에 ID가 없습니다.");
            }
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <>
            <div className={styles.WriteMainContain}>
                <div className={styles.WriteMainTitle}>게시글 쓰기</div>
                <div
                    onClick={handlePostSubmit}
                    className={styles.WriteMainButton}>
                    등록
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