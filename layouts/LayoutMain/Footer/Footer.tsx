import {FooterTop} from "@/app/layouts/LayoutMain/Footer/FooterTop";
import classes from "./Footer.module.scss"
import {FooterCenter} from "@/app/layouts/LayoutMain/Footer/FooterCenter";

export const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerBody}>
                <FooterTop/>
                <FooterCenter/>
                footer
            </div>
        </footer>
    );
};
