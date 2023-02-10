import React from 'react';
import Header from './Header'
import Sibar from './Sibar';

const DeafaultLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <div className="container">
                <Sibar/>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DeafaultLayout;