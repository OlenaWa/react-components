import Link from "next/link";
import classes from "@/app/layouts/LayoutMain/Hedaer/HedaerCenter/HeaderCenterDesktop/HeaderCenterDesktop.module.scss";
import {IconLocation} from "@/assets/config";

export const ActionsLocation = () => {
    return (
        <a href='#' className={classes.actionsLocation}>
            <div className={classes.actionsLocationIcon}>
                <IconLocation/>
            </div>
            <div className={classes.actionsLocationText}>Тернопіль</div>
        </a>
    );
};
