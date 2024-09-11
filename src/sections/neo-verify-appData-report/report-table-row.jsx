import { Box, Stack } from '@mui/system';
import PropTypes from 'prop-types';
import { formatToUSCurrency } from 'src/common/Common';
import Label from 'src/components/label';
import { fDate, fTimestamp } from 'src/utils/format-time';



export function RenderCellName({ params }) {
  return <Box
    sx={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
    }}
  >
    {params.row?.appFirstName + ' ' + params.row?.appLastName}
  </Box>;
}

RenderCellName.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

// -----------------------------------------------------------------


export function RenderCellEmail({ params }) {
  return <Box
    sx={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
    }}
  >
    {params.row?.email}
  </Box>;
}

RenderCellEmail.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

// -----------------------------------------------------------------

export function RenderCellNumber({ params }) {
  return <Box
    sx={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
    }}
  >
    {params.row?.cellNumber}
  </Box>;
}

RenderCellNumber.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

// -----------------------------------------------------------------


export function RenderCellApplicationDate({ params }) {
  return <Stack sx={{ py: 1.5 }}>{fDate(params?.row?.applicationDate)}</Stack>;
}

RenderCellApplicationDate.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};
// -----------------------------------------------------------------

export function RenderCellSoldDate({ params }) {
  return <Stack sx={{ py: 1.5 }}>{fDate(params?.row?.soldDate)}</Stack>;
}

RenderCellSoldDate.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

// -----------------------------------------------------------------

export function RenderCellCombAppSoldDate({ params }) {
  return <Stack sx={{ py: 1.5 }}>{fDate(params?.row?.combAppSoldDate)}</Stack>;
}

RenderCellCombAppSoldDate.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

// -----------------------------------------------------------------

export function RenderCellCompletionTime({ params }) {
  return <Stack sx={{ py: 1.5 }}>{fTimestamp(params?.row?.completionTime)}</Stack>;
}

RenderCellCompletionTime.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

// -----------------------------------------------------------------

export function RenderCellDealership({ params }) {
  return <Box
    sx={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
    }}
  >
    {params.row?.dealership}
  </Box>;
}

RenderCellDealership.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};



// -----------------------------------------------------------------

export function RenderCellIncome({ params }) {
  return <Stack sx={{ py: 1.5 }}>{`${formatToUSCurrency(params.row.income)}`}</Stack>;
}

RenderCellIncome.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

// -----------------------------------------------------------------

export function RenderCellDownpayment({ params }) {
  return <Stack sx={{ py: 1.5 }}>{`${formatToUSCurrency(params.row.income)}`}</Stack>;
}

RenderCellDownpayment.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

// -----------------------------------------------------------------


export function RenderCellMonthlyPayment({ params }) {
  return <Stack>
    {`${formatToUSCurrency(params.row.monthlyPayment)}`}
  </Stack>;
}

RenderCellMonthlyPayment.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

// -----------------------------------------------------------------


export function RenderCellApprovalStatus({ params }) {
  return <Stack sx={{ py: 1.5 }}>
    <Label
      variant="soft"
      color={
        (params?.row?.type == 'Online' && 'success') ||
        (params?.row?.type == 'Pre-Approval' && 'warning') ||
        (params?.row?.type == 'Lead' && 'info') ||
        (params?.row?.type == 'Normal' && 'draft') ||
        'default'
      }
    >
      {params?.row?.type}
    </Label>
  </Stack>;
}

RenderCellApprovalStatus.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};



// -error----------------------------------------------------------------


export function RenderCellStatus({ params }) {
  return <Stack sx={{ py: 1.5 }}>
    {params?.row?.status}
  </Stack>;
}

RenderCellStatus.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

