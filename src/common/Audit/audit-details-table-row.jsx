import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


// ----------------------------------------------------------------------

export default function AuditDetailsTableRow({
    row,
    key
}) {

    return (
        <>
            <TableRow key={key} hover>
                <TableCell>
                    {row?.EditedFieldValue}
                </TableCell>
                <TableCell>
                    {row?.oldvalue}
                </TableCell>
                <TableCell>
                    {row?.newvalue}
                </TableCell>
            </TableRow>
        </>
    );
}

AuditDetailsTableRow.propTypes = {
    row: PropTypes.object,
};
