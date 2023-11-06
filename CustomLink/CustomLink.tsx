import {MouseEventHandler, FC, useState} from "react";
import Link, {LinkProps} from "next/link";
import {useRouter} from "next/router";
import {Loader} from "@/app/UI";
import {ICustomLink} from "@/app/UI/CustomLink/ICustomLink";

export const CustomLink: FC<ICustomLink & LinkProps> = ({href, children, className, ...props}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();
        setIsLoading(true);
        router.push(href).finally(() => setIsLoading(false));
    };

    return (
        <Link onClick={handleClick} className={className} href={href} {...props}>
            {children}
            {isLoading && <Loader/>}
        </Link>
    );
};
