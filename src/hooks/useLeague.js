import { useEffect, useState } from 'react'
import { getLeagueByCode } from '../services/api'

function useLeague (code) {
  const [league, setLeague] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(null)

  const getData = async () => {
    if (!code) return
    setIsLoading(true)
    const data = await getLeagueByCode(code)
    if (data) {
      setLeague(data)
    }
    setIsLoading(false)
  }

  const refresh = async () => {
    if (!code) return
    const data = await getLeagueByCode(code)
    if (data) {
      setLeague(data)
    }
  }

  useEffect(() => {
    getData()
  }, [code])

  return {
    isLoading,
    refresh,
    league
    // error
  }
}

export default useLeague
