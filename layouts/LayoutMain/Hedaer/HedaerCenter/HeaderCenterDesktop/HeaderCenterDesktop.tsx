import classes from "./HeaderCenterDesktop.module.scss"
import {Actions, Cart, Logo, Search} from "@/app/layouts/LayoutMain/Hedaer/Components";
export const HeaderCenterDesktop = () => {
    return (
        <div className={classes.main}>
            <Logo/>
            <Search/>
            <Actions/>
            <Cart/>
        </div>
    );
};
