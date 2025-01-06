import { cn } from "@/lib/utils";

const Steper = ({ step }: { step: number }) => {
  return (
    <ol className="flex items-center justify-center w-full text-xs text-gray-900 font-medium sm:text-base">
      <li className="flex w-full relative text-gray-900">
        <div className="block whitespace-nowrap z-10 text-center">
          <span
            className={cn(
              "w-6 h-6 bg-[#747474] border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 lg:w-10 lg:h-10"
            )}
          ></span>{" "}
          personal data
        </div>
        <div className="absolute top-5 left-4 w-full border-t-2 border-dashed border-[#CACACA]"></div>
      </li>
      <li className="flex w-full relative text-gray-900">
        <div className="block whitespace-nowrap z-10 text-center">
          <span className="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-gray-500 lg:w-10 lg:h-10">
            2
          </span>{" "}
          image
        </div>
        <div className="absolute top-5 left-4 w-full border-t-2 border-dashed border-[#CACACA]"></div>
      </li>
      <li className="flex w-full relative text-gray-900">
        <div className="block whitespace-nowrap z-10 text-center">
          <span className="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-gray-500 lg:w-10 lg:h-10">
            3
          </span>
          preview
        </div>
      </li>
    </ol>
  );
};

export default Steper;
