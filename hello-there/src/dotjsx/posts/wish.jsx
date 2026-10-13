import { ArrowLeft } from "../more.me";
import { useEffect } from "react";
export const Wish = () => {
    useEffect(() => {
        const main_ttl = document.getElementById("main-ttl");
        main_ttl.textContent = "/wish";
    }, []);
    return (
        <div className="max-w-3xl w-full h-full flex shrink-0 justify-center items-center flex-col">
            <main className="flex flex-col gap-10 mt-10 xl:mt-50 px-5 justify-center items-start w-full">
                <a
                    href="/"
                    className="text-text-1 font-sans flex justify-center items-center gap-2 transition ease-in-out duration-200 cursor-pointer rounded-sm 
                                not-xl:flex xl:fixed xl:top-10 xl:left-20"
                >
                    <ArrowLeft />
                    Home
                </a>
                <div className="flex flex-col justify-center items-start">
                    <span className="font-semibold text-text-0 text-2xl">Wish</span>
                    <span className="text-text-1 font-sans">Oct 13, 2026</span>
                </div>
                <div className="text-text-0">
                    <p>I wish the time to go 8 years back.</p>
                </div>
            </main>
        </div>
    );
};
