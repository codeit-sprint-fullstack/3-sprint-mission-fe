import { useState } from "react";
import PageIndex from "../components/common/PageIndex";

export default {
  title: "Common/PageIndex",
  component: PageIndex,
  tags: ["autodoc"],
};

const Template = () => {
  const [page, setPage] = useState(1);
  return <PageIndex {...{ page, setPage }} />;
};

export const Default = Template.bind({});
