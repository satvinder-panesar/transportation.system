import axios from 'axios';
import React from 'react';
import {getItemFromCache, addItemToCache} from '../cache'

const useHttpClient = ({url, cacheKey}) => {
  const [apiData, setApiData] = React.useState();
  const [apiStatus, setApiStatus] = React.useState();

  React.useEffect(() => {
    if(cacheKey){
        const data = getItemFromCache(cacheKey)
        if(data){
          console.log("from cache")
          setApiStatus(200)
          setApiData(data)
        }else{
          axios.get(url)
          .then((apiData) => {
            setApiStatus(apiData.status)
            setApiData(apiData.data);
            addItemToCache(cacheKey, apiData.data)
          });
        }
      }else{
        axios.get(url)
        .then((apiData) => {
          setApiStatus(apiData.status)
          setApiData(apiData.data);
        });
      }
  }, [url, cacheKey]);
  
  return { data: apiData, status: apiStatus }
}

export default useHttpClient;