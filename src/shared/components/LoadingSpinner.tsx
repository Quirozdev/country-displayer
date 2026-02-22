import { useTranslation } from "react-i18next";

export function LoadingSpinner() {
  const { t } = useTranslation(["common"]);

  return (
    <div className="text-foreground flex flex-col items-center justify-center gap-3">
      <div className="size-12 animate-spin rounded-full border-t-4"></div>
      <p className="font-semibold">{t("loading")}...</p>
    </div>
  );
}
