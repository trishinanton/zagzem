import React, {useEffect} from 'react'
import axios from 'axios'

function useAcfAsync(endpoint = {}) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState()
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const {data: response} = await axios.get(endpoint)
        
        const res = response[0].acf
        setData(res)
      } catch (error) {
        console.error(`
          The argument passed to useAsync() must be an endpoint. Did you pass anything? Maybe an endoint that's passed isn't returning anything?`
        )
      }
      setLoading(false)
    }

    fetchData()
  }, [endpoint])

  return {loading, data}
}

export {useAcfAsync}