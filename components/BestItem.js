import BestItemList from './BestItemList';
import { useState, useEffect } from "react";
import styles from '@/css/BestItem.module.css'
import instance from "@/lib/axios";

export default function BestItem({ }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        instance.get(`/article/articleList?pageSize=3&orderBy='like'`)
            .then((response) => {
                setPosts(response.data.Articles);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className={styles.BestItemContain}>
            <div className={styles.BestItemHeader}>베스트 게시글 </div>
            <div className={styles.test123}>
                {posts.map((post) => (
                    <BestItemList key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}