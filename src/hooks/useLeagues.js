import { useEffect, useState } from 'react'
import { getLeagues } from '../services/api'

function useLeagues () {
  const [leagues, setLeagues] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(null)

  const getData = async () => {
    setIsLoading(true)
    const data = await getLeagues()
    if (data) {
      setLeagues(data)
    }
    setIsLoading(false)
  }

  const refresh = async () => {
    const data = await getLeagues()
    if (data) {
      setLeagues(data)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    isLoading,
    refresh,
    leagues
    // error
  }
}

export default useLeagues
