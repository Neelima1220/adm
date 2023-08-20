import styles from './index.module.scss'
import Sidebar from "../../components/sidebar"
import Content from "../../components/content"
import useHelper from "./useHelper"

const Home = () => {

    const { isMobile, showShipments, setShowShipments } = useHelper();

    console.log('home calling')

  return (
    <div className={styles.container}>
      <Sidebar {...{ isMobile, showShipments, setShowShipments }} />
      <Content {...{ isMobile, showShipments, setShowShipments }} />
    </div>
  )
}

export default Home