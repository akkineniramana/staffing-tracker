import React from 'react';

const TableHeader = (props) => {
    const getColumns = (columns) => {
        return columns.map((column) => {
            return <th width={column.width} key={column.name}>{column.displayName}</th>
        })
    }
    return (
        <tr>{getColumns(props.columns)}</tr>        
    )
}

export default TableHeader;