import "../noticeboard/NoticeBoard.css";
import "../registration/registration.css";
import { postProductsApi, PostReApi } from "../../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function PostRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    img: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateProduct = async () => {
    const { name, description } = formData;
    const data = await PostReApi(name, description);
    // data._id ? navigate("/null") : console.error("Failed to create product");
  };

  const inputs = [
    {
      label: "*제목",
      name: "name",
      placeholder: "제목을 입력해주세요",
    },
    {
      label: "*내용",
      name: "description",
      placeholder: "내용을 입력해주세요",
      className: "big",
    },
  ];
  return (
    <div className="inner">
      <div className="top_inner">
        <h2>게시글 쓰기</h2>
        <button onClick={handleCreateProduct}>등록</button>
      </div>
      {inputs.map(({ label, name, placeholder, className = "" }) => (
        <div key={name} className={`${name}_box`}>
          <h3>{label}</h3>
          <input
            name={name}
            value={formData[name]}
            onChange={handleInputChange}
            className={`box ${className}`}
            placeholder={placeholder}
          />
        </div>
      ))}
      <div className="input_img_box">
        <h3>이미지</h3>
        <div className="input_img">
          <input type="text" placeholder="이미지 등록" className="aa" />
          <div className="plus_button">
            <img src="../../img/ic_plus.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
