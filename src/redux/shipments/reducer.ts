import { createReducer } from '@reduxjs/toolkit';
import { fetchShipments, selectShipment } from './actions';
import { IInitialState } from '../../interfaces/shipments';

const initialState: IInitialState = {
  data: [],
  isLoading: false,
  filteredData: [],
  selectedShipment: null,
  searchValue: '',
  cargoBaysCount: null,
  cargoInput: '',
  shipmentId: null,
};

const shipmentsReducer = createReducer(initialState, (shipments) => {
  shipments.addCase(fetchShipments.pending, (state, _) => {
    state.isLoading = true;
  });
  shipments.addCase(fetchShipments.fulfilled, (state, { payload }) => {
    state.data = payload;
    state.shipmentId = payload[0].id;
    state.isLoading = false;
  });
  shipments.addCase(selectShipment, (state, { payload }) => {
    state.shipmentId = payload;
  });
});

export default shipmentsReducer;
