import { ApiClient } from "api";

export const apiClient = ApiClient(process.env.API_URL!).api;
