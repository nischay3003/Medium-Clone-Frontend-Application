export const Skeleton=()=>{
    return(
        <div>
    
<div role="status" className="animate-pulse space-y-6">
    <div className="h-48 bg-gray-200 rounded-lg w-full"></div>
    <div className="space-y-4">
        <div className="h-6 bg-gray-300 rounded-full w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded-full w-1/2"></div>
    </div>
    <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        <div className="h-4 bg-gray-200 rounded w-3/6"></div>
    </div>
    <div className="space-y-4">
        <div className="h-6 bg-gray-300 rounded-full w-1/3"></div>
        <div className="h-6 bg-gray-300 rounded-full w-1/4"></div>
    </div>
    <div className="grid grid-cols-2 gap-4">
        <div className="h-32 bg-gray-200 rounded-lg"></div>
        <div className="h-32 bg-gray-200 rounded-lg"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div>



        </div>
    )
}