import React, { useEffect, useMemo } from 'react'
import styles from './index.module.scss'
import Sidebar from "../../components/sidebar"
import Content from "../../components/content"
import { useDispatch, useSelector } from "react-redux"
import { fetchShipments, selectShipment } from "../../redux/shipments/actions"
import { AppDispatch } from "../../redux/store"
import { selectShipmentData } from "../../redux/shipments/selector"
import { useNavigate, useParams } from 'react-router-dom';



const Home = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { selectedShipment, data } = useSelector(selectShipmentData);
  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchShipments())
  }, [])

  const shipmentId = useMemo(() => {
    return data.find(item => item?.name.replaceAll(' ', '-') == id);
  }, [id])
  useEffect(() => {
    if (id && shipmentId) {
      dispatch(selectShipment(shipmentId.id))
    } else {
      const paramId = selectedShipment?.name.replaceAll(' ', '-')
      navigate(`/${paramId}`)
    }
  }, [id, data])

  return (
    <div className={styles.container}>
      <Sidebar />
      <Content />
    </div>
  )
}

export default Home