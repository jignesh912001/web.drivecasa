import { Box, Stack } from '@mui/system';
import PropTypes from 'prop-types';
import { formatToUSCurrency } from 'src/common/Common';
import Label from 'src/components/label';
import { fDate, fDateTime, fTimestamp } from 'src/utils/format-time';



export function RenderCellName({ params }) {
  return <Box
    sx={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
    }}
  >
    {params.row?.customerFirstName + ' ' + params.row?.customerLastName}
  </Box>;
}

RenderCellName.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

// -----------------------------------------------------------------

export function RenderCellEstimateDate({ params }) {
  return <Stack sx={{ py: 1.5 }}>{fDateTime(params?.row?.estimateDateUtc)}</Stack>;
}

RenderCellEstimateDate.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

// -----------------------------------------------------------------


export function RenderCellTicketCostOfGoodsSubtotal({ params }) {
  const value = params?.row?.ticketCostOfGoodsSubtotal;
  if (value === 0) {
    return null;
  }
  return <Stack sx={{ py: 1.5 }}>{`${formatToUSCurrency(value)}`}</Stack>;
}

RenderCellTicketCostOfGoodsSubtotal.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

// -----------------------------------------------------------------

// 1. RenderCell for ticketDiscountAmount
export function RenderCellTicketDiscountAmount({ params }) {
  const value = params?.row?.ticketDiscountAmount;

  if (value === 0) return null;

  return <Stack sx={{ py: 1.5 }}>{`${formatToUSCurrency(value)}`}</Stack>;
}

RenderCellTicketDiscountAmount.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// ----------------------------------------------------------------


// 2. RenderCell for ticketDiscount
export function RenderCellTicketDiscount({ params }) {
  const value = params?.row?.ticketDiscount;

  if (value === 0) return null;

  return <Stack sx={{ py: 1.5 }}>{`${formatToUSCurrency(value)}`}</Stack>;
}

RenderCellTicketDiscount.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// ----------------------------------------------------------------


// 2. RenderCell for ticketDiscount
export function RenderCellTicketDiscountPercent({ params }) {
  const value = params?.row?.ticketDiscountPercent;

  if (value === 0) return null;

  return <Stack sx={{ py: 1.5 }}>{value}</Stack>;
}

RenderCellTicketDiscountPercent.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// 3. RenderCell for ticketPartDiscountSubtotal
export function RenderCellTicketPartDiscountSubtotal({ params }) {
  const value = params?.row?.ticketPartDiscountSubtotal;

  if (value === 0) return null;

  return <Stack sx={{ py: 1.5 }}>{`${formatToUSCurrency(value)}`}</Stack>;
}

RenderCellTicketPartDiscountSubtotal.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// 4. RenderCell for ticketLaborDiscountSubtotal
export function RenderCellTicketLaborDiscountSubtotal({ params }) {
  const value = params?.row?.ticketLaborDiscountSubtotal;

  if (value === 0) return null;

  return <Stack sx={{ py: 1.5 }}>{`${formatToUSCurrency(value)}`}</Stack>;
}

RenderCellTicketLaborDiscountSubtotal.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// 5. RenderCell for mileageIn
export function RenderCellMileageIn({ params }) {
  const value = params?.row?.mileageln;

  // If the value is 0, return null (do not display anything)
  if (value === 0) return null;

  return <Stack sx={{ py: 1.5 }}>{value}</Stack>;
}

RenderCellMileageIn.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------

// 6. RenderCell for mileageOut
export function RenderCellMileageOut({ params }) {
  const value = params?.row?.mileageOut;

  // If the value is 0, return null (do not display anything)
  if (value === 0) return null;

  return <Stack sx={{ py: 1.5 }}>{value}</Stack>;
}

RenderCellMileageOut.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------

export function RenderCellPartSubtotal({ params }) {
  const value = params?.row?.partSubtotal;

  if (value === 0) {
    return null;
  }

  return <Stack sx={{ py: 1.5 }}>{`${formatToUSCurrency(value)}`}</Stack>;
}

RenderCellPartSubtotal.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


export function RenderCellLaborSubtotal({ params }) {
  const value = params?.row?.laborSubtotal;

  if (value === 0) {
    return null;
  }

  return <Stack sx={{ py: 1.5 }}>{`${formatToUSCurrency(value)}`}</Stack>;
}

RenderCellLaborSubtotal.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};


// -----------------------------------------------------------------

export function RenderCellPartAndLaborSubtotal({ params }) {
  const value = params?.row?.partAndLaborSubtotal;

  if (value === 0) {
    return null;
  }

  return <Stack sx={{ py: 1.5 }}>{`${formatToUSCurrency(value)}`}</Stack>;
}

