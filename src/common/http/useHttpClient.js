import axios from 'axios';
import React from 'react';

const useHttpClient = ({url}) => {
  const [apiData, setApiData] = React.useState();
  const [apiStatus, setApiStatus] = React.useState();

  React.useEffect(() => {
        axios.get(url)
        .then((apiData) => {
          setApiStatus(apiData.status)
          setApiData(apiData.data);
        });
  }, [url]);
  
  return { data: apiData, status: apiStatus }
}

export default useHttpClient;