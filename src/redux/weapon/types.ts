export type WeaponItem = {
    id:string;
    title: string;
    price: number;
    imageUrl: string;
    size: number[];
    types: number[];
    rating:number;
  }
  export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
  }

export interface WeaponSliceState{
  items: WeaponItem[];
  status: Status;
}

export type SearchWeaponParamss = {
    sortBy: string;
    order: string;
    category: string;
    search: string;
    currentPage: string;
  };

