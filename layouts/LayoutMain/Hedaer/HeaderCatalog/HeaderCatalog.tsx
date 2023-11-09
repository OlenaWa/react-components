import {tabsData} from "@/app/layouts/LayoutMain/Hedaer/HeaderCatalog/HeaderCatalogItems";
import classes from "./HeaderCatalog.module.scss"
import Link from "next/link";
import {CatalogTabs} from "@/app/layouts/LayoutMain/Hedaer/HeaderCatalog/CatalogTabs";
import {useIsTouchDevice, useMediaQuery} from "@/app/hooks";
import {CustomLink} from "@/app/UI/CustomLink/CustomLink";

export const HeaderCatalog = () => {
    const isTouch = useIsTouchDevice()
    const matches = useMediaQuery()

    return (
        <div className={classes.main}>
            <div className={classes.mainContainer}>

            </div>
        </div>
    );
};
