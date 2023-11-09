import classes from "@/app/layouts/LayoutMain/Hedaer/HedaerCenter/HeaderCenterDesktop/HeaderCenterDesktop.module.scss";
import {IconLove} from "@/assets/config";

export const ActionsLove = () => {
    return (
        <div className={classes.actionsLove}>
            <IconLove/>
            <span>0</span>
        </div>
    );
};
