import { useEffect, useState } from 'react';
import { MEDIA_QUERY } from '@/constants/mediaQuery';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleMediaQuery = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQuery);

    return () => mediaQuery.removeEventListener('change', handleMediaQuery);
  }, [query]);

  return matches;
};

const useScreenWidth = () => {
  const mediumMediaQuery = useMediaQuery(MEDIA_QUERY.query.medium);
  const smallMediaQuery = useMediaQuery(MEDIA_QUERY.query.small);

  if (smallMediaQuery) return MEDIA_QUERY.value.small;
  if (mediumMediaQuery) return MEDIA_QUERY.value.medium;
  return MEDIA_QUERY.value.large;
};

export default useScreenWidth;
