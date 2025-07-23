import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedHospital: null,
};

const hospitalSlice = createSlice({
  name: 'hospital',
  initialState,
  reducers: {
    setSelectedHospital: (state, action) => {
      state.selectedHospital = action.payload;
    },
  },
});

export const { setSelectedHospital } = hospitalSlice.actions;
export default hospitalSlice.reducer;
