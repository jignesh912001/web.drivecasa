import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { RenderCellApplicationDate, RenderCellApprovalStatus, RenderCellCombAppSoldDate, RenderCellCompletionTime, RenderCellDealership, RenderCellDownpayment, RenderCellEmail, RenderCellIncome, RenderCellMonthlyPayment, RenderCellName, RenderCellNumber, RenderCellSoldDate, RenderCellStatus } from "../neo-verify-appData-report/report-table-row"
import Iconify from "src/components/iconify";
import * as XLSX from 'xlsx';
import { enqueueSnackbar } from "notistack";

const PreviewItems = ({
  openFile,
  loading,
  handleClose,
  totalCount,
  tableDataExcel,
}) => {

  const columns = [
    {
      field: 'appFirstName',
      headerName: 'FirstName',
      flex: 1,
      minWidth: 180,
      editable: false,
      hideable: false,
      filterable: false,
      // renderCell: (params) => <RenderCellName params={params} />,
    },
    {
      field: 'appLastName',
      headerName: 'LastName',
      flex: 1,
      minWidth: 180,
      editable: false,
      hideable: false,
      filterable: false,
      // renderCell: (params) => <RenderCellName params={params} />,
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
      // renderCell: (params) => <RenderCellApprovalStatus params={params} />,
    },

    {
      field: 'dealership',
      headerName: 'Dealership',
      flex: 1,
      minWidth: 120,
      filterable: false,
      disableColumnMenu: true,
      // renderCell: (params) => <RenderCellDealership params={params} />,
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


  const handleDownload = () => {
    const headers = columns.map(col => col.headerName);
    const data = tableDataExcel.map(row =>
      columns.map(col => row[col.field])
    );
    const worksheetData = [headers, ...data];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'Monthly-report.xlsx');
    enqueueSnackbar("Download successful.");
    handleClose(false)
  };


  return (
    <>
      <Dialog
        fullWidth
        open={openFile}
        onClose={handleClose}
        PaperProps={{
          sx: { maxWidth: '100%', maxHeight: 800 },
        }}
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Preview</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleDownload}
                startIcon={<Iconify icon="eva:cloud-download-fill" />}  // Assuming you have an icon imported
              >
                Download
              </Button>

              <IconButton variant="solid" sx={{fontWeight:"900"}}  onClick={handleClose}>
                <Iconify icon="eva:close-outline" />
              </IconButton>

            </Box>

          </Box>
        </DialogTitle>

        <DialogContent>
          <DataGrid
            rowCount={totalCount}
            rows={tableDataExcel}
            columns={columns}
            loading={loading}
            pageSizeOptions={[]}
            hideFooterPagination={true}
            stickyHeader={true}
            disableColumnMenu
          />

        </DialogContent>
        <Stack sx={{ p: 2, display: "flex", justifyContent: "flex-end", flexDirection: "row" }}>
          <Typography variant='body2' sx={{ pr: 2 }}>1–0 of {totalCount}</Typography>
        </Stack>
      </Dialog>
    </>
  )
}


export default PreviewItems
