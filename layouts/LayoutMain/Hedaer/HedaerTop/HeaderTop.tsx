import classes from "./HedaerTop.module.scss"
import {CustomLink} from "@/app/UI/CustomLink/CustomLink";
import {Login} from "@/app/layouts/LayoutMain/Hedaer/Components/Login";
import {useToken} from "@/app/hooks";
import {
    ADMIN_DASHBOARD_PAGE, ABOUT_PAGE,
    CATEGORIES_PAGE,
    CONTACT_PAGE,
    NEWS_PAGE,
    PAYMENT_AND_DELIVERY_PAGE
} from "@/app/routes";
import {Register} from "@/app/layouts/LayoutMain/Hedaer/Components";

export const HeaderTop = () => {

    const data = [
        {text: "Про нас", href: ABOUT_PAGE},
        {text: "Оплата і доставка", href: PAYMENT_AND_DELIVERY_PAGE},
        {text: "Новини", href: NEWS_PAGE},
        {text: "Контактна інформація", href: CONTACT_PAGE},
        {text: "Категорії", href: CATEGORIES_PAGE},
        {text: "Адмін панель", href: ADMIN_DASHBOARD_PAGE}
    ]

    const {hasToken, handleLogout} = useToken();
    return (
        <div className={classes.top}>
            <div className={classes.content}>
                <ul className={classes.list}>
                    {data.map(item =>
                        <li key={item.text} className={classes.item}>
                            <CustomLink className={classes.link} href={item.href}>{item.text}</CustomLink>
                        </li>
                    )}
                </ul>
            </div>
            <div className={classes.success}>
                {hasToken ? <button onClick={handleLogout}>Вихід</button> : <Login/>}
                {/*{hasToken ? <div>Ви зареєстровані</div> : <Register/>}*/}
            </div>
        </div>
    );
};
