import { useState } from "react";
import axios from "axios"; // axios를 추가합니다.
import Header from "@/components/header";
import ProductHeader from "@/components/ItemsPost/ProductHeader";
import ImageForm from "@/components/ItemsPost/ImageForm";
import NameForm from "@/components/ItemsPost/NameForm";
import DescriptionForm from "@/components/ItemsPost/DescriptionForm";
import PriceForm from "@/components/ItemsPost/PriceForm";
import TagsForm from "@/components/ItemsPost/TagsForm";
import Footer from "@/components/footer";

export default function ProductPost(){
  const [formData, setFormData] = useState({
    image: null,
    name: '',
    description: '',
    price: 0,
    tags: [],
  });

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  // Form 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = new FormData();
    postData.append('image', formData.image);
    postData.append('name', formData.name);
    postData.append('description', formData.description);
    postData.append('price', formData.price);
    formData.tags.forEach((tag, index) => {
      postData.append(`tags[${index}]`, tag);
    });

    try {
      const response = await axios.post('/products', postData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('상품이 성공적으로 등록되었습니다!');
      console.log(response.data);
    } catch (error) {
      alert('상품 등록 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  // 키 다운 이벤트 핸들러
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return(
    <div>
      <Header/>
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <ProductHeader/>
        <ImageForm updateFormData={updateFormData}/>
        <NameForm updateFormData={updateFormData}/>
        <DescriptionForm updateFormData={updateFormData}/>
        <PriceForm updateFormData={updateFormData}/>
        <TagsForm updateFormData={updateFormData}/>
      </form>
      <Footer/>
    </div>
  )
}
