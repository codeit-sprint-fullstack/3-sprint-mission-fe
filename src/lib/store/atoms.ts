import { atom } from 'jotai';
import { ScreenWidth } from '../types/options';
import { MEDIA_QUERY } from '@/constants/mediaQuery';

export const screenWidthAtom = atom<ScreenWidth>(MEDIA_QUERY.value.large);
