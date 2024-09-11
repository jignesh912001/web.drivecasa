import PropTypes from 'prop-types';
import { useCallback } from 'react';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { formHelperTextClasses } from '@mui/material/FormHelperText';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

// ----------------------------------------------------------------------

export default function TableToolbar({ filters, onFilters, dateError, GetAllCompanyData, selectCompany, setSelectCompany }) {

  const handleselectCompany = useCallback((e) => {
    setSelectCompany(e.target.value)
    onFilters('companyId', e.target.value);
  },
    [onFilters]
  );

  const handleFilterStartDate = useCallback(
    (newValue) => {
      onFilters('startDate', newValue);
    },
    [onFilters]
  );

  const handleFilterEndDate = useCallback(
    (newValue) => {
      onFilters('endDate', newValue);
    },
    [onFilters]
  );

  return (
    <>
      {/* <Stack
        spacing={2}
        alignItems={{ xs: 'flex-end', md: 'center' }}
        direction={{
          xs: 'column',
          md: 'row',
        }}
        sx={{
          p: 2.5,
          pr: { xs: 2.5, md: 1 },
        }}
      > */}
      <DatePicker
        label="Start date"
        value={filters.startDate}
        onChange={handleFilterStartDate}
        slotProps={{
          textField: {
            fullWidth: true,
          },
        }}
        sx={{
          maxWidth: { md: 300 },
        }}
      />

      <DatePicker
        label="End date"
        value={filters.endDate}
        onChange={handleFilterEndDate}
        slotProps={{
          textField: {
            fullWidth: true,
            error: dateError,
            // helperText: dateError && 'End date must be greater than start date',
          },
        }}
        sx={{
          maxWidth: { md: 300 },
          [`& .${formHelperTextClasses.root}`]: {
            position: { md: 'absolute' },
            bottom: { md: -40 },
          },
        }}
      />


      <FormControl sx={{ maxWidth: { md: 240 }, width: "100%" }}>
        <InputLabel id="demo-simple-select-helper-label" shrink={!!selectCompany}>Company Name</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectCompany}
          label="Company Name"
          onChange={handleselectCompany}
        >
          {GetAllCompanyData?.map((option) => (
            <MenuItem key={option.companyId} value={option.companyId}>
              {option.companyName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* </Stack> */}
    </>
  );
}

TableToolbar.propTypes = {
  dateError: PropTypes.bool,
  filters: PropTypes.object,
  onFilters: PropTypes.func,
};
