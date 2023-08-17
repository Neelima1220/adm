import React from 'react'
import Header from "../../components/header"
import styles from './index.module.scss'
import Sidebar from "../../components/sidebar"
import Content from "../../components/content"


const Home = () => {
  return (
    <div className={styles.mainContainer}>
    {/* <Header /> */}
    <Sidebar />
    <Content />
    </div>
  )
}

export default Home