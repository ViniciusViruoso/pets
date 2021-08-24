import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import Feed from '../Feed/Feed'
import Head from '../Helper/Head'
import NotFund from '../NotFund'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'

const User = () => {
  const {data} = React.useContext(UserContext)

  return (
    <section className="container">
      <Head title={`Minha conta | `} description="A maior rede social animal do Brasil!!"/>
      <UserHeader/>
      <Routes>
        <Route path='/' element={<Feed user={data.id}/>}/>
        <Route path='postar' element={<UserPhotoPost/>}/>
        <Route path='estatisticas' element={<UserStats/>}/>
        <Route path='*' element={<NotFund/>} />
      </Routes>
    </section>
  )
}

export default User
