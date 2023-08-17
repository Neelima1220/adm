import React from 'react'
import { MenuIcon, SearchIcon } from "../../assets/icons"
import Logo from '../../assets/images/Logo.png';
import styles from './index.module.scss'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
            <img src={Logo} alt="logo" className={styles.logo} />
            <MenuIcon style={{display:'block'}}/>
            </div>
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