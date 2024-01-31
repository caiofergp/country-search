"use client";

import { CountryCard } from "@/components/CountryCard";
import { SearchBar } from "@/components/SearchBar";
import { Select } from "@/components/Select";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Countries } from "./page";
import { setParams } from "@/utils/url";

const continentOptions = [
  { value: "", label: "Filter by Region", placeholder: true },
  { value: "", label: "All" },
  { value: "africa", label: "Africa" },
  { value: "america", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

interface Props {
  countries: Countries[];
}

export const HomePage = ({ countries }: Props) => {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(setParams, [searchParams]);

  return (
    <div>
      <div className="flex flex-col justify-between space-y-4 sm:space-y-0 sm:flex-row sm:items-center">
        <SearchBar
          placeholder="Search for a country..."
          defaultValue={searchParams.get("search") ?? ""}
        />
        <Select
          name="continent"
          options={continentOptions}
          onChange={(event) => {
            push(
              "/" +
                "?" +
                createQueryString(
                  "continent",
                  event.target.value ?? "",
                  searchParams
                )
            );
          }}
          defaultValue={searchParams.get("continent") ?? ""}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-20 mt-12">
        {countries.map((countrie, index) => (
          <CountryCard
            key={index}
            capital={countrie.capital}
            img={countrie.flags.svg}
            imgAlt={countrie.flags.alt}
            name={countrie.name.common}
            population={countrie.population}
            region={countrie.region}
            onClick={() => push(`/countrie/${countrie.name.common}`)}
          />
        ))}
      </div>
    </div>
  );
};
