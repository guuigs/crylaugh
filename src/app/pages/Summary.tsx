import InteractiveChart from '../components/InteractiveChart';

export default function Summary() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full h-[calc(100vh-200px)]">
      <InteractiveChart />
    </div>
  );
}