import classes from "@/app/layouts/LayoutMain/Hedaer/HedaerCenter/HeaderCenterDesktop/HeaderCenterDesktop.module.scss";
import {IconSearch} from "@/assets/config";

export const Search = () => {
    return (
        <div className={classes.search}>
            <form className={classes.searchForm}>
                <button className={classes.searchButton}>
                    <IconSearch/>
                </button>
                <input autoComplete="off" type="text" placeholder="Search" className={classes.searchInput}/>
            </form>
        </div>
    );
};
