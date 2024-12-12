"use client";

import BestPost from "@/components/post/BestPost/BestPost";
import PostList from "@/components/post/PostList/PostList";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/post");
  }, [router]);
  return (
    <article className="mx-auto min-w-[325px] max-w-[1200px]">
      <BestPost />
      <PostList />
    </article>
  );
}
