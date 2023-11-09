import React from 'react';
import dynamic from 'next/dynamic';
import classes from './Login.module.scss';
import { Loader } from '@/app/UI';
import {LoginForm} from '@/app/components';
import { LOGIN_POPUP } from '@/app/routes';
import { useToggleModel } from '@/app/hooks';
const ModalWindow = dynamic(() => import('@/app/UI').then(mod => mod.ModalWindow), {
    ssr: false,
    loading: () => <Loader />,
});

export const Login = () => {
    const { isModalVisible, handleHideModal, handleShowModal } = useToggleModel(LOGIN_POPUP);

    return (
        <div className={classes.main}>
            <ModalWindow
                hashUrl={LOGIN_POPUP}
                title={'Login'}
                visible={isModalVisible}
                setVisible={handleHideModal}
            >
                <LoginForm/>
            </ModalWindow>
            <button onClick={handleShowModal} className={classes.text}>
                Вхід
            </button>
        </div>
    );
};
