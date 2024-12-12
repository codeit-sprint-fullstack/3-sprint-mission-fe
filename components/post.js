import DropDown from "./DropDown";
import PostList from "./PostList";
import SearchInput from "./SearchInput";
import styles from "@/css/Post.module.css"
import WriteButton from "./WriteButton";

export default function Post() {
    return (
        <>
            <WriteButton />
            <PostList />
        </>
    );
}