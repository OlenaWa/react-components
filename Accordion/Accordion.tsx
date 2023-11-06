import {FC, useState} from "react";
import {IAccordion} from "@/app/UI/Accordion/IAccordion";
import {IconArrow} from "@/assets/config";
import classes from "./Accordion.module.scss"

export const Accordion: FC<IAccordion> = ({items, defaultActive, children}) => {

    const [activeIndexes, setActiveIndexes] = useState<number[]>(

        defaultActive || []

    );

    const onAccordionClick = (index: number) => {

        setActiveIndexes((prevIndexes) => {

            if (prevIndexes.includes(index)) {

                return prevIndexes.filter((i) => i !== index);

            } else {

                return [...prevIndexes, index];

            }

        });

    };

    return (
        <div>
            {items.map(item =>
                <div key={item.id}>
                    <div
                        className={`${classes.accordionTitle} ${activeIndexes.includes(item.id) ? classes.active : ''}`}
                        onClick={() => onAccordionClick(item.id)}
                    >
                        <h3>{item.title}</h3>
                        <span className={`${classes.arrow} ${activeIndexes.includes(item.id) ? classes.active : ''}`}><IconArrow/></span>
                    </div>
                    <div
                        className={`${classes.accordionContent} ${activeIndexes.includes(item.id) ? classes.active : ''}`}>
                        <div className={classes.accordionContentMain}>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
