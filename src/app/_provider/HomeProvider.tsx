"use client";
import { createContext, useState } from "react"

export type HomeContextType = {
    showSidebar: boolean,
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>,
    showSetting: boolean,
    setShowSetting: React.Dispatch<React.SetStateAction<boolean>>,
}

export const HomeContext = createContext<HomeContextType | null>(null);

const HomeProvider: React.FC<any> = (props: any) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const [showSetting, setShowSetting] = useState<boolean>(false);

    const value = {
        showSidebar,
        setShowSidebar,
        showSetting,
        setShowSetting
    };

    return (
        <HomeContext.Provider value={value}>
            {props.children}
        </HomeContext.Provider>
    )
}

export default HomeProvider;