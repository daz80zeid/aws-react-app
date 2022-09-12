import {useEffect, useState} from "react";
import {ILinkItem} from "../Header/@types";

export const UseNavLinks = () => {
    const [menuLinksData, setMenuLinksData] =useState<ILinkItem[]>([])

    const loadMenuDataLinks = async () => {
        const response = await fetch('https://c7j3jqa6l7.execute-api.eu-central-1.amazonaws.com/Production/menu-links')
        let jsonData = await response.json()
        setMenuLinksData(jsonData)
    }

    useEffect(()=>{
        loadMenuDataLinks()
    }, [])

    return { menuLinksData }
}
