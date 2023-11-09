import classes from "@/app/layouts/LayoutMain/Hedaer/HedaerCenter/HeaderCenterDesktop/HeaderCenterDesktop.module.scss";
import {ActionsPhone} from "@/app/layouts/LayoutMain/Hedaer/Components/Actions/ActionsPhone";
import {ActionsLove} from "@/app/layouts/LayoutMain/Hedaer/Components/Actions/ActionsLove";
import {ActionsLocation} from "@/app/layouts/LayoutMain/Hedaer/Components/Actions/ActionsLocation";

export const Actions = () => {
    return (
        <div className={classes.actions}>
            <ActionsLocation/>
            <ActionsPhone/>
            <ActionsLove/>
        </div>
    );
};
