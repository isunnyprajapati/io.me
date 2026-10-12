export const Mee = () => {
    return (
        <main className="mn-1 mt-10 max-w-3xl w-full shrink-0 flex flex-col items-start px-4">
            <section className="mn-2 text-text-0 flex gap-5 items-center mb-10 w-full">
                <img className="h-22 w-auto " src="/image.png" alt="" />
                <div className="mn-3 flex flex-col self-end">
                    <span className="text-2xl text-text-0">Sunny</span>
                    <span className="text-text-1 text-xl font-sans">A programmer i guess.</span>
                </div>
            </section>
            <div className="w-full">
                <aside className="">
                    <div className="text-text-1 text-xl inline-block mb-7 border-l-4 pl-2 border-text-1/20">
                        <span className="flex-wrap justify-center items-center mr-2">
                            You Probably want to know more{" "}
                            <a href="/more-me" className="underline inline hover:text-text-0">
                                about me
                            </a>
                            ?
                        </span>
                    </div>
                </aside>
            </div>
            <article className="w-full">
                <span className="font-sans text-text-0 text-lg font-bold my-5">Projects</span>
                <ul className="text-text-0 mt-4 text-xl w-full">
                    <li className="decoration-none flex not-sm:flex-col">
                        <a href="https://ecribe.online" target="_blank">
                            ecribe
                        </a>
                        <span className="not-sm:hidden border-dark-5 w-full border-b border-dashed h-0 mt-5 mx-5 divide-dashed"></span>
                        <span className="text-text-1 w-fit whitespace-nowrap">May 16, 2026</span>
                    </li>
                </ul>
            </article>
            <span className="text-text-1 mt-3 italic">See ya till next time!</span>
        </main>
    );
};
