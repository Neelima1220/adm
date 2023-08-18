import React from 'react'
import { MenuIcon, SearchIcon } from "../../assets/icons"
import Logo from '../../assets/images/Logo.png';
import styles from './index.module.scss'
import { useSelector } from "react-redux";
import { selectShipmentData } from "../../redux/shipments/selector";
import useHelper from "./useHelper";

type Props = {}

const Sidebar = (props: Props) => {
    const { data, shipmentId } = useSelector(selectShipmentData);
    const { handleSelectShipment } = useHelper();
    console.log(data, "shipmentData", shipmentId)

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
                    {data && data.map(({ name, id }, _) => {
                        return <li key={id} className={id === shipmentId ? `${styles.listItem} ${styles.active}` : styles.listItem} onClick={() => handleSelectShipment(id)}>{name}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar