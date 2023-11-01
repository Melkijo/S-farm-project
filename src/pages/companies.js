import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
    Box,
    Button,
    Container,
    Pagination,
    Stack,
    SvgIcon,
    Typography,
    Unstable_Grid2 as Grid,
    CardContent,
    Card,
    CardActions,
    Switch
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CompanyCard } from 'src/sections/companies/company-card';
import { CompaniesSearch } from 'src/sections/companies/companies-search';

const iot = [
    {
        id: '2569ce0d517a7f06d3ea1f24',
        createdAt: '27/03/2019',
        description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
        location: 'green house 1',
        title: 'Anenometer',
        value: '594'
    },
    {
        id: 'ed2b900870ceba72d203ec15',
        createdAt: '31/03/2019',
        description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
        location: 'green house 1',
        title: 'DHT11',
        value: '219'
    },
    {
        id: 'a033e38768c82fca90df3db7',
        createdAt: '03/04/2019',
        description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
        location: 'green house 1',
        title: 'Rain Sensor',
        value: '300'
    },
    {
        id: '5dab321376eff6177407e887',
        createdAt: '04/04/2019',
        description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
        location: 'green house 1',
        title: 'Water Flow Sensor',
        value: '40'
    }
];

const Page = () => (
    <>
        <Head>
            <title>
                IoT | S-farm
            </title>
        </Head>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth="xl">
                <Stack spacing={3}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        spacing={4}
                    >
                        <Stack spacing={1}>
                            <Typography variant="h4">
                                Internet of Things
                            </Typography>
                        </Stack>
                        {/* <div>
                            <Button
                                startIcon={(
                                    <SvgIcon fontSize="small">
                                        <PlusIcon />
                                    </SvgIcon>
                                )}
                                variant="contained"
                            >
                                Add
                            </Button>
                        </div> */}
                    </Stack>
                    {/* <CompaniesSearch /> */}
                    <Grid
                        container
                        spacing={3}
                    >
                        {iot.map((component) => (
                            <Grid
                                xs={12}
                                md={6}
                                lg={6}
                                key={component.id}
                            >
                                {/* <CompanyCard company={company} /> */}
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Stack direction="row" alignItems="center" gap={5}>
                                            <Stack >
                                                <Typography>
                                                    {component.value}
                                                </Typography>
                                            </Stack>
                                            <Stack >
                                                <Typography sx={{ fontSize: 14 }}
                                                    color="text.secondary"
                                                    gutterBottom>
                                                    {component.location}
                                                </Typography>
                                                <Stack direction='row'
                                                    justifyContent='space-between'>
                                                    <Typography variant="h5">
                                                        {component.title}
                                                    </Typography>
                                                    <Switch />
                                                </Stack>
                                                <Typography sx={{ fontSize: 14 }}
                                                    color="text.secondary"
                                                    gutterBottom>
                                                    Created At : {component.createdAt}
                                                </Typography>
                                            </Stack>
                                        </Stack>





                                        {/* <Typography sx={{ mb: 1.5 }}
                                            color="text.secondary">
                                            adjective
                                        </Typography> */}
                                        {/* <Typography variant="body2">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography> */}
                                    </CardContent>
                                    {/* <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions> */}
                                </Card>
                            </Grid>
                        ))}

                    </Grid>
                    {/* <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Pagination
                            count={3}
                            size="small"
                        />
                    </Box> */}
                </Stack>
            </Container>
        </Box>
    </>
);

Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page;
