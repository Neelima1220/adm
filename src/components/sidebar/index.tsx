import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectShipmentData } from '../../redux/shipments/selector';
import useHelper from './useHelper';
import Logo from '../../assets/images/Logo.png';
import { CloseIcon, MenuIcon } from '../../assets/icons';
import styles from './index.module.scss';
import { Icomponent } from "../../interfaces/appState";


const Sidebar = ({isMobile, showShipments, setShowShipments }: Icomponent) => {
    const { shipmentId, filteredData } = useSelector(selectShipmentData);
    const { handleSelectShipment } = useHelper(setShowShipments);

    return (
        <div className={showShipments ? `${styles.mobileContainer} ${styles.container}`: styles.container}>
            <div className={styles.logoContainer}>
                <img src={Logo} alt="logo" className={styles.logo} />
                {isMobile && <CloseIcon style={{ cursor:'pointer' }} onClick={() => { setShowShipments(false) }} />}
            </div>
            <div className={styles.listContainer}>
                <h3 className={styles.title}>Shipment list</h3>
                <ul className={styles.list}>
                    {filteredData.length > 0 && (
                        filteredData.map(({ name, id }) => {
                            const paramId = name?.replaceAll(' ', '-');
                            return (
                                <Link
                                    key={id}
                                    to={`/${paramId}`}
                                    className={
                                        id === shipmentId
                                            ? `${styles.listItem} ${styles.active}`
                                            : styles.listItem
                                    }
                                    onClick={() => handleSelectShipment(id)}
                                >
                                    {name}
                                </Link>
                            );
                        })
                    )}
                    {filteredData.length === 0 && <h1 className={styles.notFound}>Sorry, Nothing found!</h1>}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
