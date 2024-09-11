
// ----------------------------------------------------------------------

import axiosInstance, { endpoints } from "src/utils/axios";
import useSWR from 'swr';

const fetcher = async (args) => {
  try {
      const [url, params] = Array.isArray(args) ? args : [args];

      const response = await axiosInstance.post(url);

      if (!response.data || !response.data.data) {
          throw new Error('Unexpected response structure');
      }
      return response.data.data;
  } catch (error) {
      console.error('Error in fetcher:', error);
      throw error;
  }
};

// ----------------------------------------------------------------------


export function GetAllCompany() {
  const URL = endpoints.common.companyList;

  const { data, error } = useSWR(URL, fetcher, { revalidateOnFocus: false });

  const decryptedData = data ? data : null;

  return {
      GetAllCompanyData: decryptedData || [],
      isLoading: !error && !decryptedData,
      isError: error,
      EmployeeEmpty: !decryptedData?.length
  };
}

// ----------------------------------------------------------------------
