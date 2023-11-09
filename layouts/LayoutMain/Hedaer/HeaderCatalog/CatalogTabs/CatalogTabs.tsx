import {FC, useEffect} from 'react';
import {useTabsToggle} from "@/app/hooks/useTabToggle/useTabToggle";
import classes from "@/app/layouts/LayoutMain/Hedaer/HeaderCatalog/HeaderCatalog.module.scss";

interface Tab {
    id: string;
    title: string;
    content: any;
    links: any
}

interface TabsToggle {
    activeTab: string;
    setActiveTab: (tabId: string) => void;
    getTabProps: (tabId: string) => {
        isActive: boolean;
        onClick: () => void;
    };
}

interface TabsProps {
    tabs: Tab[];
    initialActiveTab?: string;
    lazyLoad?: boolean;
    tabClassName?: string;
    activeTabClassName?: string;
    inactiveTabClassName?: string;
    tabContentClassName?: string;
    onTabChange?: (tabId: string) => void;
}

export const CatalogTabs: FC<TabsProps> = ({
                                                     tabs,
                                                     initialActiveTab = tabs[0].id,
                                                     lazyLoad = false,
                                                     tabClassName = '',
                                                     tabContentClassName = '',
                                                     onTabChange = () => {
                                                     },
                                                 }) => {
    const {activeTab, setActiveTab, getTabProps} = useTabsToggle(
        // initialActiveTab
    );

    useEffect(() => {
        // onTabChange(activeTab);
    }, [activeTab, onTabChange]);

    const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab);

    return (
        <div className={classes.catalog}>
            <div className={classes.catalogItems}>
                {tabs.map((tab) => {
                    const {isActive, onClick} = getTabProps(tab.id);

                    return (
                        <button
                            key={tab.id}
                            className={`${classes.catalogItem} ${
                                isActive ? classes.active : ''
                            }`}
                            onClick={onClick}
                        >
                            {tab.title}
                        </button>
                    );
                })}
            </div>
            <div className={classes.catalogBody}>
                {tabs.map((tab, index) => {
                    const isActive = activeTabIndex === index;

                    if (lazyLoad && !isActive) {
                        return null;
                    }

                    return (
                        <ul
                            key={tab.id}
                            className={classes.catalogBodyItems}
                        >
                            {tab.content}
                        </ul>
                    );
                })}
                {tabs.map((tab, index) => {
                    const isActive = activeTabIndex === index;
                    if (lazyLoad && !isActive) {
                        return null;
                    }
                    return (
                        <div
                            key={tab.id}
                            className={classes.catalogBodySubItems}
                        >
                            {tab.links}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
