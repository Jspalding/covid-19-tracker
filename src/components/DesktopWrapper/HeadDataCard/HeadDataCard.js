import React from 'react'

const HeadDataCard = props => {

    const { cardTitle, mainData, secondaryData, isLoading } = props;

    let content = <p>Loading data...</p>

    if (!isLoading && mainData) {
        content = (
            <div className="">
                <h1>{cardTitle}</h1>
                <h2>{mainData}</h2>
                <h3>{secondaryData}</h3>
            </div>
        );
    } else if (
        !isLoading &&
        (!mainData || mainData === 0)
    ) {
        content = <p>Could not fetch any data.</p>;
    }
    return content;
}

export default HeadDataCard;
