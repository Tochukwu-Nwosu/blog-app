import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
  const [ data, setData ] = useState('')
  const [ error, setError ] = useState('')
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    axios.get(url)
        .then( response => {
            setData(response.data) 
            setError('')
            setLoading(false)
        })
        .catch( err => {
            err.message === "Network Error" ? 
                setError("Network Error!") : 
                setError('Data Not Found!')
            setData('')
            setLoading(false)
        })
  }, [url])

  return { data, error, loading }
}

export default useFetch
