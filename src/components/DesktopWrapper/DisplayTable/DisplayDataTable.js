import React from 'react'
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination,
} from 'react-table'

import Loader from '../../../util/Loader/Loader';

const DisplayDataTable = ({ columns, data, cardTitle, isLoading, cardTitleColour, format }) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        sortBy: [
          {
            id: 'totalCasesCol',
            desc: true
          }
        ]
      },
    },
    useSortBy,
    usePagination
  )

  //Default to loading state
  let content = (
    <div className="rounded-sm shadow-md bg-blue-900 my-6 px-3">
      <h2 className="text-indigo-800 font-semibold text-left p-2">
        {cardTitle}
      </h2>
      <div className="p-2 text-white">
        <Loader />
      </div>
    </div>
  )

  if (!isLoading && data) {
    content = (
      <div className="rounded-sm shadow-md bg-blue-900 px-3">
        <h2 className="bg-blue-900 text-indigo-800 font-semibold px-4 py-2">{cardTitle}</h2>

        {/* Debug pagination
        
        <pre>
          <code>
            {JSON.stringify(
              {
                pageIndex,
                pageSize,
                pageCount,
                canNextPage,
                canPreviousPage,
              },
              null,
              2
            )}
          </code>
        </pre> */}

        <table  {...getTableProps()} className="table-auto w-full table-fixed text-white">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  // Add the sorting props to control sorting
                  <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-4 py-2 text-left">
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(
              (row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        <td {...cell.getCellProps({
                          className: cell.column.className
                        })} className="px-4 py-2 border border-indigo-900">
                          {cell.render('Cell')}
                        </td>
                      )
                    })}
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
        <div className="pagination px-0 py-5 text-white">
          <button className="font" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>{' '}
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          {/* 
          <span>
            | Go to page:{' '}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
              }}
              style={{ width: '100px' }}
            />
          </span>{' '}
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select> */}
        </div>
      </div>
    );
  }
  else if (!isLoading && (!data || data === 0)) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
}

export default DisplayDataTable;
