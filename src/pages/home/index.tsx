import React,{useEffect} from 'react'
import styles from './index.module.scss'
import Sidebar from "../../components/sidebar"
import Content from "../../components/content"
import { useDispatch } from "react-redux"
import { fetchShipments } from "../../redux/shipments/actions"
import { AppDispatch } from "../../redux/store"


const Home = () => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchShipments())
  }, [])
  
  return (
    <div className={styles.container}>
    <Sidebar />
    <Content />
    </div>
  )
}

export default Home