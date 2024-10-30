import { Select } from '@radix-ui/themes';

function SortSelection() {
  return (
    <Select.Root defaultValue="latest" size="3">
      <Select.Trigger />
      <Select.Content position="popper">
        <Select.Item value="latest">최신순</Select.Item>
        <Select.Item value="popular">좋아요순</Select.Item>
      </Select.Content>
    </Select.Root>
  );
}

export default SortSelection;
