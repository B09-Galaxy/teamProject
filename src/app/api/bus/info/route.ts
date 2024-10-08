import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const pageNo = searchParams.get('pageNo');
  const numOfRows = searchParams.get('numOfRows');
  const depTerminalId = searchParams.get('depTerminalId');
  const arrTerminalId = searchParams.get('arrTerminalId');
  const depPlandTime = searchParams.get('depPlandTime');

  if (!pageNo || !numOfRows || !depTerminalId || !arrTerminalId || !depPlandTime)
    return NextResponse.json('아무것도 없어요', { status: 400 });

  try {
    const response = await axios.get(`http://apis.data.go.kr/1613000/ExpBusInfoService/getStrtpntAlocFndExpbusInfo`, {
      params: {
        serviceKey: process.env.NEXT_PUBLIC_BUS_DECODING_KEY,
        pageNo,
        numOfRows,
        _type: 'json',
        depTerminalId,
        arrTerminalId,
        depPlandTime
      }
    });

    const data = response.data.response.body.items.item;

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch data', error, status: false, statusCode: 500 });
  }
};
