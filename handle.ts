"use client"
import { env } from "@/env";

export const getAPIKEY = () => {
    return env.API_KEY;
}

export const getSOURCEID = () => {
    return env.SOURCE_ID
}