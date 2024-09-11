import { Helmet } from 'react-helmet-async';
import { OmniqueTicketListView } from 'src/sections/omnique-ticket-report/view';



// ----------------------------------------------------------------------

export default function AppDataReport() {
  return (
    <>
      <Helmet>
        <title>Omnique | Ticket Report</title>
      </Helmet>

      <OmniqueTicketListView />
    </>
  );
}
