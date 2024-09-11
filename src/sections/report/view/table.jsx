import { useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Card, Table, TableBody, TableRow, TableCell, TableHead, Box, Typography, Stack } from '@mui/material';
import { paths } from 'src/routes/paths';
import { _orders } from 'src/_mock';

import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import TableToolbar from './table-toolbar';
import { isAfter } from 'src/utils/format-time';
import { GetAllTransactionDetailReports } from 'src/api/report';
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer } from '@mui/x-data-grid';
import { RenderCellAccount, RenderCellAmount, RenderCellClass, RenderCellClassDocNumber, RenderCellDescription, RenderCellIncidentDateTime, RenderCellName, RenderCellType } from '../report-table-row';
import EmptyContent from 'src/components/empty-content/empty-content';
import { formatDateToYYYYMMDD, HIDE_COLUMNS_TOGGLABLE } from 'src/common/Common';
import { GetAllCompany } from 'src/api/common';

// ----------------------------------------------------------------------

function getDefaultStartDate() {
  const currentDate = new Date();
  const lastMonthDate = new Date(currentDate.setDate(currentDate.getDate() - 7));
  return lastMonthDate;
}

const defaultFilters = {
  search: '',
  startDate: getDefaultStartDate(), // Set startDate to one month before the current date
  endDate: new Date(), // Set endDate to the current date
  companyId: ''
};


export default function TableView() {
  const settings = useSettingsContext();

  const { GetAllCompanyData } = GetAllCompany(); // api


  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState(defaultFilters);
  const dateError = isAfter(filters.startDate, filters.endDate);
  const [tableData, setTableData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const [selectCompany, setSelectCompany] = useState(null)


  useEffect(() => {
    if (loading) {
      fetchdata()
    }
  }, [loading, selectCompany]);


  useEffect(() => {
    // Set default company ID once GetAllCompanyData is loaded
    if (GetAllCompanyData.length > 0 && selectCompany === null) {
      setSelectCompany(GetAllCompanyData[0]?.companyId);
    }
  }, [GetAllCompanyData]);

  const fetchdata = async () => {
    const payload = {
      searchStartDate: formatDateToYYYYMMDD(filters.startDate),
      searchEndDate: formatDateToYYYYMMDD(filters.endDate),
      search: filters.search,
      companyId: selectCompany || filters.companyId,
    };

    const { result, isLoading } = await GetAllTransactionDetailReports(payload);
    const newTableData = result?.map((item, index) => ({
      ...item,
      id: index
    })) || [];

    setTotalCount(newTableData?.length)
    setTableData(newTableData);
    setLoading(isLoading)
  }

  const handleFilters = useCallback(
    (name, value) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
      setLoading(true);
    },
    []
  );

  const handleRefreshPage = () => {
    const resetFilters = {
      ...defaultFilters,
      startDate: getDefaultStartDate(), // Reset to one week ago
      endDate: new Date(), // Reset to the current date
    };
    setFilters(resetFilters);
    setLoading(true);
  };

  const columns = [

    {
      field: 'type',
      headerName: 'Transaction Type',
      minWidth: 150,
      editable: false,
      hideable: false,
      filterable: false,
      renderCell: (params) => <RenderCellType params={params} />,
    },

    {
      field: 'date',
      headerName: 'Date',
      minWidth: 120,
      editable: false,
      hideable: false,
      filterable: false,
      renderCell: (params) => <RenderCellIncidentDateTime params={params} />,
    },


    {
      field: 'docNumber',
      headerName: 'Num',
      flex: 1,
      minWidth: 250,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return <RenderCellClassDocNumber params={params} />;
      },
    },
    {
      field: 'name',
      headerName: 'Name',
      editable: false,
      flex: 1,
      minWidth: 250,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellName params={params} />,
    },


    {
      field: 'description',
      headerName: 'Memo/Description',
      editable: false,
      minWidth: 600,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellDescription params={params} />,
    },

    {
      field: 'account',
      headerName: 'Account',
      editable: false,
      minWidth: 250,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellAccount params={params} />,
    },

    {
      field: 'class',
      headerName: 'Class',
      editable: false,
      minWidth: 180,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellClass params={params} />,
    },

    {
      field: 'amount',
      headerName: 'Amount',
      editable: false,
      minWidth: 180,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellAmount params={params} />,
    },

  ];


  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CustomBreadcrumbs
          heading="Transaction Details by Account"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'Transaction Detail Report' },
          ]}
          action={
            <Box display="flex" gap={2}>
              <Button
                variant="outlined"
                startIcon={<Iconify icon="material-symbols:refresh" />}
                onClick={handleRefreshPage}
              >
                Refresh
              </Button>

              <Button
                variant="contained"
                startIcon={<Iconify icon="solar:export-bold" />}
              >
                Export
              </Button>
            </Box>
          }
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />

        <Card
          sx={{
            height: { xs: 800, md: 2 },
            flexGrow: { md: 1 },
            display: { md: 'flex' },
            flexDirection: { md: 'column' },
          }}
        >

          {/* table start Component ------------------ */}
          <DataGrid
            rowCount={totalCount}
            rows={tableData}
            columns={columns}
            loading={loading}
            pageSizeOptions={[]}
            hideFooterPagination={true}
            disableColumnMenu
            slots={{
              toolbar: () => (
                <>
                  <GridToolbarContainer>

                    <TableToolbar filters={filters}
                      dateError={dateError}
                      onFilters={handleFilters}
                      setSelectCompany={setSelectCompany}
                      selectCompany={selectCompany}
                      GetAllCompanyData={GetAllCompanyData} />

                    <Stack
                      spacing={1}
                      flexGrow={1}
                      direction="row"
                      alignItems="center"
                      justifyContent="flex-end"
                    >
                      <GridToolbarColumnsButton />
                    </Stack>
                  </GridToolbarContainer>
                </>
              ),
              noRowsOverlay: () => <EmptyContent title="No Data" />,
              noResultsOverlay: () => <EmptyContent title="No results found" />,
            }}
          />


          <Stack sx={{ p: 2, display: "flex", justifyContent: "flex-end", flexDirection: "row" }}>
            <Typography variant='body2' sx={{ pr: 2 }}>1–0 of {totalCount}</Typography>
          </Stack>

          {/* table start Component ------------------ */}
        </Card>
      </Container>
    </>
  );
}
