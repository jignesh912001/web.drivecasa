import { Helmet } from 'react-helmet-async';
import ReportListView from 'src/sections/neo-verify-appData-report/view/report-list-view';




// ----------------------------------------------------------------------

export default function ReportListPage() {
    return (
        <>
            <Helmet>
                <title>Report List</title>
            </Helmet>

            <ReportListView />
        </>
    );
}
