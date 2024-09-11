import { Helmet } from 'react-helmet-async';
import { AppDataReportListView } from 'src/sections/neo-verify-appData-report/view';



// ----------------------------------------------------------------------

export default function AppDataReport() {
  return (
    <>
      <Helmet>
        <title>Neo Verify | App Data Report</title>
      </Helmet>

      <AppDataReportListView />
    </>
  );
}
