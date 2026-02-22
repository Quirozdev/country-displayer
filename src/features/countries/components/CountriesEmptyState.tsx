import { Flag } from "lucide-react";
import { useTranslation } from "react-i18next";

export function CountriesEmptyState() {
  const { t } = useTranslation(["countries"]);

  return (
    <div className="text-foreground flex flex-col items-center gap-3 font-semibold">
      <Flag className="size-8" />
      <p className="text-lg">{t("noCountriesFound")}</p>
    </div>
  );
}
