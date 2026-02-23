import { CountriesEmptyState } from "@/features/countries/components/CountriesEmptyState";
import { useGetCountriesByCodes } from "@/features/countries/hooks/use-get-countries-by-codes";
import { useGetCountryByCode } from "@/features/countries/hooks/use-get-country-by-code";
import {
  getCurrencies,
  getLanguages,
  getNativeName,
} from "@/features/countries/utils/countries.utils";
import { LoadingSpinner } from "@/shared/components/LoadingSpinner";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from "react-router";

export function CountryPage() {
  const params = useParams<{ code: string }>();
  const { t } = useTranslation(["countries", "common"]);
  const navigate = useNavigate();
  const { data: country, isLoading } = useGetCountryByCode(params.code!);

  const borders = country?.borders ?? [];

  const { data: borderCountries, isLoading: isLoadingBorderCountries } =
    useGetCountriesByCodes(borders);

  if (isLoading) {
    return (
      <div className="mt-16">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="@container flex flex-col gap-12 px-4 md:px-12">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="text-foreground bg-primary flex w-fit cursor-pointer items-center gap-2 rounded-md px-8 py-2 shadow-md"
      >
        <ArrowLeft />
        {t("common:back")}
      </button>
      {country ? (
        <div className="text-foreground flex flex-col gap-x-20 gap-y-12 @xl:flex-row @xl:items-center">
          <img
            src={country.flags.png}
            alt={country.flags.alt}
            className="aspect-video max-w-lg flex-1 object-fill"
          />
          <div className="flex flex-1 flex-col gap-4">
            <p className="text-xl font-extrabold">{country.name.common}</p>
            <div className="@3xl flex flex-col gap-x-16 gap-y-8 @3xl:flex-row">
              <div className="flex flex-col gap-1.5">
                <p>
                  <span className="font-semibold">{t("nativeName")}: </span>
                  <span>{getNativeName(country)}</span>
                </p>
                <p>
                  <span className="font-semibold">{t("population")}: </span>
                  <span>{country.population}</span>
                </p>
                <p>
                  <span className="font-semibold">{t("region")}: </span>
                  <span>{country.region}</span>
                </p>
                <p>
                  <span className="font-semibold">{t("subRegion")}: </span>
                  <span>{country.subregion}</span>
                </p>
                <p>
                  <span className="font-semibold">{t("capital")}: </span>
                  <span>{country.capital}</span>
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <p>
                  <span className="font-semibold">{t("topLevelDomain")}: </span>
                  <span>{country.tld}</span>
                </p>
                <p>
                  <span className="font-semibold">{t("currencies")}: </span>
                  <span>{getCurrencies(country)}</span>
                </p>
                <p>
                  <span className="font-semibold">{t("languages")}: </span>
                  <span>{getLanguages(country)}</span>
                </p>
              </div>
            </div>
            {isLoadingBorderCountries ? (
              <div className="mt-4">
                <LoadingSpinner />
              </div>
            ) : (
              borderCountries && (
                <div className="mt-6 flex flex-col gap-4 @3xl:flex-row @3xl:items-center">
                  <p className="font-semibold">{t("borderCountries")}: </p>
                  <div className="grid flex-1 grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4">
                    {borderCountries.map((borderCountry) => {
                      return (
                        <Link
                          to={`/${borderCountry.cca3}`}
                          className="bg-primary rounded px-2 py-1.5 text-center shadow-md"
                          key={borderCountry.cca3}
                        >
                          {borderCountry.name.common}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      ) : (
        <CountriesEmptyState />
      )}
    </div>
  );
}
