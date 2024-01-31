import Image from "next/image";

interface Props {
  img: string;
  imgAlt: string;
  name: string;
  population: number;
  region: string;
  capital: string[];
  onClick: () => void;
}

export const CountryCard = ({
  img,
  imgAlt,
  name,
  population,
  region,
  capital,
  onClick,
}: Props) => {
  return (
    <div
      className="flex flex-col relative bg-white rounded-md overflow-hidden w-72 cursor-pointer"
      onClick={onClick}
    >
      {img && (
        <div className="relative h-36 w-full">
          <Image src={img} alt={imgAlt} fill />
        </div>
      )}
      <div className="flex flex-col flex-wrap text-black p-4">
        <h1 className="text-xl font-bold mb-4">{name}</h1>
        <span>
          <b>Population:</b>
          {population}
        </span>
        <span>
          <b>Region:</b>
          {region}
        </span>
        <span>
          <b>Capital:</b>
          {capital.join(",")}
        </span>
      </div>
    </div>
  );
};
