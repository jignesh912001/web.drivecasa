import axiosInstance, { endpoints } from "src/utils/axios";

// ----------------------------------------------------------------------


export const GetAllOmniqueTicketDetailReports = async (parameter) => {
  const URL = endpoints.omnique.omniqueTicketList;
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
// ------------------------------------------------------------------------
