import React from 'react'
import { MenuIcon, SearchIcon } from "../../assets/icons"
import Logo from '../../assets/images/Logo.png';
import styles from './index.module.scss'
import { useSelector } from "react-redux";
import { selectShipmentData } from "../../redux/shipments/selector";
import useHelper from "./useHelper";
import { Link } from 'react-router-dom';



const Sidebar = () => {
    const { data, shipmentId, filteredData } = useSelector(selectShipmentData);
    const { handleSelectShipment } = useHelper();
    console.log(filteredData, 'shipmentId')


    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src={Logo} alt="logo" className={styles.logo} />
                <MenuIcon style={{ display: 'block' }} />
            </div>
            <div className={styles.listContainer}>
                <h3 className={styles.title}>
                    shipment list
                </h3>
                <ul className={styles.list}>
                    {filteredData.length >0 ? filteredData.map(({ name, id }, _) => {
                        const paramId = name?.replaceAll(' ','-')
                        return <Link key={id} to ={`/${paramId}`}className={id === shipmentId ? `${styles.listItem} ${styles.active}` : styles.listItem} onClick={() => handleSelectShipment(id)}>{name}</Link>
                    }):<p>data not found</p>}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar