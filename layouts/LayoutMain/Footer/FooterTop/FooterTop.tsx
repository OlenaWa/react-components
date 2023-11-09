import classes from "./FooterTop.module.scss"
import {Text} from "@/app/UI";

export const FooterTop = () => {
    return (
        <div className={classes.main}>
            <div className={classes.body}>
                <div className={classes.title}>
                    <Text titleBig light center>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut culpa delectus earum expedita impedit ipsa iste itaque libero
                    </Text>
                </div>
                <div className={classes.text}>
                    <Text subTitle light center>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eos impedit ipsam, necessitatibus non nostrum porro quidem quod. Aliquam deserunt dicta dolores laudantium magnam molestiae porro reprehenderit rerum sit voluptatem.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam dicta illo, itaque laborum laudantium maiores molestias nobis obcaecati quasi similique soluta. Beatae dolorem, itaque nam qui ratione rerum sapiente.
                    </Text>
                </div>
            </div>
        </div>
    );
};
