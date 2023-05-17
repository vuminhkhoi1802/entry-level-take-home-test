import axios from "axios";
import { url } from "../constant";

type Params = {
  page?: number;
  limit?: number;
  short_title?: string;
  status?: string;
};

export const fetchData = async (
  page?: number,
  limit?: number,
  short_title?: string,
  status?: string
) => {
  const params: Params = {};
  if (page) params["page"] = page;
  if (limit) params["limit"] = limit;
  if (short_title) params["short_title"] = short_title;
  if (status) params["status"] = status;

  const response = await axios.get(url, { params });
  return response?.data;
};
