import React from 'react'

import Loader from '../../../util/Loader/Loader';

const SmallDataCard = props => {

    const { cardTitle, mainData, secondaryData, isLoading, cardTitleColour, format } = props;
    const percentage = (100 * secondaryData) / mainData;

    let content = (
        <div className="rounded-sm shadow-md bg-blue-900 my-6">
            <h2 className={`text-${cardTitleColour}-900 font-semibold text-left px-5 py-2`}>
                {cardTitle}
            </h2>
            <div className="p-2 text-white">
                <Loader />
            </div>
        </div>
    );
    if (!isLoading && mainData) {
        content = (
            <div className="rounded-sm shadow-md bg-blue-900 my-6">
                <h2 className="text-indigo-800 font-semibold text-left px-5 py-2">
                    {cardTitle}
                </h2>
                <div className="divide-y divide-indigo-900">
                    <p className="my-8 text-center text-white text-4xl">{format.format(mainData)}</p>
                    <div className="px-2 grid grid-cols-2 divide-x divide-indigo-900">
                        <p className={`py-5 text-center text-${cardTitleColour}-900 text-sm font-semibold`}>
                            + {format.format(secondaryData)}
                        </p>
                        <p className={`py-5 text-center text-${cardTitleColour}-900 text-sm font-semibold`}>
                            + {percentage.toFixed(2)}%
                        </p>
                    </div>
                </div>
            </div>
        );
    } else if (
        !isLoading &&
        (!mainData || mainData === 0)
    ) {
        content = (
            <div className="rounded-sm shadow-md bg-blue-900 my-6">
                <h2 className={`bg-${cardTitleColour}-600 text-white font-semibold text-left px-5 py-2`}>
                    {cardTitle}
                </h2>
                <div className="p-2">
                    <p className="my-2 text-center text-white">Could not fetch any data 😅</p>
                </div>
            </div>
        );
    }
    return content;
}

export default SmallDataCard;
