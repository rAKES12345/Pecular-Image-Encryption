// Table.js
import React from 'react';

const Table = ({ thead, tableData, tableColumns, btnValue }) => {
  return (
    <table className="table table-bordered mt-4">
      <thead className="thead-dark">
        <tr>
          {thead.map((ele, ind) => (
            <th key={ind} className='text-center'>{ele}</th>
          ))}
          <th className='text-center'>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((obj, ind) => (
          <tr key={ind}>
            {tableColumns.map((key, index) => (
              <td key={index} className='text-center'>{obj[key]}</td>
            ))}
            <td className='text-center'>
              <button className='btn btn-primary'>{btnValue}</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
