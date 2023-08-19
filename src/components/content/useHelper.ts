// import {ChangeEventHandler} from 'react';
// import { useDispatch } from 'react-redux';
// import {
//   changeCargoInput,
// } from '../../redux/shipments/actions';

// const useHelper = () => {
//   const dispatch = useDispatch();

//   const handleBoxesChange: ChangeEventHandler<HTMLInputElement> = (e) => {
//     const { value } = e.target;
//     if (
//       /^[0-9,.]*$/.test(value) &&
//       !/[,.]{2,}/.test(value) &&
//       !/\.\d\./.test(value)
//     ) {
//       dispatch(changeCargoInput(value));
//     }
//   };

//   // const handleBoxesChange

//   return {
//     handleBoxesChange,
//   };
// };

// export default useHelper;

import { ChangeEventHandler, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeCargoInput,searchShipments } from '../../redux/shipments/actions';
import useDebounce from '../../hooks/useDebounce';

const useHelper = () => {
  const dispatch = useDispatch();

  const debouncedDispatch = useDebounce(dispatch, 1000);

  const handleBoxesChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (
      /^[0-9,.]*$/.test(value) &&
      !/[,.]{2,}/.test(value) &&
      !/\.\d\./.test(value)
    ) {
      dispatch(changeCargoInput(value));
    }
  };

  const handleSearchShipments: ChangeEventHandler<HTMLInputElement> = (e) =>{
    const { value } = e.target;
    dispatch(searchShipments(value));
  }

  return {
    handleBoxesChange,
    handleSearchShipments
  };
};

export default useHelper;
