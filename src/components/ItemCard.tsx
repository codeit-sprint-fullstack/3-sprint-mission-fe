import { HeartIcon } from '@radix-ui/react-icons';
import defaultImg from '../assets/image/items/item-default.svg';
import {
  Box,
  Card,
  Text,
  Strong,
  AspectRatio,
  Grid,
  Badge,
  Flex,
  IconButton,
} from '@radix-ui/themes';
import { css } from '@emotion/react';
import type { ItemCardProps } from '../../types/product';

const numberTextStyle = css({
  fontVariantNumeric: 'tabular-nums',
});

function ItemCard(itemCardProps: Readonly<ItemCardProps>) {
  const { favoriteCount, images, name, price } = itemCardProps;
  return (
    <Grid>
      <Card variant="ghost">
        <Grid gap="4">
          <AspectRatio ratio={1 / 1}>
            <img
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 'var(--radius-5)',
                objectFit: 'cover',
              }}
              src={images[0] || defaultImg}
              alt={name}
            />
          </AspectRatio>
          <Grid style={{ rowGap: '0.5rem' }}>
            <Text as="p" size="2" truncate wrap="nowrap">
              {name}
            </Text>
            <Strong css={numberTextStyle}>
              {`${price.toLocaleString()} 원`}
            </Strong>
            <Badge
              color="gray"
              variant="outline"
              style={{ boxShadow: 'none', paddingLeft: 0 }}
            >
              <IconButton color="gray" variant="ghost">
                <HeartIcon />
              </IconButton>
              <Text css={numberTextStyle} trim="both" weight="regular">
                {favoriteCount}
              </Text>
            </Badge>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default ItemCard;
