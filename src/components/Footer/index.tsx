import React, {FC} from 'react';
import {FooterMenuLinksData} from "../../data/constans";

interface IFooterLinksItem {
    href: string
    src: string
    alt: string
}

export const Footer: FC = () => {
    return (
        <footer className="scene">
            <article className="content">
                <div id="socialmedia">
                    <ul className="group">
                        {FooterMenuLinksData.map((item:IFooterLinksItem) =>(
                            <li>
                                <a href={item.href}>
                                    <img className="icon" src={item.src} alt={item.alt}/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        </footer>
    );
};

