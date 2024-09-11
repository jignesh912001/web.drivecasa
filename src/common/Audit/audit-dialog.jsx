import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Table, TableBody } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import AuditHeadCustom from './audit-table-head';
import AuditTableRow from './audit-table-row';
import AuditDetailsDialog from './audit-details-dialog';

const AuditDialog = ({ open, onClose, historyData, selectData, tableName, headerName }) => {

    let TABLE_HEAD = [
        { id: "action", label: "Action" },
        { id: "user", label: "User" },
        { id: "date", label: "Date & Time" },
        { id: "actionDetails", label: "Action Details / Remarks" }
    ];

    const [openDialog, setOpenDialog] = useState(false)
    const [historyDetails, setHistoryDetails] = useState([])


    const handleClose = () => {
        setHistoryDetails([])
        setOpenDialog(!openDialog)
    }

    return (
        <>
            <Dialog
                fullWidth
                maxWidth={false}
                open={open}
                onClose={onClose}
                PaperProps={{
                    sx: { maxWidth: 650, maxHeight: 600 },
                }}
            >
                <DialogTitle>Audit ({headerName})</DialogTitle>

                <DialogContent>
                    <Box
                        rowGap={3}
                        columnGap={2}
                        display="grid"
                        gridTemplateColumns={{
                            xs: 'repeat(2, 1fr)',
                            sm: 'repeat(3, 1fr)',
                        }}
                        my={1}
                    >
                        <Table sx={{ minWidth: 600 }}>
                            <AuditHeadCustom
                                headLabel={TABLE_HEAD}
                            />

                            <TableBody>
                                {historyData
                                    ?.map((row) => (
                                        <AuditTableRow
                                            key={row.ModuleID}
                                            row={row}
                                            setHistoryDetails={setHistoryDetails}
                                            setOpenDialog={setOpenDialog}
                                            tableName={tableName}
                                        />
                                    ))}
                            </TableBody>
                        </Table>
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button variant="outlined" onClick={onClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            {openDialog && (
                <AuditDetailsDialog open={openDialog} onClose={handleClose} historyDetails={historyDetails} />
            )}
        </>
    )
}

export default AuditDialog
