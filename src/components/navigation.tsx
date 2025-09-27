import clsx from "clsx/lite";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Navigation({ children }: { children: React.ReactNode; }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-center gap-12">

            <AnimatePresence>
                {isOpen &&
                    <>
                        <motion.div
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            transition={{ ease: "easeInOut", duration: 0.5 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            exit={{ filter: "blur(20px)", opacity: 0 }}
                            className="hidden lg:flex gap-4">
                            {children}
                        </motion.div>

                        <motion.dialog
                            open={isOpen}
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            transition={{ ease: "easeInOut", duration: 0.25 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            exit={{ filter: "blur(20px)", opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="lg:hidden absolute z-50 w-full h-full flex flex-col gap-4 top-0 bg-zinc-900/20 backdrop-blur-md">

                            <div className="fixed bottom-20 sm:bottom-32 left-4 sm:left-8 flex flex-col items-start justify-center gap-4">
                                

                                <MobileLink href="/about">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" aria-hidden>
                                        <title>Info Icon</title>
                                        <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22" opacity=".5" />
                                        <path fill="currentColor" d="M7.5 11.11c0 1.368 1.319 2.804 2.529 3.833c.823.7 1.235 1.05 1.971 1.05s1.148-.35 1.971-1.05c1.21-1.03 2.529-2.465 2.529-3.834c0-2.677-2.475-3.676-4.5-1.608c-2.025-2.068-4.5-1.069-4.5 1.608" />
                                    </svg>
                                    About
                                </MobileLink>

                                

                                <motion.button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    initial={{ transform: "translateY(100px)", filter: "blur(20px)", opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 25, damping: 2, mass: 0.1 }}
                                    animate={{ transform: "translateY(0px)", filter: "blur(0px)", opacity: 1 }}
                                    exit={{ transform: "translateY(100px)", filter: "blur(20px)", opacity: 0 }}
                                    className="w-fit flex items-center justify-center gap-3 text-lg sm:text-2xl text-zinc-100 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" aria-hidden>
                                        <title>Close Icon</title>
                                        <path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5" />
                                        <path fill="currentColor" d="M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 1 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" />
                                    </svg>
                                    Close
                                </motion.button>
                            </div>
                        </motion.dialog>
                    </>
                }
            </AnimatePresence>

            <button type="button" onClick={() => setIsOpen(prev => !prev)} className="w-6 sm:w-8 h-fit text-white cursor-pointer hover:outline-2 focus-visible:outline-2 outline-offset-1 outline-zinc-100/20 focus-visible:outline-white rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className={clsx("transition-all duration-300 ease-in-out", isOpen ? "rotate-90" : "rotate-0")}>
                    <title>Menu Icon</title>
                    <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5" />
                    <path fill="currentColor" d="M13.024 14.56c.493-.197.739-.296.932-.465c.05-.043.096-.09.139-.139c.17-.193.268-.44.465-.932c.924-2.31 1.386-3.465.938-4.124a1.5 1.5 0 0 0-.398-.398c-.66-.448-1.814.014-4.124.938c-.493.197-.74.295-.933.465c-.049.043-.095.09-.138.139c-.17.193-.268.44-.465.932c-.924 2.31-1.386 3.464-.938 4.124a1.5 1.5 0 0 0 .398.398c.66.448 1.814-.014 4.124-.938" />
                </svg>
            </button>
        </div>
    );
}

type MobileLinkProps = {
    href: string;
    className?: string;
    children: React.ReactNode;
};

function MobileLink({ href, className, children }: MobileLinkProps) {
    return (
        <motion.a
            href={href}
            initial={{ transform: "translateY(100px)", filter: "blur(20px)", opacity: 0 }}
            transition={{ type: "spring", stiffness: 25, damping: 2, mass: 0.1 }}
            animate={{ transform: "translateY(0px)", filter: "blur(0px)", opacity: 1 }}
            exit={{ transform: "translateY(100px)", filter: "blur(20px)", opacity: 0 }}
            className={clsx("w-fit flex items-center justify-center gap-3 text-lg sm:text-2xl text-zinc-100 cursor-pointer", className)}>
            {children}
        </motion.a>
    );
}