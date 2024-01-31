import { Countries } from "@/app/page";
import { api } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

interface Data extends Countries {
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
}

export default async function ({ params }: { params: { countrie: string } }) {
  const data: Data[] = await api(
    `https://restcountries.com/v3.1/name/${params.countrie}?fields=name,flags,capital,population,region,maps`
  );

  return (
    <div>
      {data.map((country, index) => (
        <div key={index} className="flex flex-col items-center">
          <div>
            <div className="relative h-56 w-96 mb-4">
              <Image src={country.flags.svg} alt={country.flags.alt} fill />
            </div>
            <div className="flex flex-col flex-wrap">
              <h1 className="text-xl font-bold mb-4">{country.name.common}</h1>
              <span>
                <b>Population: </b>
                {country.population}
              </span>
              <span>
                <b>Region: </b>
                {country.region}
              </span>
              <span>
                <b>Capital: </b>
                {country.capital.join(",")}
              </span>
              <span>
                <b>Maps: </b>
                <Link
                  href={country.maps.googleMaps}
                  className="text-blue-500"
                  target="_blank"
                >
                  {country.maps.googleMaps}
                </Link>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
