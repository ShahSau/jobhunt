import Link from "next/link";
import ThemeSwitch from "./ThemeSwitcher";
import { useTheme } from "../providers/ThemeProvider";
import Button from "./Button";

export default function Header() {
    //get signin user from AuthContext and use it to conditionally render the login/logout button
    const user ={}
//   const { user } = await getUser();
//   const signInUrl = await getSignInUrl();
   const { theme } = useTheme();

  return (
    <header className={`${theme === 'light'? 'bg-gray-300 text-black':'bg-gray-800 text-white'}`}>
      <div className="container flex items-center justify-between mx-auto">
        <Link href={'/'} className="font-bold text-xl">Job Hunt</Link>
        <nav className="flex gap-2">
          <div className="m-2 my-6">
            <ThemeSwitch />
          </div>

          {user && (
            <Link href={'/login'}>
              <Button type="button" text="login" className="rounded-md bg-gray-200 py-1 px-2 sm:py-2 sm:px-4 my-4" />
            </Link>
          )}
          {!user && (
            <form action={async () => {
               
            }}>
              <Button type="submit" text="Logout" className="rounded-md bg-gray-200 py-1 px-2 sm:py-2 sm:px-4 my-4" />
            </form>
          )}
          <Link href={'/employerjobs/newjob'}>
            <Button type="button" text="Post a Job" className="rounded-md py-1 px-2 sm:py-2 sm:px-4 bg-purple-600 text-white my-4" />
          </Link>

        </nav>
      </div>
    </header>
  );
}