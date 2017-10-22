import React from "react";
import PropTypes from 'prop-types';

import { StandardTableHeader } from "./StandardTableHeader";
import { StandardTableRow } from "./StandardTableRow";

function StandardTable(props) {
  const rows = props.data.map((rowData, index) => {
    return <StandardTableRow key={index}
                             columns={props.columns}
                             rowData={rowData}
                             index={index} />;
  });
  return (
    <table>
      <StandardTableHeader columns={props.columns} />
      <tbody>{rows}</tbody>
    </table>
  );
}

StandardTable.propTypes = {
  columns: PropTypes.array.isRequired,
};

export { StandardTable }