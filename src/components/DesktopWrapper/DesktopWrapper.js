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
            // const result = await axios(
            //     `${SUMMARY_URL}`
            // );
            // setSummaryData(result.data);
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
        <React.Fragment>
            <div className="grid grid-cols-6 gap-5">
                <HeadDataCard
                    cardTitle="Covid Cases"
                    cardTitleColour="blue"
                    mainData={summaryData.Global.TotalConfirmed}
                    secondaryData={summaryData.Global.NewConfirmed}
                    isLoading={isLoading}
                />
                <HeadDataCard
                    cardTitle="Deaths"
                    cardTitleColour="red"
                    mainData={summaryData.Global.TotalDeaths}
                    secondaryData={summaryData.Global.NewDeaths}
                    isLoading={isLoading}
                />
                <HeadDataCard
                    cardTitle="Recovered"
                    cardTitleColour="teal"
                    mainData={summaryData.Global.TotalRecovered}
                    secondaryData={summaryData.Global.NewRecovered}
                    isLoading={isLoading}
                />
            </div>
            <div className="grid grid-cols-1">
                <DisplayTable
                    cardTitle="Countries"
                    cardTitleColour="blue"
                    mainData={summaryData.Countries}
                    isLoading={isLoading} />
            </div>
        </React.Fragment>
    )
}

export default DesktopWrapper;
