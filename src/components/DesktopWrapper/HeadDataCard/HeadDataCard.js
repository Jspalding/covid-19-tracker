import React from 'react'

import Loader from '../../../util/Loader/Loader';

const HeadDataCard = props => {

    const { cardTitle, mainData, secondaryData, isLoading, cardTitleColour, format } = props;

    let content = (
        <div className="rounded-sm shadow-md bg-white my-6">
            <h2 className={`bg-${cardTitleColour}-600 text-white font-semibold text-center p-2`}>
                {cardTitle}
            </h2>
            <div className="p-2">
                <Loader />
            </div>
        </div>
    );
    if (!isLoading && mainData) {
        content = (
            <div className="rounded-sm shadow-md bg-white my-6">
                <h2 className={`bg-${cardTitleColour}-600 text-white font-semibold text-center p-2`}>
                    {cardTitle}
                </h2>
                <div className="p-2">
                    <p className="my-2 text-center text-2xl">{format.format(mainData)}</p>
                    <p className="text-center">+{format.format(secondaryData)}</p>
                </div>
            </div>
        );
    } else if (
        !isLoading &&
        (!mainData || mainData === 0)
    ) {
        content = (
            <div className="rounded-sm shadow-md bg-white my-6">
                <h2 className={`bg-${cardTitleColour}-600 text-white font-semibold text-center p-2`}>
                    {cardTitle}
                </h2>
                <div className="p-2">
                    <p className="my-2 text-center">Could not fetch any data 😅</p>
                </div>
            </div>
        );
    }
    return content;
}

export default HeadDataCard;
