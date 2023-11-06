import {ReactNode} from "react";

interface IAccordionItem {
    id: number
    title: string;
}

export interface IAccordion {
    items: IAccordionItem[]
    defaultActive?: number[]
    children: ReactNode
}
