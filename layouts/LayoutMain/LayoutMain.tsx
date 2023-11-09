import {FC, ReactNode} from "react";
import {Header} from "@/app/layouts/LayoutMain/Hedaer";
import {Footer} from "@/app/layouts/LayoutMain/Footer";
import {Section} from "@/app/layouts/LayoutMain/Section";
import {useIsTouchDevice, useMediaQuery} from "@/app/hooks";


interface LayoutMainProps {
    children: ReactNode
}

export const LayoutMain: FC<LayoutMainProps> = ({children}) => {
    const isTouch = useIsTouchDevice()
    const matches = useMediaQuery()
    return (
        <>
            <Header/>
            <Section>
                {children}
            </Section>
            <Footer/>
        </>
    );
};
