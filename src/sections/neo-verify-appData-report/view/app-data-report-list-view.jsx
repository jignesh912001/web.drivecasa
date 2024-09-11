import { useCallback, useEffect, useState } from "react"
import { Box, Button, Card, Container, Stack, Typography } from "@mui/material"
import CustomBreadcrumbs from "src/components/custom-breadcrumbs/custom-breadcrumbs"
import { paths } from "src/routes/paths"
import TableToolbar from "../app-data-report-table-toolbar"
import { isAfter } from 'src/utils/format-time';
import { formatDateToYYYYMMDD, getDefaultStartDate } from "src/common/Common"
import { DataGrid, GridActionsCellItem, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { GetAllAppDataReports } from "src/api/neoVerify"
import EmptyContent from "src/components/empty-content/empty-content"
import { RenderCellApplicationDate, RenderCellApprovalStatus, RenderCellCombAppSoldDate, RenderCellCompletionTime, RenderCellDealership, RenderCellDownpayment, RenderCellEmail, RenderCellIncome, RenderCellMonthlyPayment, RenderCellName, RenderCellNumber, RenderCellSoldDate, RenderCellStatus } from "../report-table-row"
import Iconify from "src/components/iconify"
import { useSettingsContext } from "src/components/settings"


const defaultFilters = {
  search: '',
  startDate: getDefaultStartDate(), // Set startDate to one month before the current date
  endDate: new Date(), // Set endDate to the current date
};

const AppDataReportListView = () => {
  const settings = useSettingsContext();

  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState(defaultFilters);
  const dateError = isAfter(filters.startDate, filters.endDate);
  const [tableData, setTableData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);


  useEffect(() => {
    if (loading) {
      fetchdata()
    }
  }, [loading]);

  const fetchdata = async () => {
    const payload = {
      searchStartDate: formatDateToYYYYMMDD(filters.startDate),
      searchEndDate: formatDateToYYYYMMDD(filters.endDate),
      search: filters.search,
    };

    const { result, isLoading } = await GetAllAppDataReports(payload);
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
      field: 'appFirstName',
      headerName: 'Name',
      flex: 1,
      minWidth: 200,
      editable: false,
      hideable: false,
      filterable: false,
      renderCell: (params) => <RenderCellName params={params} />,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      minWidth: 300,
      editable: false,
      hideable: false,
      filterable: false,
      renderCell: (params) => <RenderCellEmail params={params} />,
    },

    {
      field: 'dmsId',
      headerName: 'DmsId',
      flex: 1,
      minWidth: 180,
      filterable: false,
      disableColumnMenu: true,
      // renderCell: (params) => <RenderCellNumber params={params} />,
    },

    {
      field: 'cellNumber',
      headerName: 'Number',
      flex: 1,
      minWidth: 180,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellNumber params={params} />,
    },

    {
      field: 'applicationDate',
      headerName: 'Application Date',
      flex: 1,
      minWidth: 180,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellApplicationDate params={params} />,
    },

    {
      field: 'combAppSoldDate',
      headerName: 'CombAppSold Date',
      flex: 1,
      minWidth: 180,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellCombAppSoldDate params={params} />,
    },

    {
      field: 'completionTime',
      headerName: 'Completion Time',
      flex: 1,
      minWidth: 180,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellCompletionTime params={params} />,
    },

    {
      field: 'soldDate',
      headerName: 'Sold Date',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellSoldDate params={params} />,
    },
    {
      field: 'type',
      headerName: 'Type',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellApprovalStatus params={params} />,
    },

    {
      field: 'dealership',
      headerName: 'Dealership',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellDealership params={params} />,
    },

    {
      field: 'score',
      headerName: 'Score',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: 'grade',
      headerName: 'Grade',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: 'customTag',
      headerName: 'Custom Tag',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: 'approvalTier',
      headerName: 'ApprovalTier',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: 'salesperson',
      headerName: 'Sales person',
      flex: 1,
      minWidth: 180,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: 'decisionedBy',
      headerName: 'Decisioned',
      flex: 1,
      minWidth: 180,
      filterable: false,
      disableColumnMenu: true,
    },

    {
      field: 'verifier',
      headerName: 'Verifier',
      flex: 1,
      minWidth: 180,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: 'advActionLetter',
      headerName: 'AdvActionLetter',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: 'referralSource',
      headerName: 'Referral Source',
      flex: 1,
      minWidth: 180,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: 'referralSourceDetail',
      headerName: 'Referral Source Detail',
      flex: 1,
      minWidth: 180,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: 'homeNumber',
      headerName: 'Home Number',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: 'paycallTier',
      headerName: 'PaycallTier',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: 'proofOfIncome',
      headerName: 'ProofOfIncome',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: 'pti',
      headerName: 'PTI',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: 'creditScore',
      headerName: 'CreditScore',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: 'repossession',
      headerName: 'Repossession',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: 'applicantZipcode',
      headerName: 'Applicant Zipcode',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: 'zipCode',
      headerName: 'Zipcode',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
    },

    {
      field: 'income',
      headerName: 'Income',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellIncome params={params} />,
    },

    {
      field: 'downpayment',
      headerName: 'Downpayment',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellDownpayment params={params} />,
    },

    {
      field: 'monthlyPayment',
      headerName: 'Monthly Payment',
      flex: 1,
      minWidth: 180,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellMonthlyPayment params={params} />,
    },

    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellStatus params={params} />,
    },

    {
      field: 'notes',
      headerName: 'Notes',
      flex: 1,
      minWidth: 180,
      filterable: false,
      disableColumnMenu: true,
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
          heading="App Data Report"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'Neo verify' },
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
            </Box>
          }
          sx={{
            mb: {
              xs: 3,
              md: 3,
            },
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
                    <TableToolbar filters={filters} dateError={dateError} onFilters={handleFilters} />
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
        </Card>
      </Container>

    </>
  )
}

export default AppDataReportListView
