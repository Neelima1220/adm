import React from 'react'
import { SearchIcon } from "../../assets/icons"
import LogoIcon from '../../assets/images/Logo.png';
import styles from './index.module.scss'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div className={styles.container}>
            <img src={LogoIcon} alt="logo" className={styles.logo} />
            <div className={styles.listContainer}>
                <h3 className={styles.title}>
                    shipment list
                </h3>
                <ul className={styles.list}>
                    <li className={`${styles.listItem} ${styles.active}`}>Amazon</li>
                    <li className={styles.listItem}>American express</li>
                    <li className={styles.listItem}>AirBnb</li>
                    <li className={styles.listItem}>Apple</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar