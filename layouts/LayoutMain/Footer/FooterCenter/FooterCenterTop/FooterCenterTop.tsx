import classes from "./FooterCenterTop.module.scss"
import {data} from "./FooterCenterTopItems"
import Link from "next/link";
import {CustomLink} from "@/app/UI/CustomLink/CustomLink";

export const FooterCenterTop = () => {
    return (
        <div className={classes.main}>
            <div className={classes.body}>
                <div className={classes.columns}>
                    {data.map(column =>
                        <div key={column.title} className={classes.column}>
                            <CustomLink href={'#'} className={classes.title}>{column.title}</CustomLink>
                            <ul className={classes.list}>
                                {column.links.map(item =>
                                    <li key={item.url} className={classes.item}>
                                        <CustomLink className={classes.link} href={item.url}>{item.text}</CustomLink>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
