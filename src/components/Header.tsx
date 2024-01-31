"use client";

import { IoMoonOutline as MoonIcon } from "react-icons/io5";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [theme, saveTheme] = useLocalStorage<string | null>("theme", null);
  const { push } = useRouter();

  const changeTheme = () => {
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      saveTheme("light");
    } else {
      saveTheme("dark");
    }
  };

  return (
    <header className="flex justify-between py-5 px-20 bg-white dark:bg-red-500 shadow-md">
      <h1
        className="font-bold text-2xl cursor-pointer"
        onClick={() => push("/")}
      >
        Where in the world?
      </h1>
      <div
        className="flex font-medium items-center gap-2 cursor-pointer"
        onClick={() => changeTheme()}
      >
        <MoonIcon className="text-xl" />
        <span>Dark Mode</span>
      </div>
    </header>
  );
};
