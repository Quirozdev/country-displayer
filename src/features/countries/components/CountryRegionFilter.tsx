import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export interface CountryRegionFilterProps {
  availableRegions: string[];
  selectedRegion: string;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
}

export function CountryRegionFilter({
  availableRegions,
  selectedRegion,
  setSelectedRegion,
}: CountryRegionFilterProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation(["countries"]);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative min-w-48 text-sm" ref={containerRef}>
      <button
        className="text-foreground bg-primary flex w-full items-center justify-between gap-4 rounded-md px-6 py-3 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedRegion ? (
          <span>{selectedRegion}</span>
        ) : (
          <span>{t("regionFilter")}</span>
        )}
        <ChevronDown />
      </button>
      {isOpen && (
        <div className="text-foreground bg-primary absolute top-13 flex w-full flex-col rounded-md px-6 py-3">
          {availableRegions.map((availableRegion) => {
            return (
              <button
                key={availableRegion}
                className="py-1 text-left"
                onClick={() => {
                  if (selectedRegion === availableRegion) {
                    setSelectedRegion("");
                  } else {
                    setSelectedRegion(availableRegion);
                  }
                  setIsOpen(false);
                }}
              >
                {availableRegion}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
