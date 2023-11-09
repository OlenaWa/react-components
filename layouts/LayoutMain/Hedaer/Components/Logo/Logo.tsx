import classes from "@/app/layouts/LayoutMain/Hedaer/HedaerCenter/HeaderCenterDesktop/HeaderCenterDesktop.module.scss";
import {CustomLink} from "@/app/UI/CustomLink/CustomLink";
import {HOME_PAGE} from "@/app/routes/mainPageRoutes";

export const Logo = () => {
    return (
        <CustomLink href={HOME_PAGE} className={classes.logo}>
            LOGO
        </CustomLink>
    );
};
