import styles from "@/styles/posts.module.css"
import Comment from '@/components/comment';
import CommentList from '@/components/postCommentList';
import DropdownMenu from "@/components/Dropdown/DropdownBox";
import Image from 'next/image';
import { useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import axios from '@/lib/axios';


export default function IdPost(){
  const [post, setPost] = useState();
  const [postComment, setPostComment]= useState([]); 
  const [editingPost, setEditingPost] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const id = router.query['id'];

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };


  async function loadPost(targetId) {
    const res = await axios.get(`/board/${targetId}`);
    const nextPost = res.data;
    setPost(nextPost);
  }

  async function loadPostComment(targetId) {
    try {
      const res = await axios.get(`/board/${targetId}/comment`);
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

   const handleEdit = (postId) => {
    const postToEdit = post.find((post) => post.id === postId);
    setEditingPost(postToEdit);
  };

  const handleDelete = (postId) => {
    setPost((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  const handleUpdatePost = async (postId, updatedData) => {
    try {
      await axios.patch(`/board/${postId}`, updatedData);
      setPost((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, ...updatedData } : post
        )
      );
    } catch (err) {
      console.error("Failed to update post:", err);
    }
  };


  if(!post) return null;

  return(
    <div>
      <div className={styles.postWrapper}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.postTitle}>{post.title}</h1>
             <DropdownMenu
              postId={post.id}
              onEdit={handleEdit}
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
            <span className={styles.postDate}>{formatDate(post.createdAt)}</span>
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
    </div>
  )
}