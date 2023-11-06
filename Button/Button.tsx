import classes from "./Button.module.scss"
import {ElementType} from "react";
import {defaultElementButton, IButtonProps} from "@/app/UI/Button/IButton";


export const Button = <E extends ElementType = typeof defaultElementButton>({as, text, icon, primary, secondary, widthHundredPercent, border, ...otherProps} :IButtonProps<E>) => {
    const TagName = as || defaultElementButton;

    const classesMain = classes.main
    let classesName = [classesMain]
    const classesPrimary = classes.clPrimary
    const classesSecondary = classes.clSecondary
    const classesWidthHundredPercent = classes.clWidthHundredPercent
    const classesBorder = classes.clBorder

    if (primary) {
        classesName.push(classesPrimary)
    }

    if (secondary) {
        classesName.push(classesSecondary)
    }

    if (widthHundredPercent) {
        classesName.push(classesWidthHundredPercent)
    }

    if (border) {
        classesName.push(classesBorder)
    }


    return <TagName className={classesName.join(' ')} {...otherProps}>{text} {icon}</TagName>
};
