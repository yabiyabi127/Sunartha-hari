// material-ui
import { Breadcrumbs, Divider, Grid, Link, Stack, Typography } from '@mui/material';

// project import
import ComponentSkeleton from './ComponentSkeleton';
import MainCard from 'components/MainCard';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

import { DataGrid } from '@mui/x-data-grid';
import { getDatasbyId } from 'httprequest/_httprequest';
import { useParams } from 'react-router';

const WarehouseDetail = () => {
    const [ListDataDetail, setListDataDetail] = useState([]);
    const { id } = useParams();
    const loadData = () => {
        getDatasbyId(id).then((res) => {
            const data = res.data;
            setListDataDetail([data]);
            console.log(data, 'ini datassssss detail');
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
            editable: true
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
            field: 'ReplenishmentClass',
            headerName: 'Replenishment Class',
            sortable: false,
            width: 180
        },
        {
            field: 'LastSync',
            headerName: 'Last Sync',
            sortable: false,
            width: 190
        },
        {
            field: 'LastModifiedDateTime',
            headerName: 'Last Modified DateTime',
            sortable: false,
            width: 190
        }
    ];
    console.log(ListDataDetail, 'ini datassssss detail bouseee');
    return (
        <ComponentSkeleton>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={10}>
                    <Stack spacing={5}>
                        <MainCard title="Warehouse-Detail">
                            <Box sx={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={ListDataDetail}
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

export default WarehouseDetail;
