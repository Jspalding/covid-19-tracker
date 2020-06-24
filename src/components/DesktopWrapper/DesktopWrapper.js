import React, { useState, useEffect, useMemo } from 'react'
import './DesktopWrapper.css';

import axios from 'axios';
import { SUMMARY_URL } from '../../util/api.config';

import SmallDataCard from "./SmallDataCard/SmallDataCard";
import DisplayDataTable from "./DisplayTable/DisplayDataTable";
import DisplayDataChart from './DisplayDataChart/DisplayDataChart';


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

  const formatFunc = (numberString) => {
    let number = parseFloat(numberString);
    return number.toLocaleString('USD');
  }

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
        sortType: 'basic',
        Cell: props => formatFunc(props.value)
      },
      {
        Header: 'New Cases',
        accessor: 'NewConfirmed',
        sortType: 'basic',
        className: 'new-cases-cell',
        Cell: props => formatFunc(props.value)
      },
      {
        Header: 'Total Deaths',
        accessor: 'TotalDeaths',
        sortType: 'basic',
        Cell: props => formatFunc(props.value)
      },
      {
        Header: 'New Deaths',
        accessor: 'NewDeaths',
        sortType: 'basic',
        Cell: props => formatFunc(props.value)
      },
      {
        Header: 'Recovered',
        accessor: 'TotalRecovered',
        sortType: 'basic',
        Cell: props => formatFunc(props.value)
      },
    ],
    []
  )

  return (
    <div className="desktop-wrapper">
      <div className="grid grid-cols-6 gap-3">
        <SmallDataCard
          cardTitle="Global Cases"
          cardTitleColour="yellow"
          mainData={summaryData.Global.TotalConfirmed}
          secondaryData={summaryData.Global.NewConfirmed}
          isLoading={isLoading}
          format={formatter}
        />
        <SmallDataCard
          cardTitle="Deaths"
          cardTitleColour="pink"
          mainData={summaryData.Global.TotalDeaths}
          secondaryData={summaryData.Global.NewDeaths}
          isLoading={isLoading}
          format={formatter}
        />
        <SmallDataCard
          cardTitle="Recovered"
          cardTitleColour="teal"
          mainData={summaryData.Global.TotalRecovered}
          secondaryData={summaryData.Global.NewRecovered}
          isLoading={isLoading}
          format={formatter}
        />
        <DisplayDataChart cardTitle="Daily Cases Chart"/>
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
      <div className="grid grid-cols-1">
        <DisplayDataChart cardTitle="Global Cases Graph"/>
      </div>
    </div>
  )
}

export default DesktopWrapper;
