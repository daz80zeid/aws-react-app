import React, {FC} from 'react';
import {ImageGallery, Information} from "../index";

export const Main: FC = () => {
    return (
        <main id="wrapper">
            <ImageGallery/>
            <Information/>
        </main>
    );
};

export default Main;
