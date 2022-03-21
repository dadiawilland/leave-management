import React from "react";
import styled from 'styled-components';

const CustomTable = ({ theadData, tbodyData, customClass }) => {
    return (
        <table style={styles.containerTable} className={customClass}>
            <thead>
                <tr>
                    {theadData.map((h) => {
                        return <TableHeadItem key={h} item={h} />;
                    })}
                </tr>
            </thead>
            <TableBody>
                {tbodyData.map((item) => {
                    return <TableRow key={item.id} data={item.items} />;
                })}
            </TableBody>
        </table>
    );
};

export default CustomTable;

const styles = {
    containerTable: {
        width: '100%',
        borderCollapse: 'collapse',
        borderRadius: 6,
        padding: 4,
        boxShadow: '4px 2px 8px #9E9E9E30'
    },
    containerHead: {
        borderBottom: '1px solid #0F4C81',
        padding: 8,
        color: '#0F4C81',
        fontWeight: 700,
        textAlign: 'left'
    },
    containerRow: {
        padding: 8,
        borderBottom: '1px solid #ddd',
        cursor: 'pointer'
    }
}

const TableHeadItem = ({ item }) => {
    return (
        <th style={styles.containerHead} title={item}>
            {item}
        </th>
    );
};
const TableBody = styled.tbody`
    tr:hover {
        background-color: #88C4F8;
        border-bottom: 1px solid #88C4F8;
    };
    &tr:last-child {
        border: none;
    }
`

const TableRow = ({ data }) => {
    return (
        <tr>
            {data.map((item) => {
                return <td style={styles.containerRow} key={item}>{item}</td>;
            })}
        </tr>
    );
};


