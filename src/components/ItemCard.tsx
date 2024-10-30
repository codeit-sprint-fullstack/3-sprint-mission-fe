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
} from '@radix-ui/themes';
import { css } from '@emotion/react';

const numberTextStyle = css({
  fontVariantNumeric: 'tabular-nums',
});

function ItemCard() {
  return (
    <Box maxWidth="282px">
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
              src={defaultImg}
              alt=""
            />
          </AspectRatio>
          <Grid style={{ rowGap: '0.5rem' }}>
            <Text as="p" size="2" truncate wrap="nowrap">
              {'제목'}
            </Text>
            <Strong css={numberTextStyle}>{'500 원'}</Strong>
            <Badge variant="outline" color="gray" style={{ boxShadow: 'none' }}>
              <HeartIcon />
              <Text css={numberTextStyle} trim="both" weight="regular">
                ?
              </Text>
            </Badge>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default ItemCard;
