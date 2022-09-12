import {useEffect, useState} from "react";
import {IFooterLinksItem} from "./@types";

export const UseFooter = () => {
    const [FooterMenuLinksData, setFooterMenuLinksData] =useState<IFooterLinksItem[]>([])

    const loadFooterLinks = async () => {
        const response = await fetch('https://c7j3jqa6l7.execute-api.eu-central-1.amazonaws.com/Production/footer-links')
        let jsonData = await response.json()
        setFooterMenuLinksData(jsonData)
    }

    useEffect(()=>{
        loadFooterLinks()
    }, [])

    return { FooterMenuLinksData }
}
