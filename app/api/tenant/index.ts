import axios from "axios";

const API_KEY = `Bearer ${process.env.FINCODE_SECRET_KEY}`;
const BASE_URL = `${process.env.FINCODE_BASE_URL}`;
const ID = `${process.env.FINCODE_TENANT_SHOP_ID}`;

export const fetchTenants = async () => {
  console.log('starting fetchTenats...')
  try {
    const endpoint = "/v1/tenants";
    const tenantApiRes = await axios.get(BASE_URL + endpoint, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const tenantRes = tenantApiRes.data;
    return tenantRes;
  } catch (e) {
    console.error(e);
  }
};

export const fetchTenant = async () => {
  console.log('starting fetchTenat...')
  try {
    const endpoint = "/v1/tenants/{id}".replace("{id}", ID);
    const tenantApiRes = await axios.get(BASE_URL + endpoint, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const tenantRes = tenantApiRes.data;
    return tenantRes;
  } catch (e) {
    console.error(e);
  }
}