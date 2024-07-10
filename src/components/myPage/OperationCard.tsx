import { Tables } from '@/types/supabase';

type BookMark = Tables<'BookMark'>;
interface OperationCardProps {
  data: BookMark;
}

function OperationCard({ data }: OperationCardProps) {
  const { departurePlace, arrivalPlace, detailType, departureTime, charge } = data;
  return (
    <div className="grid grid-cols-5 border border-b-slate-400p px-5 py-3">
      {/* <div className="text-xs">{departureTime}</div> */}
      <div>{detailType}</div>
      <div className="col-span-3 flex flex-row gap-6 justify-around">
        <div>{departurePlace}</div>
        <div> {`->`} </div>
        <div>{arrivalPlace}</div>
      </div>
      <div className='flex flex-row justify-end'>{charge}원</div>
    </div>
  );
}

export default OperationCard;
