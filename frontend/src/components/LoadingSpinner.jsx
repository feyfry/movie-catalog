const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-40">
        <div className="border-8 border-black border-t-[#FF3EA5] rounded-full h-20 w-20 animate-spin"></div>
        <span className="ml-4 font-black text-2xl">Loading...</span>
    </div>
);

export default LoadingSpinner;