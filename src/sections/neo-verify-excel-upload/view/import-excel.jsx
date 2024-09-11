import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo, useEffect, useCallback } from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
  RHFUploadExcel,
} from 'src/components/hook-form';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import { Box, Container } from '@mui/material';
import * as XLSX from 'xlsx';  // Import the xlsx library
import { ImportExcelForNeoVerify } from 'src/api/neoVerify';
import { ExcelDateFormate } from 'src/common/Common';

// ----------------------------------------------------------------------

export default function ImportExcelForm({ currentPost }) {
  const router = useRouter();
  const mdUp = useResponsive('up', 'md');
  const { enqueueSnackbar } = useSnackbar();
  const preview = useBoolean();

  const NewBlogSchema = Yup.object().shape({
    coverUrl: Yup.mixed()
      .nullable()
      .required('You must upload a file!')
  });

  const defaultValues = useMemo(
    () => ({
      coverUrl: currentPost?.coverUrl || null,
    }),
    [currentPost]
  );

  const methods = useForm({
    resolver: yupResolver(NewBlogSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (currentPost) {
      reset(defaultValues);
    }
  }, [currentPost, defaultValues, reset]);


  const processExcelFile = useCallback((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          // Get the first sheet name and worksheet
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          // Convert worksheet to JSON
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          // Map the data and convert dates
          const payload = jsonData?.map((row) => ({
            appId: row["App Id"] || '',
            id: row["Id"] || '',
            type: row["Type"] || '',
            applicationDate: ExcelDateFormate(row["Application Date"]) || null,
            soldDate: ExcelDateFormate(row["Sold Date"]) || null,
            combAppSoldDate: ExcelDateFormate(row["Combined App-Sold Date"]) || null,
            completionTime: row["Completion Time"] || '',
            dealership: row["Dealership"] || '',
            appFirstName: row["Applicant First Name"] || '',
            appLastName: row["Applicant Last Name"] || '',
            status: row["Status"] || '',
            score: row["Score"] || '',
            grade: row["Grade"] || '',
            customTag: row["Custom Tag"] || '',
            approvalTier: row["Approval Tier"] || '',
            downpayment: row["Downpayment"] || '',
            addDp: row["Add DP"] || '',
            salesperson: row["Salesperson"] || '',
            brd: row["BDR"] || '',
            brD2: row["BDR 2"] || '',
            decisionedBy: row["Decisioned By"] || '',
            verifier: row["Verifier"] || '',
            advActionLetter: row["Adverse Action Letter"] || '',
            notes: row["Notes"] || '',
            referralSource: row["Referral Source"] || '',
            referralSourceDetail: row["Referral Source Detail"] || '',
            email: row["Email"] || '',
            cellNumber: row["Cell Number"] || '',
            homeNumber: row["Home Number"] || '',
            paycallTier: row["Paycall Tier"] || '',
            proofOfIncome: row["Proof of Income"] || '',
            dmsId: row["DMS Id"] || '',
            income: row["Income"] || '',
            monthlyPayment: row["Monthly Payment"] || '',
            pti: row["PTI"] || '',
            creditScore: row["Credit Score"] || '',
            repossession: row["Repossession"] || '',
            financialReportStatus: row["Financial Report Status"] || '',
            applicantZipcode: row["Applicant Zipcode"] || '',
            zipCode: row["zipCode"] || '',
          }));
          resolve(payload);
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = (error) => reject(error);

      // Read the file as an array buffer
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const payload = await processExcelFile(data.coverUrl);
      // const limitedPayload = payload.slice(0, 10); // limit set
      const { status, message } = await ImportExcelForNeoVerify(payload);
      if (status) {
        enqueueSnackbar('Upload success!');
      } else {
        enqueueSnackbar(message, { variant: 'error' });
      }
      preview.onFalse();
      reset();
    } catch (error) {
      enqueueSnackbar(error, { variant: 'error' });
      console.error(error);
    }
  });

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('coverUrl', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleRemoveFile = useCallback(() => {
    setValue('coverUrl', null);
  }, [setValue]);

  const renderDetails = (
    <Grid xs={12} md={12}>
      <Card>
        {!mdUp && <CardHeader title="Details" />}
        <Stack spacing={3} sx={{ p: 3 }}>
          <Stack spacing={1.5}>
            <Typography variant="subtitle2">Upload File</Typography>
            <RHFUploadExcel
              name="coverUrl"
              accept={{
                'text/csv': [],
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [], // Excel files (.xlsx)
                'application/vnd.ms-excel': [] // Older Excel files (.xls)
              }}
              onDrop={handleDrop}
              onDelete={handleRemoveFile}
            />
          </Stack>
        </Stack>
      </Card>
    </Grid>
  );

  const renderActions = (
    <>
      {mdUp && <Grid md={4} />}
      <Grid xs={12} md={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        {/* <Button color="inherit" variant="outlined" size="large" onClick={preview.onTrue}>
          Preview
        </Button> */}
        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          loading={isSubmitting}
          sx={{ ml: 2 }}
        >
          Upload  File
        </LoadingButton>
      </Grid>
    </>
  );

  return (
    <Container
      maxWidth={false}
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CustomBreadcrumbs
        heading="Import Excel"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Import Excel' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container spacing={3}>
          {renderDetails}
          {renderActions}
        </Grid>
      </FormProvider>
    </Container>
  );
}

ImportExcelForm.propTypes = {
  currentPost: PropTypes.object,
};
