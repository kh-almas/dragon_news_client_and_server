import React from 'react';
import topLogo from '../../assets/logo.png'
import moment from "moment";

const TopBar = () => {
    return (
        <div>
            <div className="text-center mt-4">
                <img className="" src={topLogo} alt=""/>
                <h4 className="text-muted mt-2">Journalism Without Fear or Favour</h4>
                <p className="text-muted">{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
        </div>
    );
};

export default TopBar;