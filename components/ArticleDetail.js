import styles from '@/css/articleDetail.module.css';
import Image from 'next/image';
import dayjs from "dayjs";
import { useRouter } from 'next/router';
import { useState } from 'react';
import instance from '@/lib/axios';
import ArticleDropDown from './ArticleDropDown';
import ArticleCommentDropDown from './ArticleCommentDropDown';

export default function ArticleDetail({ article, onCommentAdded }) {
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleClick = () => {
        router.push(`/`);
    };

    const handlePostSubmit = () => {
        if (!content) {
            alert('내용을 입력해주세요!');
        }
        if (content) {
            instance.post(`/articleComment`, {
                articleId: article.id,
                content,
            }).then((response) => {
                alert("댓글이 등록되었습니다!");
                onCommentAdded();
                setContent('');
            }).catch((error) => {
                console.error(error);
            });
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handlePostSubmit();
        }
    };

    return (
        <div className={styles.articleDetailContain}>
            <div className={styles.ArticleDetailHead}>
                <div className={styles.ArticleDetailText}>
                    {article.title}
                </div>
                <ArticleDropDown id={article.id} />
            </div>
            <div className={styles.ArticleDetailMain}>
                <div className={styles.ArticleDetailUser}>
                    <div>
                        <Image
                            width={40}
                            height={40}
                            src="/images/userIcon.png" alt="User" />
                    </div>
                    <div className={styles.ArticleDetailUserName}>{article.user}</div>
                    <div className={styles.ArticleDetailDate}>{dayjs(article.createdAt).format('YYYY. MM. DD')}</div>
                </div>
                <div className={styles.ArticleDetailLikeContain}>
                    <div className={styles.heartIconImage}>
                        <Image
                            width={36}
                            height={36}
                            src="/images/heart.png" alt="heart" />
                    </div>
                    <div className={styles.ArticleDetailLikeCount}>{article.like}</div>
                </div>
            </div>

            <div className={styles.ArticleDetailLikeContain2}>
                {article.content}
            </div>

            <div className={styles.ArticleDetailCommentTitle}>댓글 달기</div>
            <textarea
                value={content}
                onKeyDown={handleKeyDown}
                onChange={(e) => setContent(e.target.value)}
                className={styles.ArticleDetailInput}
                placeholder='내용을 입력해주세요' />
            <div className={styles.ArticleDetailCommentRegContain}>
                <div
                    onClick={handlePostSubmit}
                    className={styles.ArticleDetailCommentReg}>등록</div>
            </div>


            {article.ArticleComment && article.ArticleComment.length > 0 ? (
                article.ArticleComment.map((comment, index) => (
                    <div key={index} className={styles.ArticleDetailCommentBoxContain}>
                        <div className={styles.ArticleDetailCommentBox}>
                            <div>
                                {comment.content}
                            </div>
                            <ArticleCommentDropDown id={comment.id} onCommentAdded={onCommentAdded} />
                        </div>

                        <div className={styles.ArticleDetailCommentUserAll}>
                            <div>
                                <Image
                                    width={40}
                                    height={40}
                                    src="/images/userIcon.png"
                                    alt="User"
                                />
                            </div>
                            <div className={styles.ArticleDetailCommentUser}>
                                <div className={styles.ArticleDetailCommentUserName}>
                                    {comment.user}
                                </div>
                                <div className={styles.ArticleDetailCommentUserTime}>
                                    {dayjs(comment.createdAt).format('YYYY. MM. DD')}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className={styles.noCommentImage}>
                    <Image
                        width={1200}
                        height={208}
                        src="/images/noComment.png"
                        alt="User"
                    />
                </div>
            )}
            <div
                onClick={handleClick}
                className={styles.returnImage}>
                <Image
                    width={240}
                    height={48}
                    src="/images/return.png"
                    alt="User"
                />
            </div>
        </div>
    );
}
