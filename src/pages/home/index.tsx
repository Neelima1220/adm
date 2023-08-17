import React from 'react'
import styles from './index.module.scss'
import Sidebar from "../../components/sidebar"
import Content from "../../components/content"


const Home = () => {
  return (
    <div className={styles.container}>
    <Sidebar />
    <Content />
    </div>
  )
}

export default Home