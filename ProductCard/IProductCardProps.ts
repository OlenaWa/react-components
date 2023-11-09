import {IProduct} from "@/app/types/IProduct";

export interface IProductCardProps {
    imageSrc: any
    imageAlt: string
    title: string
    size: string
    name: string

    textButton?: string

    price: number
    sale?: number

    rating?: boolean
    ratingAverage?: number
    numberOFReviews?: number

    item: IProduct
    remove: (item: IProduct) => void
}
