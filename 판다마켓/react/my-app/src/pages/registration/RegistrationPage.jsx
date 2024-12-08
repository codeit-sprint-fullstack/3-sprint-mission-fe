import { useState } from "react";
import { postProductsApi } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./registration.css";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    tagValue: "",
    tags: [],
  });

  console.log("formData", formData);
  console.log("description", formData.description);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target; //=== e.target.name
    // console.log("타겟", e.target);
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // console.log("이름", e.target.name);
  };

  const handleDeleteTag = (tagToDelete) => {
    setFormData((prevData) => ({
      ...prevData,
      tags: prevData.tags.filter((tag) => tag !== tagToDelete),
    }));
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && formData.tagValue.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(formData.tagValue)) {
        setFormData((prevData) => ({
          ...prevData,
          tags: [...prevData.tags, prevData.tagValue],
          tagValue: "",
        }));
      }
    }
  };

  const handleCreateProduct = async () => {
    const { name, description, price, tags } = formData;
    const data = await postProductsApi({
      name,
      description,
      price: Number(price),
      tags,
    });
    data._id ? navigate("/null") : console.error("Failed to create product");
  };

  const inputs = [
    {
      label: "상품명",
      name: "name",
      placeholder: "상품명을 입력해주세요",
    },
    {
      label: "상품 소개",
      name: "description",
      placeholder: "상품 소개를 입력해주세요",
      className: "big",
    },
    {
      label: "판매 가격",
      name: "price",
      placeholder: "판매 가격을 입력해주세요",
      type: "number",
    },
  ];
  return (
    <div className="inner">
      <div className="top_inner">
        <h2>상품 등록하기</h2>
        <button onClick={handleCreateProduct}>등록</button>
      </div>
      <div className="content_inner">
        {inputs.map(
          ({ label, name, placeholder, className = "", type = "text" }) => (
            <div key={name} className={`${name}_box`}>
              <h3>{label}</h3>
              <input
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                className={`box ${className}`}
                placeholder={placeholder}
                type={type}
              />
            </div>
          )
        )}

        <div className="tag_box">
          <h3>태그</h3>
          <input
            name="tagValue"
            value={formData.tagValue}
            onChange={handleInputChange}
            onKeyDown={handleTagKeyDown}
            className="box"
            placeholder="태그를 입력해주세요"
          />
        </div>
        <div className="tag_mini_inner">
          {formData.tags.map((tag, index) => (
            <div className="mini_box" key={index}>
              <p>#{tag}</p>
              <button onClick={() => handleDeleteTag(tag)} className="x" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
