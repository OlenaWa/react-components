import React from 'react';
import classes from "@/app/layouts/LayoutMain/Hedaer/Components/Login/Login.module.scss";
import {REGISTER_POPUP} from "@/app/routes";
import dynamic from "next/dynamic";
import {Loader} from "@/app/UI";
import {RegisterForm} from "@/app/layouts/LayoutMain/Hedaer/Components/Register/RegisterForm";
import {useToggleModel} from "@/app/hooks";
import {useRegisterMutation} from "@/app/services/register.api";
import {IUser} from "@/app/types/IUser";
const ModalWindow = dynamic(() => import('@/app/UI').then((mod) => mod.ModalWindow), {
    ssr: false,
    loading: () => <Loader/>,
})

export const Register = () => {

    const { isModalVisible, handleHideModal, handleShowModal } = useToggleModel(REGISTER_POPUP);

    const [registerUser, {error: registerError, isLoading: isRegisterLoading}] = useRegisterMutation()

    const handleCreate = (user: IUser) => {
        registerUser({...user} as IUser)
    }

    return (
        <div className={classes.main}>
            {ModalWindow &&
                <ModalWindow hashUrl={REGISTER_POPUP} title={'Register'} visible={isModalVisible} setVisible={handleHideModal}>
                    <RegisterForm create={handleCreate}/>
                </ModalWindow>
            }
            <button onClick={handleShowModal}  className={classes.text}>Реєстрація</button>
        </div>
    );
};
