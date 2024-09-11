import { useCallback, useEffect, useState } from "react"
import { Box, Button, Card, Container, Stack, Typography } from "@mui/material"
import CustomBreadcrumbs from "src/components/custom-breadcrumbs/custom-breadcrumbs"
import { paths } from "src/routes/paths"
import TableToolbar from "../omnique-ticket-report-table-toolbar"
import { isAfter } from 'src/utils/format-time';
import { formatDateToYYYYMMDD, getDefaultStartDate } from "src/common/Common"
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer } from '@mui/x-data-grid';
import EmptyContent from "src/components/empty-content/empty-content"
import { GetAllOmniqueTicketDetailReports } from "src/api/ticket-report"
import { RenderCellAdPrepFee, RenderCellAdvertisingFee, RenderCellDeposit, RenderCellDiscountedLaborSubtotal, RenderCellDiscountedLaborSubtotal2, RenderCellDiscountedPartAndLaborSubtotal, RenderCellDiscountedPartAndLaborSubtotal2, RenderCellDiscountedPartSubtotal, RenderCellDiscountedPartSubtotal2, RenderCellDisposalFee, RenderCellEstimateDate, RenderCellFreight, RenderCellGiftCertificate, RenderCellGrossSales, RenderCellLaborCouponSubtotal, RenderCellLaborDiscountSubtotal, RenderCellLaborSubtotal, RenderCellMaxShopFeelnDollars, RenderCellMileageIn, RenderCellMileageOut, RenderCellName, RenderCellNetSales, RenderCellOtherCharges, RenderCellPartAndLaborSubtotal, RenderCellPartCouponSubtotal, RenderCellPartDiscountSubtotal, RenderCellPartSubtotal, RenderCellRhwAmount, RenderCellServiceFee, RenderCellShopFee, RenderCellShopLaborTax, RenderCellShopPartTax, RenderCellShopRhwTax, RenderCellSublet, RenderCellSuggestedDisposalFee, RenderCellSuggestedShopFee, RenderCellTax, RenderCellTicketCostOfGoodsSubtotal, RenderCellTicketCouponLaborAmount, RenderCellTicketCouponLaborSubtotal2, RenderCellTicketCouponPartAmount, RenderCellTicketCouponPartSubtotal2, RenderCellTicketCouponSubtotal, RenderCellTicketDiscount, RenderCellTicketDiscountAmount, RenderCellTicketDiscountPercent, RenderCellTicketLaborDiscountSubtotal, RenderCellTicketPartDiscountSubtotal, RenderCellTireFee, RenderCellTotal, RenderCellTowing } from "../report-table-row"
import Iconify from "src/components/iconify"
import { useSettingsContext } from "src/components/settings"


const defaultFilters = {
  search: '',
  startDate: getDefaultStartDate(), // Set startDate to one month before the current date
  endDate: new Date(), // Set endDate to the current date
};

