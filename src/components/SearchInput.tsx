import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';

function SearchInput(): React.ReactNode {
  return (
    <TextField.Root
      variant="soft"
      color="gray"
      size="3"
      placeholder="검색할 상품을 입력해주세요"
    >
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  );
}

export default SearchInput;
