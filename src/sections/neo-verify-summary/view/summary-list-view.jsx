import { useCallback, useEffect, useState } from "react"
import { Box, Button, Card, Container, Stack, Tab, Tabs, tabsClasses, Typography } from "@mui/material"
import CustomBreadcrumbs from "src/components/custom-breadcrumbs/custom-breadcrumbs"
import { paths } from "src/routes/paths"
import { isAfter } from 'src/utils/format-time';
import { formatDateToYYYYMMDD, getDefaultLastOneYear, getDefaultStartDate } from "src/common/Common"
import { GetAllOmniqueTicketDetailReports } from "src/api/ticket-report"
import Iconify from "src/components/iconify"
import { useSettingsContext } from "src/components/settings"
import FileDataActivity from "src/sections/file-manager/file-data-activity";
import { useTheme } from "@emotion/react";
import { GetAllAppDataReports, GetAllAppDataSummary } from "src/api/neoVerify";
import TableToolbar from "../summary-table-toolbar";
import EmptyContent from "src/components/empty-content/empty-content";
import TableView from "../summary-tabel-view";
import { LoadingScreen } from "src/components/loading-screen";
import PreviewItems from "../summary-export-view-popup";
import LoadingButton from '@mui/lab/LoadingButton';



const defaultFilters = {
  search: '',
  startDate: getDefaultLastOneYear(), // Set startDate to one month before the current date
  endDate: new Date(), // Set endDate to the current date
};



const SummaryListView = () => {
  const theme = useTheme();

  const settings = useSettingsContext();

  const [loading, setLoading] = useState(true)
  const [loadingExcel, setLoadingExcel] = useState(false)   // excel loader

  const [filters, setFilters] = useState(defaultFilters);
  const dateError = isAfter(filters.startDate, filters.endDate);
  const [tableData, setTableData] = useState([]);
  const [neoAppDataSummaryPercents, setNeoAppDataSummaryPercents] = useState(Array);

  const [openFile, setOpenFile] = useState(false);
  const [tableDataExcel, setTableDataExcel] = useState([]);
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

    const { result, isLoading } = await GetAllAppDataSummary(payload);
    const newTableData = result?.neoAppDataSummaries?.map((item, index) => ({
      ...item,
      id: index
    })) || [];

    setNeoAppDataSummaryPercents(result?.neoAppDataSummaryPercents)
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

  const formattedLabels = tableData?.map(item => [
    item.monthYear,
    `Total : ${item.totalApplications}`
  ]);

  const chartConfig = {
    labels: formattedLabels,
    colors: [
      theme.palette.primary.main,
      theme.palette.error.main,
      theme.palette.warning.main,
      theme.palette.text.disabled,
    ],
    series: [
      {
        type: 'Month',
        data: [
          { name: 'Funded Sold', data: tableData.map(item => item.appsFundedSold) },
          { name: 'Incomplete Applications', data: tableData.map(item => item.incompleteApplications) },
          { name: 'Approved Not Sold', data: tableData.map(item => item.appsApprovedNotSold) },
          { name: 'Declined', data: tableData.map(item => item.appsDeclined) },
        ],
        options: {}
      },
    ],
  };

  const handleClose = () => {
    setOpenFile(!open)
  }

  const handleExportViwe = async (id) => {
    try {
      setLoadingExcel(true)
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
      setOpenFile(true)
      setTotalCount(newTableData?.length)
      setTableDataExcel(newTableData);
      setLoadingExcel(isLoading)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {loading ?
        <LoadingScreen />
        :
        <Container
          maxWidth={false}
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >

          <CustomBreadcrumbs
            heading="Monthly report based on new deals created"
            links={[
              { name: 'Dashboard', href: paths.dashboard.root },
              { name: 'Monthly report based on new deals created' },
            ]}
            action={
              <Box display="flex" gap={2}>
                <LoadingButton
                  variant="contained"
                  startIcon={<Iconify icon="solar:export-bold" />}
                  onClick={handleExportViwe}
                  loading={loadingExcel}
                >
                  Export
                </LoadingButton>
              </Box>
            }
            sx={{
              mb: {
                xs: 3,
                md: 3,
              },
            }}
          />

          <TableToolbar filters={filters} dateError={dateError} onFilters={handleFilters} />

          {tableData.length > 0 ?
            <FileDataActivity title="" chart={chartConfig} />
            :
            <EmptyContent title="No Data" />
          }

          {tableData && neoAppDataSummaryPercents.length > 0 &&
            <Card
              sx={{
                mb: 3,
                marginTop: "30px"
              }}
            >
              <TableView neoAppDataSummaryPercents={neoAppDataSummaryPercents} />
            </Card>
          }

          {/* model view export file */}
          {openFile && (<PreviewItems loading={loadingExcel} openFile={openFile} handleClose={handleClose} totalCount={totalCount} tableDataExcel={tableDataExcel} />)}

        </Container>
      }
    </>
  )
}

export default SummaryListView
