import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
} from '@radix-ui/themes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import SearchInput from '../components/SearchInput';
import SortSelection from '../components/SortSelection';
import { useLoaderData } from 'react-router-dom';
import type { ItemCardProps } from '../../types/product';
import ItemCard from '../components/ItemCard';

type ItemListType = {
  list: ItemCardProps[];
  totalCount: number;
};

export default function Root() {
  const { bestItems, sellingItems } = useLoaderData();
  return (
    <main>
      <Header />
      <Container px={{ initial: '4' }}>
        <Section pt="6" pb="0">
          <Heading size="5" mb="4">
            베스트 상품
          </Heading>
          <Grid
            columns={{ initial: '1', sm: '2', md: '4' }}
            gap="5"
            width="auto"
            rows="1"
          >
            {bestItems.list.map((itemInfo: ItemCardProps) => (
              <ItemCard key={itemInfo.id} {...itemInfo} />
            ))}
          </Grid>
        </Section>

        <Section pt="7" style={{ paddingBottom: 'var(--space-10)' }}>
          <Flex mb="5" align="center" justify="between">
            <Heading size="5" trim="both">
              판매 중인 상품
            </Heading>
            <Flex gap="3">
              <Box width="325px">
                <SearchInput />
              </Box>
              <Button size="3">상품 등록하기</Button>
              <SortSelection />
            </Flex>
          </Flex>
          <Grid
            columns={{ initial: '2', sm: '3', md: '5' }}
            gapX="5"
            gapY="7"
            rows="2"
          >
            {sellingItems.list.map((itemInfo: ItemCardProps) => (
              <ItemCard key={itemInfo.id} {...itemInfo} />
            ))}
          </Grid>
          <Section py="7">
            <Pagination />
          </Section>
        </Section>
      </Container>
      <Footer />
    </main>
  );
}
