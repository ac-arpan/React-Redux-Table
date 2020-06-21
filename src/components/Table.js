import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import ReactTable from "react-table-6";
import 'react-table-6/react-table.css';
import { fetchTableData } from '../redux';

function Table({ fetchTableData, tableData }) {
    // const [data, setData] = useState([])

    useEffect(() => {
        fetchTableData()
    }, [])
    // console.log(data);

    const columns = [
        {
            Header: () => (
                <div
                    style={{
                        textAlign: "left",
                        fontSize: '20px'
                    }}
                >Name</div>),
            accessor: 'name',
            sortable: false,
            filterable: true
        },
        {
            Header: () => (
                <div
                    style={{
                        textAlign: "left",
                        fontSize: '20px'
                    }}
                >Capital</div>),
            accessor: 'capital',
            sortable: false,
            filterable: true
        },
        {
            Header: () => (
                <div
                    style={{
                        textAlign: "left",
                        fontSize: '20px'
                    }}
                >Region</div>),
            accessor: 'region',
            sortable: false,
            filterable: true
        },
        {
            Header: () => (
                <div
                    style={{
                        textAlign: "left",
                        fontSize: '20px'
                    }}
                >Sub Region</div>),
            accessor: 'subregion',
            sortable: false,
            filterable: true
        },
        {
            Header: () => (
                <div
                    style={{
                        textAlign: "left",
                        fontSize: '20px'
                    }}
                >Population</div>),
            accessor: 'population'
        },
        {
            Header: () => (
                <div
                    style={{
                        textAlign: "left",
                        fontSize: '20px'
                    }}
                >Native Name</div>),
            accessor: 'nativeName'
        },
    ]
    return tableData.loading
        ? (
            <h2>Loading...</h2>
        )
        : tableData.error
            ? (
                <h2>{tableData.error}</h2>
            )
            : (
                <div className="table">
                    <ReactTable style={{ border: '2px solid black', maxHeight: '80vh' }}
                        data={tableData.data}
                        columns={columns}
                        showPageSizeOptions={true}
                        defaultpageSize={5}
                        pageSizeOptions={[5, 10, 15, 20]}
                    />
                </div>
            )

}
const mapStateToProps = state => {
    return {
        tableData: state.table
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchTableData: () => dispatch(fetchTableData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Table)
