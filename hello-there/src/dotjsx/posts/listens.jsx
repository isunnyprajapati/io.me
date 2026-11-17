import { ArrowLeft } from "../more.me";
import { useEffect } from "react";
export const Listens = () => {
    useEffect(() => {
        const main_ttl = document.getElementById("main-ttl");
        main_ttl.textContent = "/listens";
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
                    <span className="font-semibold text-text-0 text-2xl">iListen</span>
                    <span className="text-text-1 font-sans">Nov 2, 2026</span>
                </section>
                <article className="mb-5">
                    <div className="text-text-0 mb-5">
                        <p className="font-sans italic">These are some songs I often listen.</p>
                        <ul className="text-text-1 mt-4">
                            <li className="flex gap-5 ">
                                <a href="https://music.apple.com/in/album/about-you/1850018862?i=1850019038" className="">
                                    About you
                                </a>
                                -<span>The 1975</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    Apocalypse
                                </a>
                                -<span>CigAfterSex</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    Sunset
                                </a>
                                -<span>CigAfterSex</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    Sweet
                                </a>
                                -<span>CigAfterSex</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    K.
                                </a>
                                -<span>CigAfterSex</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    Cry
                                </a>
                                -<span>CigAfterSex</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    Falling in Love
                                </a>
                                -<span>CigAfterSex</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    August
                                </a>
                                -<span>Taylor Swift</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    Is It Just Me?
                                </a>
                                -<span>Sasha Alex Sloan</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    This Town (feat. Sasha Sloan)
                                </a>
                                -<span>Sasha Alex Sloan</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    Sailor Song
                                </a>
                                -<span>Gigi Perez</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    hometown
                                </a>
                                -<span>Jeremy Zucker</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    Normal People (feat. rei brown)
                                </a>
                                -<span>Joji</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className=""></a>-<span></span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className=""></a>-<span></span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className=""></a>-<span></span>
                            </li>
                        </ul>
                    </div>
                    <div className="text-text-0 mb-5">
                        <p className="font-sans italic">
                            Here are some <span className="font-bold line-through">melodic reverie</span>.
                        </p>
                        <ul className="text-text-1 mt-4">
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    about you
                                </a>
                                -<span>The 1975</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    august
                                </a>
                                -<span>Taylor Swift</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    cardigan
                                </a>
                                -<span>Taylor Swift</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    closer to you
                                </a>
                                -<span>kanegi</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    probably
                                </a>
                                -<span>kanegi</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    side street love
                                </a>
                                -<span>kanegi</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    double take
                                </a>
                                -<span>Dhruv</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    I Think They Call This Love (Cover)
                                </a>
                                -<span>Matthew Ifield</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    Fallin' All in You
                                </a>
                                -<span>Shawn Mendes</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    Forever
                                </a>
                                -<span>rei brown</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    Perfect
                                </a>
                                -<span>Ed Sheeran</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    Shape of You
                                </a>
                                -<span>Ed Sheeran</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    Dandelions
                                </a>
                                -<span>Ruth B.</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className="">
                                    Umbrella
                                </a>
                                -<span>Ember Island</span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className=""></a>-<span></span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className=""></a>-<span></span>
                            </li>
                            <li className="flex gap-5 ">
                                <a href="" className=""></a>-<span></span>
                            </li>
                        </ul>
                    </div>
                    <div className="text-text-0 mb-5">
                        <p className="font-sans italic">
                            Hindi playlist is private <span className="font-bold">hehehe</span>.
                        </p>
                    </div>
                </article>
            </main>
        </div>
    );
};
