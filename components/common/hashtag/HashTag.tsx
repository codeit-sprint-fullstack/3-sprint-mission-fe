type HashTagProps = {
  text: string;
};

const HashTag = ({ text }: HashTagProps) => {
  return <li className="h-9 rounded-3xl bg-gray-light px-4 py-1.5">#{text}</li>;
};

export default HashTag;
