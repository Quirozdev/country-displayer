import { Search } from "lucide-react";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

export interface CountrySearchInputProps {
  countrySearch: string;
  setCountrySearch: React.Dispatch<React.SetStateAction<string>>;
}

export function CountrySearchInput({
  countrySearch,
  setCountrySearch,
}: CountrySearchInputProps) {
  const { t } = useTranslation(["countries"]);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="flex items-center gap-2 rounded-md px-6 py-3 shadow-lg"
      onClick={() => {
        if (inputRef && inputRef.current) {
          inputRef.current.focus();
        }
      }}
    >
      <Search className="text-foreground size-4" />
      <input
        type="text"
        ref={inputRef}
        value={countrySearch}
        onChange={(e) => setCountrySearch(e.target.value)}
        placeholder={t("search")}
        className="placeholder:text-foreground text-foreground w-full rounded-lg text-sm placeholder:text-sm focus-visible:outline-0"
      />
    </div>
  );
}
