import React from 'react'

import Loader from '../../../util/Loader/Loader';

const DisplayDataChart = props => {

    const { cardTitle } = props;

    let content = (
        <div className="rounded-sm shadow-md bg-blue-900 my-6 col-span-3">
            <h2 className="font-semibold text-indigo-800 text-left px-5 py-2">
                {cardTitle}
            </h2>
            <div className="p-2 text-white">
                <Loader />
            </div>
        </div>
    );

    return content;
}

export default DisplayDataChart;
