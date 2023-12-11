import create from "zustand";
import { persist } from "zustand/middleware";

let petShopApp = (set) =>({
    dopen: true,
    updateOpen:(dopen)=> set((state) => ({dopen:dopen})),
});

petShopApp = persist (petShopApp,{name:"my_money"});
export const usePetShopApp = create(petShopApp);