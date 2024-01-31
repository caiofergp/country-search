import { api } from "@/utils/api";
import { HomePage } from "./HomePage";

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface Countries {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      por: {
        official: string;
        common: string;
      };
    };
  };
  capital: string[];
  region: string;
  population: number;
}

export default async function Home({ searchParams }: Props) {
  const getURl = () => {
    const baseUrl = "https://restcountries.com/v3.1";
    const queryParams = "?fields=name,flags,capital,population,region";

    if (searchParams?.continent)
      return `${baseUrl}/region/${searchParams?.continent}${queryParams}`;

    return `${baseUrl}/all${queryParams}`;
  };

  const data: Countries[] = await api(getURl()).then((resp: Countries[]) => {
    if (!searchParams?.search) return resp;
    const filter = new RegExp(`^${searchParams?.search}.*`, "gmi");
    const searched = resp.filter((country) =>
      country.name.common.match(filter)
    );

    return searched;
  });

  return (
    <div>
      <HomePage countries={data} />
    </div>
  );
}
