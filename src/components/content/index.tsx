import styles from './index.module.scss'
import { MenuIcon, SearchIcon } from "../../assets/icons";
import Logo from '../../assets/images/Logo.png';
import { useSelector } from "react-redux";
import { selectShipmentData } from "../../redux/shipments/selector";
import useHelper from "./useHelper";


const Content = () => {

  const { selectedShipment, cargoInput, cargoBaysCount,searchValue } = useSelector(selectShipmentData);
  const { handleBoxesChange, handleSearchShipments } = useHelper()


  return (
    <div className={styles.container}>
      <div className={styles.mobileLogoContainer}>
        <img src={Logo} alt="logo" className={styles.logo} />
        <MenuIcon style={{ display: 'block' }} />
      </div>
      <div className={styles.searchContainer}>
        <input className={styles.searchInput} placeholder="Search" value={searchValue} onChange={handleSearchShipments} />
        <SearchIcon style={{ position: 'absolute', top: '15px', left: '16px', cursor: 'pointer' }} />
      </div>
      <div className={styles.contentContainer}>
        <div>
          <h1 className={styles.title}>
            {selectedShipment?.name}
          </h1>
          <p className={styles.email}>{selectedShipment?.email}</p>
        </div>

        <div>
          <h3 className={styles.inputTitle}>Cargo Boxes</h3>
          <input type='text' className={styles.boxesInput} value={cargoInput} onChange={handleBoxesChange} />
        </div>

        <div className={styles.cargoContainer}>
          <h3 className={styles.requiredText}>Number of required cargo bays</h3>
          <h1 className={styles.title}>{cargoBaysCount}</h1>
        </div>
      </div>
    </div>
  )
}

export default Content