import { useThemeStore } from "@/features/theme/model/theme.store";
import { useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const theme = useThemeStore((state) => state.theme);
  const changeTheme = useThemeStore((state) => state.changeTheme);
  const { t } = useTranslation(["theme"]);

  const availableOptions = [
    {
      label: t("light"),
      value: "light",
    },
    {
      label: t("dark"),
      value: "dark",
    },
  ] as const;

  const selectedAvailableOptionIndex = availableOptions.findIndex(
    (availableOption) => availableOption.value === theme,
  )!;

  const selectedAvailableOption =
    availableOptions[selectedAvailableOptionIndex];

  const IconComponent = selectedAvailableOption.value === "light" ? Moon : Sun;

  return (
    <button
      onClick={() => {
        changeTheme(
          availableOptions[
            (selectedAvailableOptionIndex + 1) % availableOptions.length
          ].value,
        );
      }}
      className="text-foreground flex cursor-pointer items-center gap-2 p-1"
    >
      <IconComponent className="transition-colors duration-300" />
      <span className="text-foreground hidden font-semibold @md:block">
        {selectedAvailableOption.label}
      </span>
    </button>
  );
}
