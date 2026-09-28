import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
    // Esta sería la versión larga de esta función:
    // function getInitialValue() {
    //     return window.matchMedia(query).matches;
    // }

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);

        const handleChange = () => setMatches(mediaQueryList.matches);
        // Esta sería la versión larga de esta función:
        // function handleChange(event: MediaQueryListEvent) {
        //     setMatches(event.matches);
        // }

        setMatches(mediaQueryList.matches);

        mediaQueryList.addEventListener('change', handleChange);

        return () => mediaQueryList.removeEventListener('change', handleChange);
        // Esta sería la versión larga de esta función:
        // function cleanUp() {
        //     mediaQueryList.removeEventListener('change', handleChange);
        // }

        // return cleanUp;
    }, [query]);

    return matches;
}