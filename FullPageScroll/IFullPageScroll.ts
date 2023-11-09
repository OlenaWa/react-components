import {ReactNode} from "react";

export interface IFullPageScroll {
    children: ReactNode;
    onScrollNext?: any
    onScrollPrev?: any
}
