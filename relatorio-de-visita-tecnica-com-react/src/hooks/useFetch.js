import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  
  const [data, setData] = useState(null)
  const [load, setLoad] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {

    const fetchData = async () => {

      setLoad(true)


      try {

        const response = await fetch(url)
        const json = await response.json()
        setData(json)
        setError(null)

      } catch (error) {

        console.log(error.message)
        setError('Erro durante o Carregamento dos Dados')

      }


      setLoad(false)

    }

    fetchData()

  }, [url])

  return {data, load, error}

}