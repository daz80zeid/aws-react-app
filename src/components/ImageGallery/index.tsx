import React from 'react';
import {ImageGalleryLinksData} from "../../data/constans";

interface IImageGalleryLinksItem {
    src: string
    alt: string
    class?: string
}

export const ImageGallery = () => {
    return (
        <div className="scene" id="welcome">
            <article className="content">
                <div className="gallery">
                    {ImageGalleryLinksData.map((item: IImageGalleryLinksItem) => (
                        <img className={item.class && item.class} src={item.src} alt={item.alt} />
                    ))}
                </div>
                <h1>Welcome to the Landon&nbsp;Hotel</h1>
                <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
            </article>
        </div>
    );
};
