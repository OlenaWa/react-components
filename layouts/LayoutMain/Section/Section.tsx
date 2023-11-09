import classes from "./Section.module.scss"
import {FC, ReactNode} from "react";

interface SectionProps {
    children: ReactNode
}

export const Section:FC<SectionProps> = ({children}) => {
    return (
        <section className={classes.Wrapper}>
            {children}
        </section>
    );
};
