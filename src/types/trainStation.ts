type TrainStationType = {
  [key: string]: string;
};

type TTrainParams = {
  pageNo: string;
  numOfRows: string;
  depPlaceId: string;
  arrPlaceId: string;
  depPlandTime: string;
};

type TTrainInfo = {
  adultcharge: string;
  arrplacename: string;
  arrplandtime: number;
  depplacename: string;
  depplandtime: number;
  traingradename: string;
  trainno: number;
};
