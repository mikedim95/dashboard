/* "use client";
import { VendorAppUserDto } from "@dev-edrink/vendor-api-service";
import { create } from "zustand";
import vendorApiClient from "./vendorApiClient";

type UserStore = {
  fetchCurrentUser: (apiClient: any) => Promise<void>;
  user: VendorAppUserDto | null;
  setUser: (user: VendorAppUserDto | null) => void;
};

const useUserStore = create<UserStore>((set) => ({
  user: {} as VendorAppUserDto,
  setUser: (user: VendorAppUserDto | null) => set({ user }),
  fetchCurrentUser: async (apiClient: vendorApiClient) => {
    console.log("Fetching current user");
    console.log("apiClient.toString()");
    console.log(apiClient);
    let res = await apiClient.clientInstance.userCurrentUser();
    console.log("result: ", res);
    if (res.isSuccessful) {
      set({ user: res.vendorAppUser });
    }
  },
}));
export default useUserStore;
 */
