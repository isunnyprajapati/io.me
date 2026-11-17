import { ArrowLeft } from "../more.me";
import { useEffect } from "react";
export const Knowledge = () => {
    useEffect(() => {
        const main_ttl = document.getElementById("main-ttl");
        main_ttl.textContent = "/knowledge";
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
                <section className="flex flex-col justify-center items-start">
                    <span className="font-semibold text-text-0 text-2xl">Knowledge</span>
                    <span className="text-text-1 font-sans">Nov 17, 2026</span>
                </section>
                <article className="mb-5">
                    <div className="text-text-0">
                        <p className="mb-5">
                            I've been focusing on backend for last few months. I started with full stack development but it turns out I'm
                            not a frontend guy. Maybe this is also a reason why I always get stunned when I see unique & creative UIs people
                            have created. I've also built a full stack webapp{" "}
                            <a href="ecribe.online" className="italic border-b-[0.5px] border-text-1">
                                Ecribe
                            </a>{" "}
                            and I've been trying to make its UI good but it still sucks. I should start learning Web Design.
                        </p>
                        <p className="my-5">Now, my primary focus is on backend development with golang.</p>
                    </div>
                </article>
            </main>
        </div>
    );
};
