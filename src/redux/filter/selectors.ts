import { RootState } from "redux/store";

export const selectSort = (state: RootState) => state.filter.sort;
export const selecFilter = (state: RootState) => state.filter;