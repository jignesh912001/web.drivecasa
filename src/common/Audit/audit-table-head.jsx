import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function AuditHeadCustom({
    headLabel,
    sx,
}) {
    const theme = useTheme();

    return (
        <TableHead sx={sx} style={{ position: "sticky", top: "0", zIndex: "999" }}>
            <TableRow>

                {headLabel.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align || 'left'}
                        sx={{ width: 200, minWidth: headCell.minWidth, backgroundColor: theme.palette.primary.main, color: "common.white" }}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

AuditHeadCustom.propTypes = {
    sx: PropTypes.object,
    headLabel: PropTypes.array,
};
