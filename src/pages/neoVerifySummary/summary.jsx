import { Helmet } from 'react-helmet-async';
import { SummaryListView } from 'src/sections/neo-verify-summary/view';


// ----------------------------------------------------------------------

export default function SummaryCart() {
  return (
    <>
      <Helmet>
        <title>Neo Verify | Summary</title>
      </Helmet>

      <SummaryListView />
    </>
  );
}
