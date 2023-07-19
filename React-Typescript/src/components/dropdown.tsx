import React, { ChangeEventHandler } from "react";

export interface Country {
  name: string;
  code: string;
  cities: string[];
}

const DropDownComponent: React.FC = () => {
  const countries: Country[] = [
    {
      name: "Sri Lanka",
      code: "SL",
      cities: ["colombo", "kurunegala", "galle"],
    },
    {
      name: "India",
      code: "Ind",
      cities: ["Mumbai", "Kolkata", "Hydrabad"],
    },
  ];

  const [country, setCountry] = React.useState<string>();

  const onCountryChange = (e: any) => {
    setCountry(e.target.value);
  };
  return (
    <>
      <h2> Drop down test </h2>
      <select onChange={onCountryChange} value={country}>
        {countries.map((c) => (
          <option value={c.code}>{c.name}</option>
        ))}
      </select>

      <select>
        {countries
          .find((c) => c.code === country)
          ?.cities.map((city) => (
            <option value={city}>{city}</option>
          ))}
      </select>
    </>
  );
};

export default DropDownComponent;
