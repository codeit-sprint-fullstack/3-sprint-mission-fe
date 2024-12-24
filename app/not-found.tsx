import BackButton from "@/components/common/button/BackButton";

const NotFound = () => {
  return (
    <div className="mt-40 flex h-full flex-col items-center justify-center gap-10">
      <div className="h-full text-center text-3xl font-bold">
        404-Page not found
      </div>
      <BackButton backPath="/">홈으로 돌아가기</BackButton>
    </div>
  );
};

export default NotFound;
