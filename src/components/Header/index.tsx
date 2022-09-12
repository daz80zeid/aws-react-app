import React, {FC} from 'react';
import {NavLinks} from "../NavLinks";

export const Header: FC = () => {
    return (
        <header id="intro">
            <article className="fullheight">
                <div className="hgroup">
                    <h1>Landon Hotel</h1>
                    <h2>West London</h2>
                    <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow"/></a></p>
                </div>
            </article>
            <NavLinks/>
        </header>
    );
};

export default Header;
