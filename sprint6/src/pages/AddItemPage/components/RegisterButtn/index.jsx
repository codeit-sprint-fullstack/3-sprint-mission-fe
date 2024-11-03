import './index.css';
// post api
import requestApi from "../../components/RequestApi/index.js";

const RegisterButton = ({done }) => {

const doneHandle = async () => {
  // await requestApi(surveyData)
}

  return (
    <div id="registerBox" className="mainWidth">
      <h1>상품 등록하기</h1>
      <button className={done ? "done" : ""} onClick={doneHandle}>등록</button>
    </div>
  );
};

export default RegisterButton;