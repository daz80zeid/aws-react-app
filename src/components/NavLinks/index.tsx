import React from 'react';
import {ILinkItem} from "../Header/@types";
import { UseNavLinks} from "./useNavLinks";

export const NavLinks = () => {
    const {menuLinksData} = UseNavLinks()
    return (
        <nav id="nav">
            <div className="navbar">
                <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
                <ul>
                    {menuLinksData.map((item: ILinkItem, index: React.Key | null | undefined) =>(
                        <li key={index}>
                            <a className={`icon ${item.class}`} href={item.href}>
                                <span>{item.text}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
