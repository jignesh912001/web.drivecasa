import { Helmet } from 'react-helmet-async';
import ImportExcelForm from './import-excel';

// ----------------------------------------------------------------------

export default function ImportExcelListingPage() {
  return (
    <>
      <Helmet>
        <title> Neo verify | Import Excel </title>
      </Helmet>

      <ImportExcelForm />

    </>
  );
}
