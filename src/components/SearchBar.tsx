"use client";

import { setParams } from "@/utils/url";
import { useRouter, useSearchParams } from "next/navigation";
import { InputHTMLAttributes, useCallback } from "react";
import { FaMagnifyingGlass as MagnifyingGlass } from "react-icons/fa6";

interface Props extends InputHTMLAttributes<Omit<HTMLInputElement, "type">> {
  placeholder: string;
}

export const SearchBar = ({ placeholder, ...props }: Props) => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(setParams, [searchParams]);

  return (
    <div className="relative text-black">
      <input
        type="text"
        placeholder={placeholder}
        className="h-16 w-full pl-20 rounded-md outline-none"
        onKeyDown={(event) => {
          if (event.key === "Enter")
            push(
              "/" +
                "?" +
                createQueryString(
                  "search",
                  (event.target as any).value ?? "",
                  searchParams
                )
            );
        }}
        {...props}
      />
      <MagnifyingGlass className="absolute top-5 left-8 text-xl" />
    </div>
  );
};
