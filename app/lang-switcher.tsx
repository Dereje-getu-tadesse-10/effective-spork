"use client";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const LangSwitcher = () => {
  const changeLocale = useChangeLocale({ preserveSearchParams: true });
  const locale = useCurrentLocale();
  console.log(locale);
  return (
    <Select
      onValueChange={(value: "fr" | "en") => {
        changeLocale(value);
      }}
    >
      <SelectTrigger className="w-[135px]">
        <SelectValue
          placeholder={locale === "fr" ? "🇫🇷 French" : "🇬🇧 English"}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="fr">
          <span className="mr-2">🇫🇷</span>
          French
        </SelectItem>
        <SelectItem value="en">
          <span className="mr-2">🇬🇧</span>
          English
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
