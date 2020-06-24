import React from 'react'

import Loader from '../../../util/Loader/Loader';

const LargeDataCard = props => {

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
    return content;
}

export default LargeDataCard;
