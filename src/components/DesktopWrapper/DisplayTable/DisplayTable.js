import React from 'react'

const DisplayTable = props => {

    const { cardTitle, mainData, isLoading, cardTitleColour } = props;

    let content = <p>Loading data...</p>

    if (!isLoading && mainData) {
        content = (
            <div className="rounded-sm shadow-md bg-white my-6">
                <h2 className={`bg-${cardTitleColour}-600 text-white font-semibold py-1 px-3`}>{cardTitle}</h2>
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left">Country</th>
                            <th className="px-4 py-2">Total Cases</th>
                            <th className="px-4 py-2">New Cases</th>
                            <th className="px-4 py-2">Deaths</th>
                            <th className="px-4 py-2">New Deaths</th>
                            <th className="px-4 py-2">Recovered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mainData.map(tableData => (
                            <tr key={tableData.CountryCode} value={tableData.CountryCode}>
                                <td className="px-4 py-2 border">{tableData.Country}</td>
                                <td className="px-4 py-2 border">{tableData.TotalConfirmed}</td>
                                <td className="px-4 py-2 border">{tableData.NewConfirmed}</td>
                                <td className="px-4 py-2 border">{tableData.TotalDeaths}</td>
                                <td className="px-4 py-2 border">{tableData.NewDeaths}</td>
                                <td className="px-4 py-2 border">{tableData.TotalRecovered}</td>
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