const OmniqueTicketListView = () => {
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

    const { result, isLoading } = await GetAllOmniqueTicketDetailReports(payload);
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
      field: 'customerFirstName',
      headerName: 'Customer Name',
      flex: 1,
      minWidth: 200,
      editable: false,
      hideable: false,
      filterable: false,
      renderCell: (params) => <RenderCellName params={params} />,
    },
    { field: 'companyID', headerName: 'Company ID', flex: 1, minWidth: 150, editable: false, },
    { field: 'shopNumber', headerName: 'Shop Number', flex: 1, minWidth: 150, editable: false, },
    { field: 'number', headerName: 'Number', flex: 1, minWidth: 150, editable: false, },
    {
      field: 'estimateDateUtc',
      headerName: 'Estimate Date',
      flex: 1, minWidth: 200,
      editable: false,

      renderCell: (params) => <RenderCellEstimateDate params={params} />,
    },

    { field: 'marketSourceName', headerName: 'Market Source', flex: 1, minWidth: 200, editable: false, },
    { field: 'vehicleVIN', headerName: 'Vehicle VIN', flex: 1, minWidth: 200, editable: false, },
    { field: 'vehicleOtherIDNumber', headerName: 'VehicleOtherID Number', flex: 1, minWidth: 200, editable: false, },

    { field: 'customerPurchaseOrderNumber', headerName: 'Purchase Order Number', flex: 1, minWidth: 200, editable: false, },
    { field: 'warrantyCodeName', headerName: 'Warranty Code Name', flex: 1, minWidth: 200, editable: false, },
    { field: 'ticketDiscountAmount', headerName: 'Ticket Discount Amount', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellTicketDiscountAmount params={params} /> },
    { field: 'ticketDiscountPercent', headerName: 'Ticket Discount Percent', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellTicketDiscountPercent params={params} /> },
    { field: 'ticketDiscount', headerName: 'Ticket Discount', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellTicketDiscount params={params} /> },
    { field: 'ticketPartDiscountSubtotal', headerName: 'Ticket Part Discount Subtotal', flex: 1, minWidth: 250, editable: false, renderCell: (params) => <RenderCellTicketPartDiscountSubtotal params={params} /> },
    { field: 'ticketLaborDiscountSubtotal', headerName: 'Ticket Labor Discount Subtotal', flex: 1, minWidth: 250, editable: false, renderCell: (params) => <RenderCellTicketLaborDiscountSubtotal params={params} /> },
    { field: 'ticketCostOfGoodsSubtotal', headerName: 'Ticket Cost of Goods Subtotal', flex: 1, minWidth: 250, editable: false, renderCell: (params) => <RenderCellTicketCostOfGoodsSubtotal params={params} /> },
    { field: 'taxExemptNumber', headerName: 'Tax Exempt Number', flex: 1, minWidth: 200, editable: false, },
    { field: 'mileageln', headerName: 'Mileage In', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellMileageIn params={params} /> },
    { field: 'mileageOut', headerName: 'Mileage Out', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellMileageOut params={params} /> },
    { field: 'partSubtotal', headerName: 'Part Subtotal', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellPartSubtotal params={params} /> },
    { field: 'laborSubtotal', headerName: 'Labor Subtotal', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellLaborSubtotal params={params} /> },
    { field: 'partAndLaborSubtotal', headerName: 'Part and Labor Subtotal', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellPartAndLaborSubtotal params={params} /> },

    { field: 'shopPartTax', headerName: 'Shop Part Tax', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellShopPartTax params={params} />, },
    { field: 'shopLaborTax', headerName: 'Shop Labor Tax', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellShopLaborTax params={params} />, },
    { field: 'maxShopFeelnDollars', headerName: 'Max Shop Fee in Dollars', flex: 1, minWidth: 250, editable: false, renderCell: (params) => <RenderCellMaxShopFeelnDollars params={params} />, },
    { field: 'partDiscountSubtotal', headerName: 'Part Discount Subtotal', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellPartDiscountSubtotal params={params} /> },
    { field: 'laborDiscountSubtotal', headerName: 'Labor Discount Subtotal', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellLaborDiscountSubtotal params={params} />, },
    { field: 'discountedPartSubtotal', headerName: 'Discounted Part Subtotal', flex: 1, minWidth: 250, editable: false, renderCell: (params) => <RenderCellDiscountedPartSubtotal params={params} />, },
    { field: 'discountedLaborSubtotal', headerName: 'Discounted Labor Subtotal', flex: 1, minWidth: 250, editable: false, renderCell: (params) => <RenderCellDiscountedLaborSubtotal params={params} /> },
    { field: 'discountedPartAndLaborSubtotal', headerName: 'Discounted Part and Labor Subtotal', flex: 1, minWidth: 300, editable: false, renderCell: (params) => <RenderCellDiscountedPartAndLaborSubtotal params={params} /> },
    { field: 'discountedPartSubtotal2', headerName: 'Discounted Part Subtotal 2', flex: 1, minWidth: 250, editable: false, renderCell: (params) => <RenderCellDiscountedPartSubtotal2 params={params} /> },
    { field: 'discountedLaborSubtotal2', headerName: 'Discounted Labor Subtotal 2', flex: 1, minWidth: 250, editable: false, renderCell: (params) => <RenderCellDiscountedLaborSubtotal2 params={params} /> },
    { field: 'discountedPartAndLaborSubtotal2', headerName: 'Discounted Part and Labor Subtotal 2', flex: 1, minWidth: 300, editable: false, renderCell: (params) => <RenderCellDiscountedPartAndLaborSubtotal2 params={params} /> },

    { field: 'suggestedShopFee', headerName: 'Suggested Shop Fee', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellSuggestedShopFee params={params} /> },
    { field: 'shopFee', headerName: 'Shop Fee', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellShopFee params={params} /> },
    { field: 'suggestedDisposalFee', headerName: 'Suggested Disposal Fee', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellSuggestedDisposalFee params={params} /> },
    { field: 'disposalFee', headerName: 'Disposal Fee', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellDisposalFee params={params} /> },
    { field: 'freight', headerName: 'Freight', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellFreight params={params} /> },
    { field: 'towing', headerName: 'Towing', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellTowing params={params} /> },
    { field: 'sublet', headerName: 'Sublet', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellSublet params={params} /> },
    { field: 'deposit', headerName: 'Deposit', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellDeposit params={params} /> },
    { field: 'giftCertificate', headerName: 'Gift Certificate', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellGiftCertificate params={params} /> },

    { field: 'tax', headerName: 'Tax', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellTax params={params} /> },
    { field: 'grossSales', headerName: 'Gross Sales', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellGrossSales params={params} /> },
    { field: 'netSales', headerName: 'Net Sales', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellNetSales params={params} /> },
    { field: 'total', headerName: 'Total', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellTotal params={params} /> },
    { field: 'serviceFee', headerName: 'Service Fee', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellServiceFee params={params} /> },
    { field: 'advertisingFee', headerName: 'Advertising Fee', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellAdvertisingFee params={params} /> },

    { field: 'rowVersion', headerName: 'Row Version', flex: 1, minWidth: 200, editable: false, },
    { field: 'defaultEmployeeD', headerName: 'Default Employee ID', flex: 1, minWidth: 200, editable: false, },
    { field: 'lastModifiedDateUtc', headerName: 'Last Modified Date', flex: 1, minWidth: 200, editable: false, },  // ------date-------------------------------------------------------- date
    { field: 'isShopFeeTaxed', headerName: 'Is Shop Fee Taxed', flex: 1, minWidth: 200, editable: false, },
    { field: 'ticketType', headerName: 'Ticket Type', flex: 1, minWidth: 150, editable: false, },
    { field: 'ticketLinkCompanyld', headerName: 'Ticket Link Company ID', flex: 1, minWidth: 250, editable: false, },
    { field: 'ticketLinkShopNumber', headerName: 'Ticket Link Shop Number', flex: 1, minWidth: 250, editable: false, },
    { field: 'ticketLinkTicketNumber', headerName: 'Ticket Link Ticket Number', flex: 1, minWidth: 250, editable: false, },
    { field: 'serviceAdvisorID', headerName: 'Service Advisor ID', flex: 1, minWidth: 200, editable: false, },
    { field: 'mileageUnitTypelD', headerName: 'Mileage Unit Type ID', flex: 1, minWidth: 200, editable: false, },
    { field: 'otherCharges', headerName: 'Other Charges', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellOtherCharges params={params} /> },
    { field: 'estimatedCompletionDateTime', headerName: 'Estimated Completion Date', flex: 1, minWidth: 250, editable: false, },
    { field: 'repairOrderStatusiD', headerName: 'Repair Order Status ID', flex: 1, minWidth: 250, editable: false, },
    { field: 'repairOrderLocationID', headerName: 'Repair Order Location ID', flex: 1, minWidth: 250, editable: false, },
    { field: 'adPrepFee', headerName: 'Ad Prep Fee', flex: 1, minWidth: 150, editable: false, renderCell: (params) => <RenderCellAdPrepFee params={params} /> },
    { field: 'defaultTicketLineltemTypelD', headerName: 'Default Ticket Line Item Type ID', flex: 1, minWidth: 300, editable: false, },
    { field: 'totalNumberOfTaxExemptItems', headerName: 'Total Tax Exempt Items', flex: 1, minWidth: 250, editable: false, },
    { field: 'originalInvoiceNumber', headerName: 'Original Invoice Number', flex: 1, minWidth: 250, editable: false, },
    { field: 'ticketStatus', headerName: 'Ticket Status', flex: 1, minWidth: 200, editable: false, },
    { field: 'vehicleMake', headerName: 'Vehicle Make', flex: 1, minWidth: 200, editable: false, },
    { field: 'vehicleModel', headerName: 'Vehicle Model', flex: 1, minWidth: 200, editable: false, },
    { field: 'vehicleYear', headerName: 'Vehicle Year', flex: 1, minWidth: 150, editable: false, },
    { field: 'vehicleOdometerReading', headerName: 'Vehicle Odometer', flex: 1, minWidth: 200, editable: false, },
    { field: 'subMarketSourceName', headerName: 'SubMarketSource Name', flex: 1, minWidth: 200, editable: false, },
    { field: 'roaComment', headerName: 'Roa Comment', flex: 1, minWidth: 200, editable: false, },
    { field: 'pricingLevelOverride', headerName: 'Pricing Level Override', flex: 1, minWidth: 200, editable: false, },
    { field: 'customerBusinessName', headerName: 'Customer Business Name', flex: 1, minWidth: 200, editable: false, },
    { field: 'rhwAmount', headerName: 'Rhw Amount', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellRhwAmount params={params} /> },
    { field: 'shopRhwTax', headerName: 'ShopRhwTax', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellShopRhwTax params={params} /> },
    { field: 'tireFee', headerName: 'Tire Fee', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellTireFee params={params} />, },
    { field: 'partCouponSubtotal', headerName: 'Part Coupon Subtotal', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellPartCouponSubtotal params={params} />, },
    { field: 'laborCouponSubtotal', headerName: 'Labor Coupon Subtotal', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellLaborCouponSubtotal params={params} />, },
    { field: 'ticketCouponPartSubtotal2', headerName: 'Ticket Coupon Part Subtotal 2', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellTicketCouponPartSubtotal2 params={params} />, },
    { field: 'ticketCouponLaborSubtotal2', headerName: 'Ticket Coupon Labor Subtotal 2', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellTicketCouponLaborSubtotal2 params={params} />, },
    { field: 'ticketCouponSubtotal', headerName: 'Ticket Coupon Subtotal', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellTicketCouponSubtotal params={params} />, },
    { field: 'ticketCouponLaborAmount', headerName: 'Ticket Coupon Labor Amount', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellTicketCouponLaborAmount params={params} />, },
    { field: 'ticketCouponPartAmount', headerName: 'Ticket Coupon Part Amount', flex: 1, minWidth: 200, editable: false, renderCell: (params) => <RenderCellTicketCouponPartAmount params={params} />, },
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
          heading="Ticket Report"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'Ticket Report' },
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

export default OmniqueTicketListView
