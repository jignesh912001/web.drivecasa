import { Box, Stack } from '@mui/system';
import PropTypes from 'prop-types';
import { formatDateToYYYYMMDD, formatToUSCurrency } from 'src/common/Common';
import Label from 'src/components/label';

export function RenderCellClassDocNumber({ params }) {
  return <Box
    sx={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
    }}
  >
    {params.row.docNumber}
  </Box>;
}

RenderCellClassDocNumber.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

export function RenderCellName({ params }) {
  return <Box
    sx={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
    }}
  >
    {params.row.name}
  </Box>;
}

RenderCellName.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};


export function RenderCellIncidentDateTime({ params }) {
  return <Box
    sx={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
    }}
  >
    {formatDateToYYYYMMDD(params.row.date)}

  </Box>;
}

RenderCellIncidentDateTime.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};


export function RenderCellClass({ params }) {
  return <Box
    sx={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
    }}
  >
    {params.row.class}

  </Box>;
}

RenderCellClass.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};


export function RenderCellAccount({ params }) {
  return <Box
    sx={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
    }}
  >
    {params.row.account}

  </Box>;
}

RenderCellAccount.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

export function RenderCellType({ params }) {
  return <Box
    sx={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
    }}
  >
    {params.row.type}

  </Box>;
}

RenderCellType.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

export function RenderCellAmount({ params }) {
  return <Box
    sx={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
    }}
  >
   {`${formatToUSCurrency(params.row.amount)}`}
  </Box>;
}

RenderCellAmount.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};



export function RenderCellDescription({ params }) {
  return <Box
    sx={{
      whiteSpace: 'wrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
    }}
  >
    {params.row.description}
  </Box>;
}

RenderCellDescription.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};


export function RenderCellStatus({ params }) {
  return <Stack sx={{ py: 1.5 }}>
    <Label
      variant="soft"
      color={
        ('Approved' && 'success') ||
        (params?.row?.Status == 'Inactive' && 'orange') ||
        'default'
      }
    >
      Approved
    </Label></Stack>;
}

RenderCellStatus.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};
