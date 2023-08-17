import React from 'react'
import styles from './index.module.scss'
import { MenuIcon, SearchIcon } from "../../assets/icons";
import Logo from '../../assets/images/Logo.png';


type Props = {}

const Content = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.mobileLogoContainer}>
        <img src={Logo} alt="logo" className={styles.logo} />
        <MenuIcon style={{ display: 'block' }} />
      </div>
      <div className={styles.searchContainer}>
        <input className={styles.searchInput} placeholder="Search" />
        <SearchIcon style={{ position: 'absolute', top: '15px', left: '16px', cursor: 'pointer' }} />
      </div>
      <div className={styles.contentContainer}>
        <div>
          <h1 className={styles.title}>
            Amazon
          </h1>
          <p className={styles.email}>contact@amazon.com</p>
        </div>

        <div>
          <h3 className={styles.inputTitle}>Cargo Boxes</h3>
          <input className={styles.boxesInput} />
        </div>

        <div className={styles.cargoContainer}>
          <h3 className={styles.requiredText}>Number of required cargo bays</h3>
          <h1 className={styles.title}>5</h1>
        </div>
      </div>
    </div>
  )
}

export default Content