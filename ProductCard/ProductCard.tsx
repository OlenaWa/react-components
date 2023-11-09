import {FC, MouseEventHandler} from "react";
import {IProductCardProps} from "@/app/components/ProductCard/IProductCardProps";
import classes from "./ProductCard.module.scss"
import {Button, Ibg, Text} from "@/app/UI";
import {IconCart, IconLove} from "@/assets/config";


export const ProductCard: FC<IProductCardProps> = ({
                                                       imageAlt,
                                                       imageSrc,
                                                       title,
                                                       size,
                                                       price,
                                                       name,
                                                       remove,
                                                       item,
                                                       sale
                                                   }) => {

    const handleRemove: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        remove(item);
    }
    return (

        <div className={classes.main}>
            <div className={classes.mainImage}>
                <Ibg src={imageSrc} alt={imageAlt} modClass={classes.clImage}></Ibg>
            </div>
            <div className={classes.blockText}>
                <Text subTitle>{title}</Text>
                <div className={classes.flex}>
                    <Text opacity smallText>{size}</Text>
                    <Text opacity smallText>{name}</Text>
                </div>
                {/*{rating ?*/}
                {/*    <div className={classes.flex}>*/}
                {/*        <StarRating value={numberOFReviews}></StarRating>*/}
                {/*        <div className={classes.numberReviews}>{numberOFReviews}</div>*/}
                {/*    </div>*/}
                {/*    :*/}
                {/*    null*/}
                {/*}*/}
            </div>
            <div className={classes.mainLine}></div>
            <div className={classes.clPrice}>
                <div className={classes.priceNum}>{price} грн.</div>
                <span>- {sale}</span>
                <button className={classes.priceLove}><IconLove/></button>
            </div>
            <Button as={'button'} widthHundredPercent text={"Купити"} icon={<IconCart/>}/>
            <Button as={'button'} widthHundredPercent text={"DELETE"} onClick={handleRemove}/>
        </div>
    );
};
