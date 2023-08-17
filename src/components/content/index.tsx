import React from 'react'
import styles from './index.module.scss'
import { SearchIcon } from "../../assets/icons";

type Props = {}

const Content = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input className={styles.searchInput} />
        <SearchIcon />
      </div>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>
          Amazon
        </h1>
        <p className={styles.email}>contact@amazon.com</p>
        <h3 className={styles.inputTitle}>Cargo Boxes</h3>
        <input className={styles.boxesInput}/>
        <h1 className={styles.cargos}>5</h1>
      </div>
    </div>
  )
}

export default Content