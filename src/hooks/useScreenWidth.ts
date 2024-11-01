import { useEffect, useMemo, useState } from "react";
import { MEDIA_QUERY } from "../constants/mediaQuery";
import { ScreenWidth } from "../types/options";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleMediaQuery = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQuery);

    return () => mediaQuery.removeEventListener("change", handleMediaQuery);
  }, [query]);

  return matches;
};

const useScreenWidth = () => {
  const largeMediaQuery = useMediaQuery(MEDIA_QUERY.query.large);
  const mediumMediaQuery = useMediaQuery(MEDIA_QUERY.query.medium);
  const smallMediaQuery = useMediaQuery(MEDIA_QUERY.query.small);

  const screenWidth = useMemo<ScreenWidth>(() => {
    if (smallMediaQuery) return MEDIA_QUERY.value.small;
    if (mediumMediaQuery) return MEDIA_QUERY.value.medium;
    if (largeMediaQuery) return MEDIA_QUERY.value.large;
  }, [largeMediaQuery, mediumMediaQuery, smallMediaQuery]);

  return screenWidth;
};

export default useScreenWidth;