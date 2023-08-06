import React, { useContext, useEffect } from 'react'
import MainPageView from './MainPageView'
import { CoinContext } from '../../context/coinContext'
import userContext from '../../context/userContext'
import { useNavigate } from 'react-router-dom'

const MainPageController = () => {
  const {coins,getCoins} = useContext(CoinContext)//contexte abone olduk bize veriler geldi
  const {user} = useContext(userContext)
  const navigate = useNavigate()
  
  
  useEffect(()=>{
    getCoins()
  },[])
//user geldiğinde çalışacak çıkış yaparsa logine gidecek
  useEffect(()=>{
    if(!user){
      navigate("/")
    }

  },[user])

  return (
    <MainPageView coins={coins}/>
  )
}

export default MainPageController