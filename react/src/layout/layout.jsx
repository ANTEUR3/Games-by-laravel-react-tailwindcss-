import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from "react";
import { Navbar, Container, Nav, Collapse } from "react-bootstrap";

export default function Layout() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className="w-full px-2 py-2 justify-start items-center grid sm:grid-cols-8 grid-cols-6 border-b-2 shadow-md">
                <div className="flex justify-start gap-6 items-center col-span-1 sm:col-span-2">
                    <h1 className="text-sm sm:text-lg md:text-2xl cursor-pointer text-orange-600">
                        YGames
                    </h1>
                    <svg
                        className="text-orange-600 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
                        />
                    </svg>
                </div>
                <ul className="flex md:justify-start justify-center gap-6 items-center col-span-5 sm:col-span-4 p-2 md:p-0">
                    <li className="text-md hover:text-orange-600 cursor-pointer hover:font-bold">
                        Home
                    </li>
                    <li className="text-md hover:text-orange-600 cursor-pointer hover:font-bold">
                        About
                    </li>
                    <li className="text-md hover:text-orange-600 cursor-pointer hover:font-bold">
                        MY CV
                    </li>
                    <li className="text-md hover:text-orange-600 cursor-pointer hover:font-bold">
                        Help
                    </li>
                </ul>
                <div className="justify-end gap-5 col-span-2 hidden md:flex">
                    <button className="bg-white text-orange-600 hover:bg-orange-600 hover:text-white px-2 py-1 border-2 border-orange-600 rounded-md">
                        Sing in
                    </button>
                    <button className="bg-white text-orange-600 hover:bg-orange-600 hover:text-white px-2 py-1 border-2 border-orange-600 rounded-md">
                        Sing in
                    </button>
                </div>
            </nav>
            <div className="mx-auto flex justify-center gap-5 w-full sm:w-1/2 md:hidden mb-6 mt-6">
    <button className="text-sm sm:text-lg md:text-lg border-2 border-orange-600 bg-white text-orange-600 hover:text-white hover:bg-orange-600 rounded-md py-1 px-2 mx-4">
        Sign in
    </button>
    <button className="text-sm sm:text-lg md:text-lg border-2 border-orange-600 bg-white text-orange-600 hover:text-white hover:bg-orange-600 rounded-md py-1 px-2 mx-4">
        Sign up
    </button>
</div>


            <main>
                <Outlet />
            </main>
        </>
    );
}
