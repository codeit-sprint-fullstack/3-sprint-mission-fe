import { useState } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Flex, IconButton, Container } from '@radix-ui/themes';
import { css } from '@emotion/react';

function Pagination() {
  const [currentPage, setCurrentPage] = useState('1');

  return (
    <Container>
      <Flex gap="1" justify="center">
        <IconButton
          color="gray"
          variant="outline"
          radius="full"
          aria-label="Previous Page"
        >
          {'<'}
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
              color={currentPage === `${page}` ? 'white' : 'gray'}
              css={css`
                &[data-state='on'] {
                  color: white;
                  background-color: var(--primary-blue-surface);
                }
              `}
            >
              <IconButton variant="outline" radius="full">
                {page}
              </IconButton>
            </ToggleGroup.Item>
          ))}
        </ToggleGroup.Root>
        <IconButton
          color="gray"
          variant="outline"
          radius="full"
          aria-label="Next Page"
        >
          {'>'}
        </IconButton>
      </Flex>
    </Container>
  );
}

export default Pagination;
