import InteractiveChart from '../components/InteractiveChart';

export default function Summary() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mt-[10px] min-h-[600px]">
      <InteractiveChart />
    </div>
  );
}