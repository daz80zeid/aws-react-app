import {useEffect, useState} from "react";
import {IImageGalleryLinksItem} from "./@types";

export const UseImageGallery = () => {
    const [ImageGalleryLinksData, setImageGalleryLinksData] =useState<IImageGalleryLinksItem[]>([])

    const loadImageGalleryLinks = async () => {
        const response = await fetch('https://c7j3jqa6l7.execute-api.eu-central-1.amazonaws.com/Production/gallery-images')
        let jsonData = await response.json()
        setImageGalleryLinksData(jsonData)
    }

    useEffect(()=>{
        loadImageGalleryLinks()
    }, [])

    return { ImageGalleryLinksData }
}
