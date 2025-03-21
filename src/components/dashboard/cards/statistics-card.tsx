interface StatisticsCardProps {
  title: string;
  value: string;
  description: string;
  icon: string;
}

export function StatisticsCard({
  title,
  value,
  description,
  icon,
}: StatisticsCardProps) {
  return (
    <div
      className="relative bg-gradient w-full h-24 rounded-4xl overflow-hidden"
      
    >
      <div className="flex gap-12 h-full px-6 py-4">
        <div className="flex justify-between items-center w-16 h-16 bg-white/10 rounded-full border border-[#FF4AE7]">
          <img src={icon} alt={`${title} icon`} className="h-7 w-7 m-auto" />
        </div>
        <div className="">
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-xs text-muted-foreground">{description}</div>
        </div>
      </div>
    </div>
  );
}
