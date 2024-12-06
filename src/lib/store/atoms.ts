import { atom } from 'jotai';
import { ScreenWidth } from '../types/options.types';
import { MEDIA_QUERY } from '@/constants/mediaQuery';

export const screenWidthAtom = atom<ScreenWidth>(MEDIA_QUERY.value.large);

export const openMenuIdAtom = atom<string | null>(null);

export const editingCommentIdAtom = atom<string | null>(null);
