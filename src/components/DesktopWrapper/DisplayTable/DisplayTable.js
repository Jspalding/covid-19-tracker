import React, { useState } from 'react'

import Loader from '../../../util/Loader/Loader';

const DisplayTable = props => {

    const { cardTitle, mainData, isLoading, cardTitleColour, format } = props;

    let content = (
    <div className="rounded-sm shadow-md bg-white my-6">
        <h2 className={`bg-${cardTitleColour}-600 text-white font-semibold text-center p-2`}>
            {cardTitle}
        </h2>
        <div className="p-2">
            <Loader />
        </div>
    </div>
    ) 

    if (!isLoading && mainData) {
        content = (
            <div className="rounded-sm shadow-md bg-white">
                <h2 className={`bg-${cardTitleColour}-600 text-white font-semibold py-1 px-3`}>{cardTitle}</h2>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left">Country</th>
                            <th className="px-4 py-2 text-left">Total Cases</th>
                            <th className="px-4 py-2 text-left">New Cases</th>
                            <th className="px-4 py-2 text-left">Deaths</th>
                            <th className="px-4 py-2 text-left">New Deaths</th>
                            <th className="px-4 py-2 text-left">Recovered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mainData.map(tableData => (
                            <tr key={tableData.CountryCode} value={tableData.CountryCode}>
                                <td className="px-4 py-2 border">{tableData.Country}</td>
                                <td className="px-4 py-2 border">{format.format(tableData.TotalConfirmed)}</td>
                                <td className="px-4 py-2 border">+{format.format(tableData.NewConfirmed)}</td>
                                <td className="px-4 py-2 border">{format.format(tableData.TotalDeaths)}</td>
                                <td className="px-4 py-2 border">+{format.format(tableData.NewDeaths)}</td>
                                <td className="px-4 py-2 border">{format.format(tableData.TotalRecovered)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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

export default DisplayTable;
