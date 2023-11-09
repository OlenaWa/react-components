import React, { useState, useRef, useEffect } from "react";
import styles from "./FullPageScroll.module.scss";
import { IFullPageScroll } from "./IFullPageScroll";

export const FullPageScroll: React.FC<IFullPageScroll> = ({
                                                              children,
                                                              onScrollNext,
                                                              onScrollPrev,
                                                          }) => {
    const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const handleWheel = (event: WheelEvent) => {
            event.preventDefault();

            if (isScrolling) return;

            setIsScrolling(true);

            const delta = Math.sign(event.deltaY);
            const nextScrollIndex = currentScrollIndex + delta;

            if (
                nextScrollIndex >= 0 &&
                nextScrollIndex < scrollContainer.children.length
            ) {
                setCurrentScrollIndex(nextScrollIndex);
                if (delta > 0 && onScrollNext) onScrollNext(nextScrollIndex);
                if (delta < 0 && onScrollPrev) onScrollPrev(nextScrollIndex);
            }

            setTimeout(() => {
                setIsScrolling(false);
            }, 1000);
        };

        const handleKeydown = (event: KeyboardEvent) => {
            if (isScrolling) return;

            setIsScrolling(true);

            const currentScrollItem = scrollContainer.children[currentScrollIndex];
            const nextScrollIndex =
                event.key === "ArrowDown"
                    ? currentScrollIndex + 1
                    : currentScrollIndex - 1;

            if (
                nextScrollIndex >= 0 &&
                nextScrollIndex < scrollContainer.children.length
            ) {
                setCurrentScrollIndex(nextScrollIndex);
                if (event.key === "ArrowDown" && onScrollNext)
                    onScrollNext(nextScrollIndex);
                if (event.key === "ArrowUp" && onScrollPrev)
                    onScrollPrev(nextScrollIndex);
            }

            setTimeout(() => {
                setIsScrolling(false);
            }, 1000);
        };

        scrollContainer.addEventListener("wheel", handleWheel, {
            passive: false,
        });

        window.addEventListener("keydown", handleKeydown, {
            passive: false,
        });

        return () => {
            scrollContainer.removeEventListener("wheel", handleWheel);
            window.removeEventListener("keydown", handleKeydown);
        };
    }, [currentScrollIndex, isScrolling, onScrollNext, onScrollPrev]);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        scrollContainer.scrollTo({
            top: currentScrollIndex * window.innerHeight,
            behavior: "smooth",
        });
    }, [currentScrollIndex]);

    return (
        <div
            ref={scrollContainerRef}
            className={styles.container}
            tabIndex={0} // focusable element is required for handling keydown events
        >
            {React.Children.map(children, (child, index) => (
                <div key={index} className={styles.scrollItem}>
                    {child}
                </div>
            ))}
        </div>
    );
};
