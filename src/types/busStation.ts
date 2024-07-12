type BusStationType = {
  [key: string]: string;
};

type TBusParams = {
  pageNo: string;
  numOfRows: string;
  depTerminalId?: string;
  arrTerminalId?: string;
  depPlandTime: string;
};

type TBusInfo = {
  charge: string;
  arrPlaceNm: string;
  arrPlandTime: number;
  depPlaceNm: string;
  depPlandTime: number;
  gradeNm: string;
};
