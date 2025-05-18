import { cn } from "@/lib/utils";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardTaskSkeleton = () => {
  return (
    <div className={cn(
      'rounded-md p-5 pt-4 bg-background shadow-md',
    )}>
      <h3 className="mb-2">
        <Skeleton />
      </h3>
      <p className="text-foreground/60 border-l-5 border-l-primary pl-2">
        <Skeleton count={3} className="h-3" />
      </p>
    </div>
  );
};

export default CardTaskSkeleton;
