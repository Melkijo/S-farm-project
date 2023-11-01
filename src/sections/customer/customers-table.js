import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
    Avatar,
    Box,
    Button,
    Card,
    Checkbox,
    Grid,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { getInitials } from 'src/utils/get-initials';

export const CustomersTable = (props) => {
    const {
        count = 0,
        items = [],
        onDeselectAll,
        onDeselectOne,
        onPageChange = () => { },
        onRowsPerPageChange,
        onSelectAll,
        onSelectOne,
        page = 0,
        rowsPerPage = 0,
        selected = []
    } = props;

    const selectedSome = (selected.length > 0) && (selected.length < items.length);
    const selectedAll = (items.length > 0) && (selected.length === items.length);

    return (
        <Card>
            <Scrollbar>
                <Box sx={{ minWidth: 800 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={selectedAll}
                                        indeterminate={selectedSome}
                                        onChange={(event) => {
                                            if (event.target.checked) {
                                                onSelectAll?.();
                                            } else {
                                                onDeselectAll?.();
                                            }
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    fertilizer
                                </TableCell>
                                <TableCell>
                                    Location
                                </TableCell>
                                <TableCell>
                                    Date planted
                                </TableCell>
                                <TableCell>
                                    Quantity
                                </TableCell>
                                <TableCell>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((customer) => {
                                const isSelected = selected.includes(customer.id);
                                const createdAt = format(customer.createdAt, 'dd/MM/yyyy');

                                return (
                                    <TableRow
                                        hover
                                        key={customer.id}
                                        selected={isSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={isSelected}
                                                onChange={(event) => {
                                                    if (event.target.checked) {
                                                        onSelectOne?.(customer.id);
                                                    } else {
                                                        onDeselectOne?.(customer.id);
                                                    }
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Stack
                                                alignItems="center"
                                                direction="row"
                                                spacing={2}
                                            >
                                                {/* <Avatar src={customer.avatar}>
                                                    {getInitials(customer.name)}
                                                </Avatar> */}
                                                <Typography variant="subtitle2">
                                                    {customer.name}
                                                </Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell>
                                            {customer.email}
                                        </TableCell>
                                        <TableCell>
                                            {customer.location}
                                            {/* {customer.address.city}, {customer.address.state}, {customer.address.country} */}
                                        </TableCell>
                                        <TableCell>
                                            {customer.planted}
                                        </TableCell>
                                        <TableCell>
                                            {customer.quantity}
                                        </TableCell>
                                        <TableCell>
                                            <Grid container
                                                spacing={2}>
                                                <Grid item xs={12}>
                                                    <Button
                                                        color="primary"
                                                        size="small"
                                                        variant="outlined"
                                                    >
                                                        View
                                                    </Button>
                                                </Grid>
                                                <Grid item>
                                                    <Button
                                                        color="primary"
                                                        size="small"
                                                        variant="outlined"
                                                    >
                                                        Edit
                                                    </Button>
                                                </Grid>
                                                <Grid item>
                                                    <Button
                                                        color="primary"
                                                        size="small"
                                                        variant="outlined"
                                                    >
                                                        Remove
                                                    </Button>
                                                </Grid>
                                                {/* add view button */}

                                            </Grid>


                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Box>
            </Scrollbar>
            <TablePagination
                component="div"
                count={count}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    );
};

CustomersTable.propTypes = {
    count: PropTypes.number,
    items: PropTypes.array,
    onDeselectAll: PropTypes.func,
    onDeselectOne: PropTypes.func,
    onPageChange: PropTypes.func,
    onRowsPerPageChange: PropTypes.func,
    onSelectAll: PropTypes.func,
    onSelectOne: PropTypes.func,
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
    selected: PropTypes.array
};
