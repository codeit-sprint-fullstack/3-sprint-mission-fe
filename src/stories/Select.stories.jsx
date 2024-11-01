import { useState } from "react";
import Select from "../components/common/Select";

export default {
  title: "Common/Select",
  component: Select,
  tags: ["autodocs"],
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.decorators = [
  (Story) => {
    const options = ["최신순", "좋아요순"];
    const [selectedOption, setOption] = useState(options[0]);
    return <Story args={{ selectedOption, options, setOption, screenWidth: 1200 }} />;
  },
];
