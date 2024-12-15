import Layout, { ImgBox, LayoutInput, TitleLine } from "../component/layout";
import { useChange } from "../hook/hook";

export default function WriteBoard() {
  const subject = useChange();
  const content = useChange();
  const inputStatus = [
    {
      title: "*제목",
      placeholder: "제목을 입력해주세요",
      onchange: subject.onChange,
      value: subject.value,
    },
    {
      title: "*내용",
      placeholder: "내용을 입력해주세요",
      type: "textarea",
      onchange: content.onChange,
      value: content.onChange,
    },
  ];

  return (
    <Layout>
      <TitleLine text="게시글 쓰기"></TitleLine>
      {inputStatus.map((v, i) => {
        return <LayoutInput {...v} key={i} />;
      })}

      <AddImage imgArr={[]} />
    </Layout>
  );
}

function AddImage({ imgArr = [] }) {
  return (
    <div className="addImg">
      <h3>이미지</h3>
      {imgArr.map((v, i) => {
        return (
          <div className="item" key={i}>
            <ImgBox src={v.src} alt={v.alt} width={"282px"} height={"282px"} />
          </div>
        );
      })}
      <div className="empty">
        <div className="content">
          <div className="plus"></div>
          <p>이미지 등록</p>
        </div>
      </div>
    </div>
  );
}
