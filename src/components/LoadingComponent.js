import React from 'react';

export const Loading = () => {
    return(
        <div className="col-12">
            <span className="fa fa-cog fa-spin fa-3x fa-fw text-success"></span>
            <br /><br />
            <p>Loading . . .</p>
        </div>
    );
};