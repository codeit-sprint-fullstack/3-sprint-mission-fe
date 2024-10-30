import Layout, { LayoutInput } from "../component/layout";
import { useChange } from "../hook/hook";
import "../css/registration.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { productCreate } from "../api/product";

export default function Registration() {
  const name = useChange();
  const des = useChange();
  const price = useChange();
  const tag = useChange();
  const [onBtn, setOnBtn] = useState("");
  const [tagV, setTagV] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    if (!!name.value && !!des.value && !!price.value && !!tagV.length) {
      setOnBtn("on");
    } else {
      setOnBtn("");
    }
  }, [name.value, des.value, price.value, tag.value]);

  const onSubmit = async (e) => {
    e.preventDefault();
    let body = {
      name: name.value,
      description: des.value,
      price: price.value,
      tags: tagV,
    };
    if (onBtn === "on") {
      await productCreate(body)
        .then((res) => {
          if (res.success) {
            alert("등록했습니다.");
            navigation("/items");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert("정확히 입력해주세요");
    }
  };
  const tagEvent = (e) => {
    if (e.keyCode === 13) {
      const value = e.target.value.slice(0, 5);
      setTagV([...tagV, value]);
      tag.set("");
    }
  };
  const deleteTag = (e) => {
    e.preventDefault();
    const t = e.target.parentNode.textContent.split("#")[1].trim();
    const i = tagV.indexOf(t);
    tagV.splice(i, 1);
    setTagV([...tagV]);
  };
  return (
    <Layout marginBottom={"168px"}>
      <div className="titleLine">
        <h2>상품 등록하기</h2>
        <button onClick={onSubmit} className={`regi ${onBtn}`}>
          등록
        </button>
      </div>
      <LayoutInput
        title={"상품명"}
        placeholder={"상품명을 입력해주세요"}
        id={"itemName"}
        name={"name"}
        value={name.value}
        onchange={name.onChange}
        condition={name.value.length > 10}
        errMsg={"10자 이내로 입력해주세요"}
      />
      <LayoutInput
        title={"상품 소개"}
        placeholder={"상풍 소개를입력해주세요"}
        id={"itemDes"}
        name={"description"}
        value={des.value}
        onchange={des.onChange}
        type={"textarea"}
        condition={des.value.length <= 10}
        errMsg={"10자 이상 입력해주세요"}
      />
      <LayoutInput
        title={"판매가격"}
        placeholder={"판매 가격을 입력해주세요"}
        id={"price"}
        name={"price"}
        value={price.value}
        onchange={price.onChange}
        condition={isNaN(Number(price.value))}
        errMsg={"숫자로 입력해주세요"}
      />
      <LayoutInput
        title={"태그"}
        placeholder={"태그를 입력해주세요"}
        id={"tag"}
        name={"tag"}
        value={tag.value}
        onchange={tag.onChange}
        condition={tag.value.length > 5}
        maxLength={5}
        errMsg={"5글자 이내로 입력해주세요"}
        onkeypress={tagEvent}
      >
        {tagV.map((e) => {
          return (
            <div className="tagItem" key={e}>
              # {e}
              <div className="close" onClick={deleteTag}></div>
            </div>
          );
        })}
      </LayoutInput>
    </Layout>
  );
}
