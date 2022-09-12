import React, {FC} from 'react';
import {UseFooter} from "./useFooter";
import {IFooterLinksItem} from "./@types";

export const Footer: FC = () => {
    const {FooterMenuLinksData} = UseFooter()
    return (
        <footer className="scene">
            <article className="content">
                <div id="socialmedia">
                    <ul className="group">
                        {FooterMenuLinksData.map((item:IFooterLinksItem, index) =>(
                            <li key={index}>
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

