import styles from "@/styles/posts.module.css"
import Comment from '@/components/post/comment';
import CommentList from '@/components/post/postCommentList';
import DropdownMenu from "@/components/Dropdown/DropdownBox";
import FormatDate from "@/utils/Format";
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from 'next/image';
import { useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import axios from '@/lib/axios';


export default function IdPost(){
  const [post, setPost] = useState();
  const [postComment, setPostComment]= useState([]); 
  const router = useRouter();
  const id = router.query['id'];

  async function loadPost(targetId) {
    const res = await axios.get(`/articles/${targetId}`);
    const nextPost = res.data;
    setPost(nextPost);
  }

  async function loadPostComment(targetId) {
    try {
      const res = await axios.get(`/articles/${targetId}/comment`);
      console.log("Post Comments Response:", res.data); // 응답 확인
      const nextPostComment = Array.isArray(res.data) ? res.data : []; // 배열 확인
      setPostComment(nextPostComment);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  useEffect(() => {
    if (id) {
      loadPost(id);
      loadPostComment(id);
    }
  }, [id]);



  const handleDelete = (postId) => {
    setPost((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };


  if(!post) return null;

  return(
    <div>
      <div>
        <Header/>
      </div>
      <div className={styles.postWrapper}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.postTitle}>{post.title}</h1>
             <DropdownMenu
              postId={post.id}
              onDelete={handleDelete}
            />
        </div>
        <div className={styles.aboutPost}>
          <div>
            <Image 
            src="/images/userImg.png"
            width={40}
            height={40}
            alt='userImage'
            className={styles.userImage}
            />
            <span className={styles.userName}>총명한판다</span>
            <span className={styles.postDate}>{FormatDate(post.createdAt)}</span>
          </div>
            <div className={styles.heartWrapper}>
              <Image
              src="/images/ic_heart.png"
              width={32}
              height={32}
              alt='heartImage'
              />
              <span className={styles.favoriteCount}>999</span>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <span className={styles.postContent}>{post.content}</span>
        </div>      
      </div>
      <Comment/>
      <CommentList comments={postComment}/>
      <div>
        <Footer/>
      </div>
    </div>
  )
}