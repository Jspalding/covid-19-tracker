import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { SUMMARY_URL } from '../../util/api.config';

import HeadDataCard from "./HeadDataCard/HeadDataCard";
import DisplayTable from "./DisplayTable/DisplayTable";


const DesktopWrapper = props => {

    const [summaryData, setSummaryData] = useState({ Countries: [], Global: [] });
    const [isLoading, setIsLoading] = useState(false);
    // const [hasErrors, setHasErrors] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
            const result = await axios(
                `${SUMMARY_URL}`
            );
            setSummaryData(result.data);
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
        <React.Fragment>
            <HeadDataCard
                cardTitle="Confirmed Cases"
                mainData={summaryData.Global.TotalConfirmed}
                secondaryData={summaryData.Global.NewConfirmed}
                isLoading={isLoading} />
            <HeadDataCard
                cardTitle="Deaths"
                mainData={summaryData.Global.TotalDeaths}
                secondaryData={summaryData.Global.NewDeaths}
                isLoading={isLoading} />
            <HeadDataCard
                cardTitle="Recovered"
                mainData={summaryData.Global.TotalRecovered}
                secondaryData={summaryData.Global.NewRecovered}
                isLoading={isLoading} />
            <DisplayTable
                cardTitle="Countries"
                mainData={summaryData.Countries}
                isLoading={isLoading} />
        </React.Fragment>
    )
}

export default DesktopWrapper;
