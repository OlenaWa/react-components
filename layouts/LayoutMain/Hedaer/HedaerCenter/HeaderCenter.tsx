import {useIsTouchDevice, useMediaQuery} from "@/app/hooks";
import {HeaderCenterMobile} from "@/app/layouts/LayoutMain/Hedaer/HedaerCenter/HeaderCenterMobile";
import {HeaderCenterDesktop} from "@/app/layouts/LayoutMain/Hedaer/HedaerCenter/HeaderCenterDesktop";

export const HeaderCenter = () => {
    const isTouch = useIsTouchDevice()
    const matches = useMediaQuery()
    return (
        <>
            {matches || isTouch?
                 <HeaderCenterMobile/>
                :
                 <HeaderCenterDesktop/>
            }
        </>
    );
};
