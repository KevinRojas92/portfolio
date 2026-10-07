import { useEffect } from "react";

export function useScrollToHorizontal(enabled: boolean) {
    useEffect(() => {
        if (!enabled) return;

        const root = document.getElementById('root');
        if (!root) return;

        const scroller = root;

        // Bandera para ignorar los eventos de inercia del trackpad
        let isAnimating = false;

        function handleScroll(event: WheelEvent) {
            // Si el gesto, la acción del usuario ya es horizontal. Que lo maneje el navegador
            if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
                return;
            };

            event.preventDefault();

            if (isAnimating) return;

            const direction = event.deltaY > 0 ? 1 : -1;

            isAnimating = true;

            scroller.scrollBy({
                left: direction * scroller.clientWidth,
                behavior: 'smooth'
            });

            window.setTimeout(function unlock() {
                isAnimating = false;
            }, 700);
        }

        root.addEventListener('wheel', handleScroll, { passive: false });

        return function cleanUp() {
            root.removeEventListener('wheel', handleScroll);
        };
    }, [enabled]);
}