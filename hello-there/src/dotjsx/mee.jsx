import { useEffect } from "react";
export const Mee = () => {
    useEffect(() => {
        const main_ttl = document.getElementById("main-ttl");
        main_ttl.textContent = "/sunny";
    }, []);
    return (
        <div className="flex shrink-0 w-full items-center justify-center my-10 xl:px-25">
            <aside className="w-full">
                <div className="hidden xl:block fixed bottom-10 left-30 text-text-1 hover:text-text-0">
                    <a href="https://github.com/isunnyprajapati">[Github]</a>
                </div>
            </aside>
            <main className="mn-1 max-w-3xl w-full shrink-0 flex flex-col items-start px-4">
                <section className="mn-2 text-text-0 flex gap-5 items-center mb-15 w-full">
                    <img className="h-22 w-auto " src="/image.png" alt="" />
                    <div className="mn-3 flex flex-col self-end">
                        <span className="text-2xl text-text-0">Sunny</span>
                        <span className="text-text-1 font-sans">A programmer I guess.</span>
                    </div>
                </section>
                <KnowMore className={"xl:hidden"} />
                <article className="w-full">
                    <span className="font-sans text-text-0 font-bold my-5">Posts</span>
                    <ul className="text-text-0 mt-4 w-full">
                        <li className="decoration-none flex not-sm:flex-col">
                            <a href="/posts/wish">Wish</a>
                            <span className="not-sm:hidden border-dark-5 grow border-b-2 border-dashed h-0 mt-4 mx-5 divide-dashed"></span>
                            <span className="text-text-1 w-fit whitespace-nowrap">Oct 13, 2026</span>
                        </li>
                    </ul>
                    <div className="py-5"></div>
                    <span className="font-sans text-text-0 font-bold my-5">Projects</span>
                    <ul className="text-text-0 mt-4 w-full">
                        <li className="decoration-none flex not-sm:flex-col">
                            <a href="https://ecribe.online" target="_blank">
                                Ecribe
                            </a>
                            <span className="not-sm:hidden border-dark-5 grow border-b-2 border-dashed h-0 mt-4 mx-5 divide-dashed"></span>
                            <span className="text-text-1 w-fit whitespace-nowrap">May 16, 2026</span>
                        </li>
                    </ul>
                </article>
                <span className="text-text-1 mt-3 italic">See ya till next time!</span>
                <div className="block xl:hidden mt-10 text-text-1 hover:text-text-0">
                    <a href="https://github.com/isunnyprajapati">[Github]</a>
                </div>
            </main>
            <aside className="w-full h-full">
                <div className="pl-3 mt-20 not-xl:hidden">
                    <KnowMore />
                </div>
            </aside>
        </div>
    );
};

const KnowMore = ({ className }) => {
    return (
        <div className={`w-full ${className}`}>
            <div className="text-text-1 inline-block mb-7 border-l-3 pl-5 border-text-1/10">
                <div className="flex-wrap justify-center items-center mr-2">
                    <span className="">You probably want to know more </span>
                    <span className="">
                        <a href="/~more" className="underline inline hover:text-text-0">
                            about me
                        </a>
                        ?
                    </span>
                </div>
            </div>
        </div>
    );
};
