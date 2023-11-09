import classes from "@/app/layouts/LayoutMain/Hedaer/HedaerCenter/HeaderCenterDesktop/HeaderCenterDesktop.module.scss";

export const ActionsPhone = () => {
    return (
        <div className={classes.actionsPhones}>
            <a href="tel:0677871456" className={classes.actionsPhone}>0 (67) 787 14 56</a>
            <button className={classes.actionsCallback}>Замовити дзвінок</button>
        </div>
    );
};
