import React, {FC} from 'react';
import classes from './ModalWindow.module.scss';
import {IModalWindow} from '@/app/components/ModalWindow/IModalWindow';
import {IconPlus} from '@/assets/config';
import {Text} from '@/app/UI';
import {useModalWindow} from "@/app/components/ModalWindow/useModalWindow";

export const ModalWindow: FC<IModalWindow> = ({children, title, visible, setVisible, hashUrl}) => {
    const {closeModalWindow, stopPropagation} = useModalWindow(hashUrl, visible, setVisible);

    const isVisible = visible ? classes.active : '';
    const mainClasses = `${classes.modal} ${isVisible} ${hashUrl === hashUrl ? classes.showPopup : ''}`;

    return (
        <div
            className={mainClasses}
            onClick={() => {
                window.history.pushState({}, document.title, `#${hashUrl}`);
                closeModalWindow();
            }}
        >
            <div className={classes.modalBody} onClick={stopPropagation}>
                <div className={classes.modalTop}>
                    <Text title>{title}</Text>
                    <button onClick={closeModalWindow} className={classes.modalClose}>
                        <IconPlus/>
                    </button>
                </div>
                <div className={classes.modalContent}>{children}</div>
            </div>
        </div>
    );
};
