import axios from "axios";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { fetchTenants } from "../tenant";

const API_KEY = `Bearer ${process.env.FINCODE_SECRET_KEY}`;
const TENANT_API_KEY = `Bearer ${process.env.FINCODE_TENANT_SECRET_KEY}`;
const BASE_URL = `${process.env.FINCODE_BASE_URL}`;
const ID = `${process.env.FINCODE_TENANT_SHOP_ID}`;
// const SHOP_NAME = `${process.env.FINCODE_TENANT_SHOP_NAME}`;

export async function POST(
  req: NextApiRequest
) {
  console.log('starting pyament...');

  // const res = await fetchTenants();
  // return NextResponse.json({res: res}, {status: 200});
  try {
    const data = {
      success_url: `http://localhost:3000/success/`,
      cancel_url: `http://localhost:3000/cancel/`,
      transaction: {
        amount: '1000',
      },
    };
    console.table(data);

    const endpoint = '/v1/sessions';
    const apiResponse = await axios.post(BASE_URL + endpoint, data, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: API_KEY || '',
        'Tenant-Shop-Id': ID || '',
      },
    });
    const fincodeRes = apiResponse.data;
    console.table(fincodeRes);
    return NextResponse.json({ ...fincodeRes });
  } catch (e) {
    console.error(e);
  }
}