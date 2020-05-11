import React from 'react'

const DisplayTable = props => {

    const { cardTitle, mainData, isLoading } = props;

    let content = <p>Loading data...</p>

    if (!isLoading && mainData) {
        content = (
            <div className="">
                <h1>{cardTitle}</h1>
                <table>
                    <tr>
                        <th>Country</th>
                        <th>Confirmed Cases</th>
                        <th>Deaths</th>
                        <th>New Deaths</th>
                        <th>Recovered</th>
                    </tr>
                    {mainData.map(tableData => (
                        <tr key={tableData.CountryCode} value={tableData.CountryCode}>
                            <td>{tableData.Country}</td>
                            <td>{tableData.TotalConfirmed}</td>
                            <td>{tableData.TotalDeaths}</td>
                            <td>{tableData.NewDeaths}</td>
                            <td>{tableData.TotalRecovered}</td>
                        </tr>
                    ))}
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
