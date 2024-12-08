import { StaticImageData } from "next/image";
import laptopImage from "@/public/images/laptop.png";

export type BestPost = {
  id: number;
  title: string;
  userNickname: string;
  heartCount: string;
  createdAt: string;
  thumbnailImage: StaticImageData;
};

export const bestPostsData: BestPost[] = [
  {
    id: 1,
    title: "맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?",
    userNickname: "총명한판다",
    heartCount: "9999+",
    createdAt: "2024. 04. 16",
    thumbnailImage: laptopImage,
  },
  {
    id: 2,
    title: "아이폰 15 프로 vs 갤럭시 S24 울트라, 어떤 걸 사야 할까요?",
    userNickname: "테크마스터",
    heartCount: "8754",
    createdAt: "2024. 04. 15",
    thumbnailImage: laptopImage,
  },
  {
    id: 3,
    title: "태블릿으로 그림 그리기, 아이패드 프로와 갤럭시 탭 S9 중 추천은?",
    userNickname: "디지털아티스트",
    heartCount: "7632",
    createdAt: "2024. 04. 14",
    thumbnailImage: laptopImage,
  },
];
