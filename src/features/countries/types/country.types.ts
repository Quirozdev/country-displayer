export interface Country {
  capital: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
  population: number;
  region: string;
  cca3: string;
}

export type CountriesResponse = Country[];
