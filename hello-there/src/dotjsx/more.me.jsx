import { useEffect } from "react";

export const MoreMe = () => {
    useEffect(() => {
        const main_ttl = document.getElementById("main-ttl");
        main_ttl.textContent = "/about";
    }, []);
    return (
        <div className="max-w-3xl w-full h-full flex shrink-0 justify-center items-center flex-col">
            <main className="flex flex-col gap-10 mt-10 xl:mt-20 px-5 justify-center items-start">
                <a
                    href="/"
                    className="text-text-1 font-sans flex justify-center items-center gap-2 transition ease-in-out duration-200 cursor-pointer rounded-sm 
                            not-xl:flex xl:fixed xl:top-10 xl:left-20"
                >
                    <ArrowLeft />
                    Home
                </a>
                <div className="flex flex-col justify-center items-start">
                    <span className="font-semibold text-text-0 text-2xl">About</span>
                    <span className="text-text-1 font-sans">A little bit about me</span>
                </div>
                <div className="text-text-0">
                    Hello, I'm Sunny. I like writing software that scales, design systems, and try to have fun. Besides programming, you'll
                    find me watching anime, or reading manga.
                </div>
            </main>
        </div>
    );
};

export const ArrowLeft = ({ className, onClick, style, title }) => {
    return (
        <svg
            className={className}
            onClick={onClick}
            style={style}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
        </svg>
    );
};
