import Link from "next/link";
import ThemeSwitch from "./ThemeSwitcher";

export default function Header() {
    //get signin user from AuthContext and use it to conditionally render the login/logout button
    const user ={}
//   const { user } = await getUser();
//   const signInUrl = await getSignInUrl();

  return (
    <header>
      <div className="container flex items-center justify-between mx-auto my-4">
        <Link href={'/'} className="font-bold text-xl">Job Hunt</Link>
        <nav className="flex gap-2">
          <div className="m-2">
            <ThemeSwitch />
          </div>

          {user && (
            <Link className="rounded-md bg-gray-200 py-1 px-2 sm:py-2 sm:px-4" href={'/login'}>
              Login
            </Link>
          )}
          {!user && (
            <form action={async () => {
               
            }}>
              <button type="submit" className="rounded-md bg-gray-200 py-1 px-2 sm:py-2 sm:px-4">
                Logout
              </button>
            </form>
          )}
          <Link className="rounded-md py-1 px-2 sm:py-2 sm:px-4 bg-blue-600 text-white" href={'/new-listing'}>
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
}