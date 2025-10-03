export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F5F1E6] animate-pulse">
      <div className="container mx-auto px-4 py-8">
        {/* Header Skeleton */}
        <div className="h-8 bg-gray-200 rounded-lg w-1/3 mb-8"></div>
        
        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg p-4 space-y-4">
              <div className="h-48 bg-gray-200 rounded-lg"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}