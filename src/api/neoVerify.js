import useSWR from 'swr';

import axiosInstance, { endpoints } from 'src/utils/axios';
import { Encrypt } from 'src/common/Encrypt/Encrypt';
import { Decrypt } from 'src/common/Decrypt/Decrypt';



// ----------------------------------------------------------------------

export const ImportExcelForNeoVerify = async (parameter, file) => {

  const URL = endpoints.neoVerify.importExcel;

  // const Params = { Payload: Encrypt(parameter), Files: file };

  const { data, error } = await axiosInstance.post(URL, parameter);

  if (data?.status) {
    // const decryptedData = data?.data ? Decrypt(data?.data) : null;
    const decryptedData = data?.data ? data?.data : null;

    return {
      result: decryptedData || [],
      isLoading: !error && !decryptedData,
      isError: error,
      status: data?.status,
      message: data?.message
    };
  } else {
    return {
      result: null,
      status: data?.status,
      message: data?.message
    }
  }
}

// Start Neo verify report ----------------------------------------------------------------------

export const GetAllAppDataReports = async (parameter) => {
  const URL = endpoints.neoVerify.neoAppDataReport;
  const { data, error } = await axiosInstance.post(URL, parameter);

  const decryptedData = data?.data ? data?.data : null;

  return {
    result: decryptedData || [],
    isLoading: !error && !decryptedData,
    isError: error,
    status: data?.status,
    message: data?.message,
    vendorsEmpty: !decryptedData?.length
  };
}
// Start Neo verify report ------------------------------------------------------------------------



// Start Neo verify Summary ----------------------------------------------------------------------

export const GetAllAppDataSummary = async (parameter) => {
  const URL = endpoints.neoVerify.neoAppDataSummary;
  const { data, error } = await axiosInstance.post(URL, parameter);

  const decryptedData = data?.data ? data?.data : null;

  return {
    result: decryptedData || [],
    isLoading: !error && !decryptedData,
    isError: error,
    status: data?.status,
    message: data?.message,
    vendorsEmpty: !decryptedData?.length
  };
}
// Start Neo verify Summary ------------------------------------------------------------------------
