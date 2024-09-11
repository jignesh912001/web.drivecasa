import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { fDate } from 'src/utils/format-time';
import Label from 'src/components/label';
import { Checkbox, ListItemText, Tooltip } from '@mui/material';
import moment from 'moment';
import Iconify from 'src/components/iconify';
import { Stack } from '@mui/system';
import { useState } from 'react';
import { GetDetailsAudit } from 'src/api/Audit';


// ----------------------------------------------------------------------

export default function AuditTableRow({
    row,
    setHistoryDetails,
    setOpenDialog,
    tableName
}) {

    const handleClick = async () => {
        const Params = {
            ID: row?.id,
            AuditID: row?.Auditid,
            tableName: tableName,
        }
        const { data } = await GetDetailsAudit(Params);
        setHistoryDetails(data)
        setOpenDialog(true)
    }

    return (
        <>
            <TableRow key={row?.Historyid} hover>
                <TableCell
                >
                    <ListItemText
                        primary={row?.Action}
                        primaryTypographyProps={{ typography: 'subtitle1', noWrap: true }}
                        secondaryTypographyProps={{
                            mt: 0.5,
                            component: 'span',
                            typography: 'caption',
                        }}
                    />
                </TableCell>
                <TableCell>
                    {row?.user}
                </TableCell>
                <TableCell>
                    {moment(row?.DateTime).format('DD MMMM YYYY HH:mm:ss')}

                </TableCell>
                <TableCell align='center' sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    {row?.Remarks}
                    {row?.Action !== "Insert" && (
                        <Stack sx={{ cursor: "pointer" }} onClick={handleClick}>
                            <Tooltip title="Show Audit Details">
                                <Iconify icon="ph:info-bold" width={30} height={30} />
                            </Tooltip>
                        </Stack>
                    )}
                </TableCell>
            </TableRow>
        </>
    );
}

AuditTableRow.propTypes = {
    row: PropTypes.object,
};
