import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../utils/apiEndPoints'

export const fetchShipments = createAsyncThunk(
    'shipments/fetchShipments',
    async (arg: void, { rejectWithValue }) => {
        try {
            const result = await API.get('')
            console.log(result)
            return result
        } catch (e) {
            rejectWithValue(e)
        }
    },
)