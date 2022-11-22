import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SearchWeaponParamss, WeaponItem } from "./types";

export const fetchWeapons = createAsyncThunk<WeaponItem[],SearchWeaponParamss>(
    'weapon/fetchWeaponsStatus',
    async (params) => {
      const {order,sortBy,category,search,currentPage} = params;
      const {data} = await axios.get<WeaponItem[]>(`https://6303346c0de3cd918b2fc4ea.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`);
      
      return data;
    });