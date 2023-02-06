import axios from "axios"
import { useState } from 'react'
import { useEffect } from "react"
import { useCallback } from "react"

const useFetch = (url, adapter = (value) => value) => {
  const [fetchedData, setFechedData] = useState([]);
  const [requestInfo, setRequestInfo] = useState({
    isLoading: true,
    error: false
  });

  const fetchData = useCallback(async() => {
    try { 
      const response = await axios.get(url)
      const data = await response.data
      if(data) {
        setFechedData(adapter(data))
      }
    } catch(e){
      if(axios.isCancel(e)){
        console.log(`fetched data aborted ${e}`)
      } else {
        console.log("error occured", e)
      }
      setFechedData([]);
      setRequestInfo({
        error: true,
      })
    } finally {
      setRequestInfo(prevInfo => ({
        ...prevInfo,
        isLoading: false
      }));
    }
  }, [url, adapter])
  
  useEffect(() => {
    fetchData()
  }, [url, fetchData])

  return {...fetchedData, ...requestInfo}
}

export default useFetch