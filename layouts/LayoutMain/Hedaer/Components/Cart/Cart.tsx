import classes from "@/app/layouts/LayoutMain/Hedaer/HedaerCenter/HeaderCenterDesktop/HeaderCenterDesktop.module.scss";
import {IconCart} from "@/assets/config";
import dynamic from "next/dynamic";
import {Loader} from "@/app/UI";
import {CustomLink} from "@/app/UI/CustomLink/CustomLink";
import {CART_POPUP, CHECKOUT_PAGE} from "@/app/routes";
import {useToggleModel} from "@/app/hooks";
const ModalWindow = dynamic(() => import('@/app/UI').then((mod) => mod.ModalWindow), {
    ssr: false,
    loading: () => <Loader/>,
})

export const Cart = () => {

    const { isModalVisible, handleHideModal, handleShowModal } = useToggleModel(CART_POPUP);

    return (
        <>
            <ModalWindow hashUrl={CART_POPUP} title={'title'} visible={isModalVisible} setVisible={handleHideModal}>
                <p>This is the content of the modal window.</p>
            </ModalWindow>
            <div className={classes.cart}>
                <button onClick={handleShowModal} className={classes.cartIcon}>
                    <IconCart/>
                    <span>0</span>
                </button>
                <div className={classes.cartBody}>
                    <div className={classes.cartBodySum}>0 грн.</div>
                    <CustomLink href={CHECKOUT_PAGE} className={classes.cartBodyLink}>Оформити замовлення</CustomLink>
                </div>
            </div>
        </>
    );
};
