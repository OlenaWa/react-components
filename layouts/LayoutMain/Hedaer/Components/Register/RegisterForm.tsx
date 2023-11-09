import React, {ChangeEvent, FC, MouseEvent, useState} from 'react';
import {IUser} from "@/app/types/IUser";

interface FormProps {
    create: any
}

export const RegisterForm:FC<FormProps> = ({create}) => {
    const [user, setUser] = useState({email: '', password: '', name: '', surname: '', phone_number: '', banned: false});
    const handleCreate =  (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newUser = {
            ...user as IUser
        }
        create(newUser)
        setUser({email: '', password: '', name: '', surname: '', phone_number: '', banned: false})
    }
    return (
        <form action="#">
            <input
                value={user.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUser({...user, email: e.target.value})}
                type="text"
                placeholder="Name email"
            />
            <input
                value={user.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUser({...user, password: e.target.value})}
                type="text"
                placeholder="Name password"
            />
            <input
                value={user.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUser({...user, name: e.target.value})}
                type="text"
                placeholder="Name name"
            />
            <input
                value={user.surname}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUser({...user, surname: e.target.value})}
                type="text"
                placeholder="Name surname"
            />
            <input
                value={user.phone_number}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUser({...user, phone_number: e.target.value})}
                type="text"
                placeholder="phone_number"
            />
            <button onClick={handleCreate}>Click me</button>
        </form>
    );
};
