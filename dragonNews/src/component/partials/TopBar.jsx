import React from 'react';
import topLogo from '../../../public/img/logo.png'

const TopBar = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <img src={topLogo} alt=""/>
            <h1>Journalism Without Fear or Favour</h1>
        </div>
    );
};

export default TopBar;