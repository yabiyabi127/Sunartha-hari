// material-ui
import { Breadcrumbs, Divider, Grid, Link, Stack, Typography } from '@mui/material';

// project import
import ComponentSkeleton from './ComponentSkeleton';
import MainCard from 'components/MainCard';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

import { DataGrid } from '@mui/x-data-grid';
import { getDatas } from 'httprequest/_httprequest';

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
// ];

const ComponentTypography = () => {
    // const [ListData, setListData] = useState();
    const [ListData, setListData] = useState([]);
    const loadData = () => {
        getDatas().then((res) => {
            const data = res.data;
            setListData(data);
            console.log(data, 'ini datassssss');
        });
    };

    useEffect(() => {
        loadData();
    }, []);
    const columns = [
        {
            field: 'WarehouseID',
            headerName: 'Warehouse ID',
            width: 150,
            editable: true,
            renderCell: (params) => {
                return <a href={`/free/warehouse-detail/${params.row.WarehouseID}`}>{params.row.WarehouseID}</a>;
            }
        },
        {
            field: 'Branch',
            headerName: 'Branch',
            width: 150,
            editable: true
        },
        {
            field: 'Active',
            headerName: 'Active',
            width: 150,
            editable: true
        },
        {
            field: 'Description',
            headerName: 'Description',
            sortable: false,
            width: 160
        },
        {
            field: 'LastSync',
            headerName: 'Last Sync',
            sortable: false,
            width: 190
        }
    ];
    return (
        <ComponentSkeleton>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={8}>
                    <Stack spacing={5}>
                        <MainCard title="Warehouse">
                            <Box sx={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={ListData}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                    getRowId={(row) => row.WarehouseID}
                                    experimentalFeatures={{ newEditingApi: true }}
                                    sx={{
                                        '& .MuiDataGrid-cell:hover': {
                                            color: 'primary.main'
                                        }
                                    }}
                                />
                            </Box>
                        </MainCard>
                    </Stack>
                </Grid>
            </Grid>
        </ComponentSkeleton>
    );
};

export default ComponentTypography;
