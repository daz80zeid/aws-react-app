import React, {FC} from 'react';

interface ILayoutProps {
    children: React.ReactNode
}

export const Layout:FC<ILayoutProps> = ({children}) => {
    return (
        <div className="App">
            {children}
        </div>
    );
};
