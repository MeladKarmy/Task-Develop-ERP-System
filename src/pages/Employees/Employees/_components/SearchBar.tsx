import { ChangeEvent, useState } from "react";

import { useSearchParams } from "react-router-dom";

import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

type SearchBarProps = {
  placeholder: string;
  className?: string;
  containerClassName?: string;
};

const SearchBar = ({
  placeholder = "",
  className = "",
  containerClassName = "",
}: SearchBarProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("searchValue") || ""
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("searchValue", e.target.value);
    newSearchParams.set("pageIndex", "1");
    setSearchParams(newSearchParams);
  }
  return (
    <div className={cn("relative", containerClassName)}>
      <Input
        type="text"
        placeholder={placeholder}
        className={cn(
          "h-12 w-full rounded-full border-[2px]  border-[#E2E2E2] bg-card px-12 text-black text-base placeholder:text-[14px] placeholder:text-[#919191] focus-visible:ring-0 focus-visible:ring-offset-0",
          className
        )}
        value={searchValue}
        onChange={handleChange}
      />
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.7058 22.2938L17.7368 16.3248C19.3634 14.3354 20.1632 11.7969 19.9707 9.23432C19.7781 6.67179 18.608 4.28129 16.7024 2.55728C14.7968 0.833269 12.3014 -0.0923492 9.73245 -0.0281174C7.1635 0.0361144 4.71751 1.08528 2.90042 2.90237C1.08333 4.71946 0.0341613 7.16545 -0.0300705 9.7344C-0.0943024 12.3034 0.831316 14.7987 2.55533 16.7043C4.27934 18.61 6.66984 19.7801 9.23237 19.9726C11.7949 20.1651 14.3334 19.3654 16.3228 17.7388L22.2918 23.7078C22.4804 23.8899 22.733 23.9907 22.9952 23.9884C23.2574 23.9862 23.5082 23.881 23.6936 23.6956C23.879 23.5102 23.9842 23.2594 23.9865 22.9972C23.9888 22.735 23.888 22.4824 23.7058 22.2938ZM9.99881 18.0008C8.41656 18.0008 6.86984 17.5316 5.55424 16.6525C4.23865 15.7735 3.21327 14.524 2.60777 13.0622C2.00227 11.6004 1.84384 9.99189 2.15252 8.44004C2.4612 6.88819 3.22313 5.46272 4.34195 4.3439C5.46077 3.22508 6.88624 2.46316 8.43808 2.15448C9.98993 1.84579 11.5985 2.00422 13.0603 2.60972C14.5221 3.21522 15.7715 4.2406 16.6506 5.5562C17.5296 6.87179 17.9988 8.41851 17.9988 10.0008C17.9964 12.1218 17.1528 14.1552 15.653 15.655C14.1533 17.1548 12.1198 17.9984 9.99881 18.0008Z"
          fill="#151515"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
