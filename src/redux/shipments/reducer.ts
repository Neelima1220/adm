import { createReducer } from '@reduxjs/toolkit';
import { fetchShipments } from './actions';
import { IInitialState, Ishipment } from "../../interfaces/shipments";

const initialState: IInitialState = {
  data: [],
  isLoading: false,
  filteredData: [],
  shipment:null,
  searchValue:'',
  cargoBaysCount:null,
  cargoInput:'',
  error:''
};

const shipmentsReducer = createReducer(initialState, shipments =>{
    shipments.addCase(fetchShipments.fulfilled, (state, {payload}) =>{
        return {...state, data:payload, }
    })
    
})

export default shipmentsReducer