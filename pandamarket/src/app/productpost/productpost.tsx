import { useState, FormEvent, KeyboardEvent, JSX } from "react";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import Header from "@/components/header";
import ProductHeader from "@/components/ItemsPost/ProductHeader";
import ImageForm from "@/components/ItemsPost/ImageForm";
import NameForm from "@/components/ItemsPost/NameForm";
import DescriptionForm from "@/components/ItemsPost/DescriptionForm";
import PriceForm from "@/components/ItemsPost/PriceForm";
import TagsForm from "@/components/ItemsPost/TagsForm";
import Footer from "@/components/footer";

interface FormData {
  image: File | null;
  name: string;
  description: string;
  price: number;
  tags: string[];
}

export default function ProductPost(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    image: null,
    name: "",
    description: "",
    price: 0,
    tags: [],
  });

  const router = useRouter();

  const updateFormData = (field: keyof FormData, value: any): void => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    const postData = new FormData();
    if (formData.image) postData.append("image", formData.image);
    postData.append("name", formData.name);
    postData.append("description", formData.description);
    postData.append("price", String(formData.price));
    formData.tags.forEach((tag, index) => {
      postData.append(`tags[${index}]`, tag);
    });

    try {
      const response = await axios.post("/products", postData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("상품이 성공적으로 등록되었습니다!");
      console.log(response.data);
      router.push("/product");
    } catch (error) {
      alert("상품 등록 중 오류가 발생했습니다.");
      console.error(error);
    }
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <ProductHeader />
        <ImageForm updateFormData={updateFormData} />
        <NameForm updateFormData={updateFormData} />
        <DescriptionForm updateFormData={updateFormData} />
        <PriceForm updateFormData={updateFormData} />
        <TagsForm updateFormData={updateFormData} />
      </form>
      <Footer />
    </div>
  );
}
