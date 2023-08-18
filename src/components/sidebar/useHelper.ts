import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectShipment } from '../../redux/shipments/actions';

const useHelper = () => {
  const dispatch = useDispatch();

  const handleSelectShipment = (id) => {
    dispatch(selectShipment(id));
  };
  return {
    handleSelectShipment,
  };
};

export default useHelper;
