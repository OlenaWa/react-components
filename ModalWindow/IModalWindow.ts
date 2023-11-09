import {ReactNode} from "react";

export interface IModalWindow {
    children: ReactNode
    visible: boolean
    setVisible?: any
    title: string
    hashUrl: string
}
