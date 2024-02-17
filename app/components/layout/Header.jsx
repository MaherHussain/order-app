import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center  justify-between">
      <nav className="flex items-center gap-10 text-gray-500 font-semibold ">
        <Link className="logo text-primary text-xl" href="/">
          My Resto
        </Link>
        <Link href={"/"} className="">
          Home
        </Link>
        <Link href={""} className="">
          Menu
        </Link>
        <Link href={""} className="">
          contact
        </Link>
      </nav>
      <nav className="flex items-center gap-5 text-gray-500 font-semibold">
        <Link href={""}>Login</Link>
        <Link
          href={"/register"}
          className="bg-primary py-2 px-4 text-white rounded-md "
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
