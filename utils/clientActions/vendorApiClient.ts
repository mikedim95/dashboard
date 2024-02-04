"use client";
import axios, { AxiosInstance } from "axios";
import { VendorAPIService } from "@dev-edrink/vendor-api-service";
import { auth } from "../serverActions/firebase";
import { getAuth } from "firebase/auth";
import { useSession, signOut, signIn } from "next-auth/react";
import { redirect } from "next/navigation";

/* function getJWT(): string | null {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signIn?callbackUrl=/localhost:3000");
    },
  });
  /* if (token) {
    return token ; // Get JWT from Firebase
  } 
  return null;
} */

export class vendorApiClient {
  private readonly client: VendorAPIService;

  constructor(token?: string) {
    const baseUrl: string = "https://vendorapi.edrink.gr";

    /* const token = getJWT(); */
    const axiosInstance: AxiosInstance = axios.create();

    axiosInstance.interceptors.request.use(async (config) => {
      console.log("i got the token: " + token);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    this.client = new VendorAPIService(baseUrl, axiosInstance);
  }

  get clientInstance(): VendorAPIService {
    return this.client;
  }
}
export default vendorApiClient;
