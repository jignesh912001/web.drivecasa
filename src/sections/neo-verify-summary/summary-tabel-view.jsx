import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Typography, Divider, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import Scrollbar from "src/components/scrollbar";
import { useTable } from "src/components/table";

const TableView = ({ neoAppDataSummaryPercents }) => {
  const table = useTable();


  return (
    <Box sx={{ width: '100%' }}>
      <Scrollbar>
        <TableContainer component={Paper}>

          <Table size={table.dense ? 'small' : 'small'} >
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                {neoAppDataSummaryPercents.map((column, i) => (
                  <TableCell key={i}>{column.monthName}</TableCell>
                ))}
                {/* <TableCell colSpan={neoAppDataSummaryPercents.length} align="center">Action</TableCell> */}
              </TableRow>
            </TableHead>

            {/* ------------ Book To  Look ----------- */}
            <TableBody>
              <TableCell sx={{ fontWeight: 'bold' }}>Book To Look</TableCell>
              {neoAppDataSummaryPercents.map((row, i) => (
                <TableCell  key={i}>{row.bookToLookPercentage} %</TableCell>
              ))}
              {/* <TableCell colSpan={neoAppDataSummaryPercents.length} align="right">
                <Button variant="soft" size="sm" startIcon={<Iconify icon="eva:cloud-download-fill" />}>Download</Button>
              </TableCell> */}
            </TableBody>

            {/* ------------ Book To  Approved ----------- */}
            <TableBody>
              <TableCell sx={{ fontWeight: 'bold' }}>Book To Approved</TableCell>
              {neoAppDataSummaryPercents.map((row, i) => (
                <TableCell  key={i}>{row.bookToApprovedPercentage} %</TableCell>
              ))}
              {/* <TableCell colSpan={neoAppDataSummaryPercents.length} align="right">
                <Button variant="soft" size="sm" startIcon={<Iconify icon="eva:cloud-download-fill" />}>Download</Button>
              </TableCell> */}
            </TableBody>

            {/* ------------ Approved ----------- */}
            <TableBody>
              <TableCell sx={{ fontWeight: 'bold' }}>Approved</TableCell>
              {neoAppDataSummaryPercents.map((row, i) => (
                <TableCell  key={i}>{row.approvedPercentage} %</TableCell>
              ))}
              {/* <TableCell colSpan={neoAppDataSummaryPercents.length} align="right">
                <Button variant="soft" size="sm" startIcon={<Iconify icon="eva:cloud-download-fill" />}>Download</Button>
              </TableCell> */}
            </TableBody>

          </Table>

        </TableContainer>
      </Scrollbar>
    </Box>
  );
}

export default TableView;
