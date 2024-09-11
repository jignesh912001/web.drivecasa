import { Helmet } from 'react-helmet-async';
import TableView from './table';

// ----------------------------------------------------------------------

export default function ReportListingPage() {
  return (
    <>
      <Helmet>
        <title>  Transaction Details Report </title>
      </Helmet>

      <TableView />
    </>
  );
}
