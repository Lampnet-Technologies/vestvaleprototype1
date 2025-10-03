export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#F5F1E6] bg-opacity-50 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-[#D3BD9E] border-t-[#361B06] rounded-full animate-spin"></div>
        <p className="text-[#361B06] font-medium">Loading...</p>
      </div>
    </div>
  );
}