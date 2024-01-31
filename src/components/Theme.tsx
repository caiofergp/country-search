"use client";

import { useLocalStorage } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useEffect } from "react";

const Theme = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [theme, saveTheme] = useLocalStorage<string | null>("theme", null);

  useEffect(() => {
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  }, []);

  return (
    <div className={classNames(theme ?? "light", "min-h-screen min-w-[100vw]")}>
      <div className="bg-gray-100 dark:bg-gray-700 dark:text-white min-h-screen min-w-full">
        {children}
      </div>
    </div>
  );
};

export default Theme;