RenderCellPartAndLaborSubtotal.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for shopPartTax
export function RenderCellShopPartTax({ params }) {
  const value = params?.row?.shopPartTax;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellShopPartTax.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for shopLaborTax
export function RenderCellShopLaborTax({ params }) {
  const value = params?.row?.shopLaborTax;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellShopLaborTax.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for maxShopFeelnDollars
export function RenderCellMaxShopFeelnDollars({ params }) {
  const value = params?.row?.maxShopFeelnDollars;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellMaxShopFeelnDollars.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for partDiscountSubtotal
export function RenderCellPartDiscountSubtotal({ params }) {
  const value = params?.row?.partDiscountSubtotal;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellPartDiscountSubtotal.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for laborDiscountSubtotal
export function RenderCellLaborDiscountSubtotal({ params }) {
  const value = params?.row?.laborDiscountSubtotal;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellLaborDiscountSubtotal.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for discountedPartSubtotal
export function RenderCellDiscountedPartSubtotal({ params }) {
  const value = params?.row?.discountedPartSubtotal;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellDiscountedPartSubtotal.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for discountedLaborSubtotal
export function RenderCellDiscountedLaborSubtotal({ params }) {
  const value = params?.row?.discountedLaborSubtotal;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellDiscountedLaborSubtotal.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for discountedPartAndLaborSubtotal
export function RenderCellDiscountedPartAndLaborSubtotal({ params }) {
  const value = params?.row?.discountedPartAndLaborSubtotal;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellDiscountedPartAndLaborSubtotal.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for discountedPartSubtotal2
export function RenderCellDiscountedPartSubtotal2({ params }) {
  const value = params?.row?.discountedPartSubtotal2;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellDiscountedPartSubtotal2.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for discountedLaborSubtotal2
export function RenderCellDiscountedLaborSubtotal2({ params }) {
  const value = params?.row?.discountedLaborSubtotal2;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellDiscountedLaborSubtotal2.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for discountedPartAndLaborSubtotal2
export function RenderCellDiscountedPartAndLaborSubtotal2({ params }) {
  const value = params?.row?.discountedPartAndLaborSubtotal2;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellDiscountedPartAndLaborSubtotal2.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------



// RenderCell for suggestedShopFee
export function RenderCellSuggestedShopFee({ params }) {
  const value = params?.row?.suggestedShopFee;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellSuggestedShopFee.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for shopFee
export function RenderCellShopFee({ params }) {
  const value = params?.row?.shopFee;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellShopFee.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for suggestedDisposalFee
export function RenderCellSuggestedDisposalFee({ params }) {
  const value = params?.row?.suggestedDisposalFee;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellSuggestedDisposalFee.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for disposalFee
export function RenderCellDisposalFee({ params }) {
  const value = params?.row?.disposalFee;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellDisposalFee.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for freight
export function RenderCellFreight({ params }) {
  const value = params?.row?.freight;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellFreight.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for towing
export function RenderCellTowing({ params }) {
  const value = params?.row?.towing;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellTowing.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for sublet
export function RenderCellSublet({ params }) {
  const value = params?.row?.sublet;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellSublet.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for deposit
export function RenderCellDeposit({ params }) {
  const value = params?.row?.deposit;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellDeposit.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for tax
export function RenderCellTax({ params }) {
  const value = params?.row?.tax;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellTax.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for grossSales
export function RenderCellGrossSales({ params }) {
  const value = params?.row?.grossSales;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellGrossSales.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for netSales
export function RenderCellNetSales({ params }) {
  const value = params?.row?.netSales;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellNetSales.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for total
export function RenderCellTotal({ params }) {
  const value = params?.row?.total;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellTotal.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for serviceFee
export function RenderCellServiceFee({ params }) {
  const value = params?.row?.serviceFee;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellServiceFee.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for advertisingFee
export function RenderCellAdvertisingFee({ params }) {
  const value = params?.row?.advertisingFee;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellAdvertisingFee.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for advertisingFee
export function RenderCellOtherCharges({ params }) {
  const value = params?.row?.otherCharges;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellOtherCharges.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


export function RenderCellGiftCertificate({ params }) {
  const value = params?.row?.giftCertificate;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{value}</Stack>;
}

RenderCellGiftCertificate.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

// -----------------------------------------------------------------


export function RenderCellAdPrepFee({ params }) {
  const value = params?.row?.adPrepFee;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{value}</Stack>;
}

RenderCellAdPrepFee.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};


// RenderCell for advertisingFee
export function RenderCellRhwAmount({ params }) {
  const value = params?.row?.advertisingFee;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellRhwAmount.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------


// RenderCell for shopRhwTax
export function RenderCellShopRhwTax({ params }) {
  const value = params?.row?.shopRhwTax;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellShopRhwTax.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// RenderCell for tireFee
export function RenderCellTireFee({ params }) {
  const value = params?.row?.tireFee;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellTireFee.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// RenderCell for partCouponSubtotal
export function RenderCellPartCouponSubtotal({ params }) {
  const value = params?.row?.partCouponSubtotal;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellPartCouponSubtotal.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// RenderCell for laborCouponSubtotal
export function RenderCellLaborCouponSubtotal({ params }) {
  const value = params?.row?.laborCouponSubtotal;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellLaborCouponSubtotal.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// RenderCell for ticketCouponPartSubtotal2
export function RenderCellTicketCouponPartSubtotal2({ params }) {
  const value = params?.row?.ticketCouponPartSubtotal2;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellTicketCouponPartSubtotal2.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// RenderCell for ticketCouponLaborSubtotal2
export function RenderCellTicketCouponLaborSubtotal2({ params }) {
  const value = params?.row?.ticketCouponLaborSubtotal2;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellTicketCouponLaborSubtotal2.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// RenderCell for ticketCouponSubtotal
export function RenderCellTicketCouponSubtotal({ params }) {
  const value = params?.row?.ticketCouponSubtotal;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellTicketCouponSubtotal.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// RenderCell for ticketCouponLaborAmount
export function RenderCellTicketCouponLaborAmount({ params }) {
  const value = params?.row?.ticketCouponLaborAmount;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellTicketCouponLaborAmount.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// RenderCell for ticketCouponPartAmount
export function RenderCellTicketCouponPartAmount({ params }) {
  const value = params?.row?.ticketCouponPartAmount;
  if (value === 0) return null;
  return <Stack sx={{ py: 1.5 }}>{formatToUSCurrency(value)}</Stack>;
}

RenderCellTicketCouponPartAmount.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object.isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------
