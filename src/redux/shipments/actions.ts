import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../utils/apiEndPoints'

export const fetchShipments = createAsyncThunk(
    'shipments/fetchShipments',
    async (arg: void, { rejectWithValue }) => {
        try {
            const result = await API.get('')
            return result.data
        } catch (e) {
            rejectWithValue(e)
        }
    },
)

export const selectShipment = createAction<string>('shipments/selectShipment')