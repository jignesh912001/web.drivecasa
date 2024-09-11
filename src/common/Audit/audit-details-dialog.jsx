import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Table, TableBody } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AuditHeadCustom from './audit-table-head';
import AuditDetailsTableRow from './audit-details-table-row';

const AuditDetailsDialog = ({ onClose, open, historyDetails }) => {
    let TABLE_HEAD = [
        { id: "fieldName", label: "Field Name" },
        { id: "old", label: "Old Value" },
        { id: "new", label: "New Value" }
    ];
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
                <DialogTitle>Audit Details</DialogTitle>

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
                                {historyDetails?.map((item, index) => {
                                    return (
                                        <AuditDetailsTableRow row={item} key={index} />
                                    )
                                })}
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
        </>
    )
}

export default AuditDetailsDialog