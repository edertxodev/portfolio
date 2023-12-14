export default function Spinner({ className }: { className?: string }) {
  return (
    <div className={`flex justify-center items-center h-screen ${className}`}>
      <div className="relative inline-flex">
        <div className="w-4 h-4 bg-white rounded-full" />
        <div className="w-4 h-4 bg-white rounded-full absolute top-0 left-0 animate-ping" />
        <div className="w-4 h-4 bg-white rounded-full absolute top-0 left-0 animate-pulse" />
      </div>
    </div>
  )
}
