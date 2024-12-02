import { MEDIA_QUERY } from '@/constants/mediaQuery';

export type ScreenWidth =
  | typeof MEDIA_QUERY.value.large
  | typeof MEDIA_QUERY.value.medium
  | typeof MEDIA_QUERY.value.small
  | undefined;
