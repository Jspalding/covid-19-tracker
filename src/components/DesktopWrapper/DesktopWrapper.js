import React, { useState, useEffect, useMemo } from 'react'
import './DesktopWrapper.css';

import axios from 'axios';
import { SUMMARY_URL } from '../../util/api.config';

import HeadDataCard from "./HeadDataCard/HeadDataCard";
import DisplayDataTable from "./DisplayTable/DisplayDataTable";


const DesktopWrapper = props => {

  const [summaryData, setSummaryData] = useState({ Countries: [], Global: [] });
  const [isLoading, setIsLoading] = useState(false);

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

  const formatter = new Intl.NumberFormat();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Country',
        accessor: 'Country',
      },
      {
        id: 'totalCasesCol',
        Header: 'Total Cases',
        accessor: 'TotalConfirmed',
        sortType: 'basic'
      },
      {
        Header: 'New Cases',
        accessor: 'NewConfirmed',
        sortType: 'basic',
        className: 'new-cases-cell'
      },
      {
        Header: 'Total Deaths',
        accessor: 'TotalDeaths',
        sortType: 'basic'
      },
      {
        Header: 'New Deaths',
        accessor: 'NewDeaths',
        sortType: 'basic'
      },
      {
        Header: 'Recovered',
        accessor: 'TotalRecovered',
        sortType: 'basic'
      },
    ],
    []
  )

  return (
    <div className="desktop-wrapper bg-gray-200">
      <div className="grid grid-cols-6 gap-3">
        <HeadDataCard
          cardTitle="Covid Cases"
          cardTitleColour="blue"
          mainData={summaryData.Global.TotalConfirmed}
          secondaryData={summaryData.Global.NewConfirmed}
          isLoading={isLoading}
          format={formatter}
        />
        <HeadDataCard
          cardTitle="Deaths"
          cardTitleColour="red"
          mainData={summaryData.Global.TotalDeaths}
          secondaryData={summaryData.Global.NewDeaths}
          isLoading={isLoading}
          format={formatter}
        />
        <HeadDataCard
          cardTitle="Recovered"
          cardTitleColour="teal"
          mainData={summaryData.Global.TotalRecovered}
          secondaryData={summaryData.Global.NewRecovered}
          isLoading={isLoading}
          format={formatter}
        />
      </div>
      <div className="grid grid-cols-1">
        <DisplayDataTable
          columns={columns}
          data={summaryData.Countries}
          cardTitle="Daily Country Data"
          cardTitleColour="blue"
          isLoading={isLoading}
          format={formatter}
        />
      </div>
    </div>
  )
}

export default DesktopWrapper;
