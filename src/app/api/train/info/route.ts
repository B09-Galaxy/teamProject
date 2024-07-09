import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const pageNo = searchParams.get('pageNo');
  const numOfRows = searchParams.get('numOfRows');
  const depPlaceId = searchParams.get('depPlaceId');
  const arrPlaceId = searchParams.get('arrPlaceId');
  const depPlandTime = searchParams.get('depPlandTime');

  if (!pageNo || !numOfRows || !depPlaceId || !arrPlaceId || !depPlandTime)
    return NextResponse.json('', { status: 400 });

  try {
    const response = await axios.get(`http://apis.data.go.kr/1613000/TrainInfoService/getStrtpntAlocFndTrainInfo`, {
      params: {
        serviceKey: process.env.NEXT_PUBLIC_TRAIN_DECODING_KEY,
        pageNo,
        numOfRows,
        _type: 'json',
        depPlaceId,
        arrPlaceId,
        depPlandTime
      }
    });
    const data = response.data.response.body;

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' });
  }
};
