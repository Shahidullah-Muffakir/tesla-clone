import {createSlice} from '@reduxjs/toolkit'

const initialState={
    cars:['Model S','Model 3','Model X','Model Y','Solar Roof','Solar Panel']
}

const carSlice=createSlice({
    name:'car',
    initialState,
    reducers:{}

})
//all the cars from car slice.
export const selectCars=state=>state.car.cars

export default carSlice.reducer;