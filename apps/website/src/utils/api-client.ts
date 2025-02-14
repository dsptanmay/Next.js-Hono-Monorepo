import env from "@/utils/env";
import { ApiClient } from "api";

export const apiClient = ApiClient(env.API_URL).api;
