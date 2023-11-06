import {ReactNode} from "react";

export interface ICustomLink {
    children: ReactNode
    href: string
    className?: string | undefined
}
