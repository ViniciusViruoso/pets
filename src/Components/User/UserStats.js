import React from 'react'
import { STATS_GET } from '../../Api/api'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import Head from '../Helper/Head'
import Loading from '../Helper/Loading'
const UserGrafics = React.lazy(() => import('./UserGrafics'))

const UserStats = () => {
  const {data,error,loading,request} = useFetch()

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if(loading) return <Loading/>
  if(error) return <Error error={error}/>
  if(data){
  return (
    <React.Suspense fallback={<div></div>}>
      <Head title={`Estatísticas | `} description="Veja o seu gráfico de acessos em suas fotos."/>
      <UserGrafics data={data}/>
    </React.Suspense>
  )
  } else return null 
}

export default UserStats
