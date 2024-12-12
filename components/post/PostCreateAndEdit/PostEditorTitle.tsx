type PostEditorTitleProps = {
  children: React.ReactNode;
};

const PostEditorTitle = ({ children }: PostEditorTitleProps) => {
  return (
    <h1 className="text-custom-black text-lg font-bold md:text-xl">
      {children}
    </h1>
  );
};

export default PostEditorTitle;
