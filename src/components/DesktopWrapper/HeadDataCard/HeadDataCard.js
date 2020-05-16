import React from 'react'

const HeadDataCard = props => {

    const { cardTitle, mainData, secondaryData, isLoading, cardTitleColour } = props;

    let content = (
        <div className="rounded-sm shadow-md bg-white my-6">
            <h2 className={`bg-${cardTitleColour}-600 text-white font-semibold text-center p-2`}>
                {cardTitle}
            </h2>
            <div className="p-2">
                <p className="my-2 text-center text-2xl">Loading data...</p>
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
                    <p className="my-2 text-center text-2xl">{mainData}</p>
                    <p className="text-center">{secondaryData}</p>
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
