import { useState } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Flex, IconButton, Container, Text } from '@radix-ui/themes';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

function Pagination() {
  const [currentPage, setCurrentPage] = useState('1');

  return (
    <Container>
      <Flex gap="1" justify="center">
        <IconButton
          size="3"
          color="gray"
          variant="outline"
          radius="full"
          aria-label="Previous Page"
        >
          <ChevronLeftIcon />
        </IconButton>
        <ToggleGroup.Root
          css={{ display: 'contents' }}
          className="ToggleGroup"
          type="single"
          defaultValue="1"
          value={currentPage}
          onValueChange={(value) => setCurrentPage(value)}
          aria-label="Pagination"
        >
          {[1, 2, 3].map((page) => (
            <ToggleGroup.Item
              key={page}
              className="ToggleGroupItem"
              value={`${page}`}
              aria-label={`Page ${page}`}
              asChild
            >
              <IconButton
                size="3"
                variant={currentPage === `${page}` ? 'solid' : 'outline'}
                radius="full"
                color={currentPage === `${page}` ? 'blue' : 'gray'}
              >
                <Text weight="medium">{page}</Text>
              </IconButton>
            </ToggleGroup.Item>
          ))}
        </ToggleGroup.Root>
        <IconButton
          size="3"
          color="gray"
          variant="outline"
          radius="full"
          aria-label="Next Page"
        >
          <ChevronRightIcon />
        </IconButton>
      </Flex>
    </Container>
  );
}

export default Pagination;
