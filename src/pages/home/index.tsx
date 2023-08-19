import React, { useEffect, useMemo } from 'react'
import styles from './index.module.scss'
import Sidebar from "../../components/sidebar"
import Content from "../../components/content"
import { useDispatch, useSelector } from "react-redux"
import { fetchShipments, selectShipment } from "../../redux/shipments/actions"
import { AppDispatch } from "../../redux/store"
import { selectShipmentData } from "../../redux/shipments/selector"
import { useNavigate, useParams } from 'react-router-dom';
import useHelper from "./useHelper"



const Home = () => {

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  const { id } = useParams()

  const { selectedShipment, data } = useSelector(selectShipmentData);

  const { isMobile, showShipments, setShowShipments } = useHelper();


  useEffect(() => {
    dispatch(fetchShipments())
  }, [])

  const shipmentId = useMemo(() => data.find(item => item?.name.replaceAll(' ', '-') === id), [data, id]);

  useEffect(() => {
    if (id && shipmentId) {
      dispatch(selectShipment(shipmentId.id));
    } else if (selectedShipment) {
      const paramId = selectedShipment.name.replaceAll(' ', '-');
      navigate(`/${paramId}`);
    }

  }, [id, shipmentId, selectedShipment, navigate]);

  return (
    <div className={styles.container}>
      <Sidebar {...{ isMobile, showShipments, setShowShipments }} />
      <Content {...{ isMobile, showShipments, setShowShipments }} />
    </div>
  )
}

export default Home