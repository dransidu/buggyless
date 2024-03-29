import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import LogoDarkMode from "../../assets/images/logo_darkmode.png";
import { useTheme } from "next-themes";

export default function Footer() {
    const { theme } = useTheme();

    return (
        <div className="bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-5 py-16">
                <div className="flex flex-col">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                        <div className="col-span-2 md:col-span-2">
                            <a href="#">
                                <span className="sr-only">Workflow</span>
                                <span className="block dark:hidden">
                                    <Image src={Logo} alt="Buggyless logo" />
                                </span>
                                <span className="hidden dark:block">
                                    <Image
                                        src={LogoDarkMode}
                                        alt="Buggyless logo"
                                    />
                                </span>
                            </a>
                            <p className="text-gray-600 text-base mt-4 dark:text-gray-400">
                                Buggyless is a Srilankan{"'"}s leading digital
                                solutions company. We value quality, creativity
                                and problem-solving to grow your business. Our
                                specialized services answer your most demanding
                                requirements with precision and innovative
                                solutions that deliver relentless growth to your
                                brand.
                            </p>
                        </div>
                        <div className="resources">
                            <span className="text-base font-semibold text-gray-600 uppercase dark:text-white">
                                Resouces
                            </span>
                            <ul>
                                <li className="my-4">
                                    <a
                                        href="#"
                                        rel="noreferrer nofollow"
                                        className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                                    >
                                        Figma
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="#"
                                        rel="noreferrer nofollow"
                                        className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                                    >
                                        Tailwind CSS
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="#"
                                        rel="noreferrer nofollow"
                                        className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="#"
                                        rel="noreferrer nofollow"
                                        className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                                    >
                                        Affiliate program
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="resources">
                            <span className="mb-6 text-base font-semibold text-gray-600 uppercase dark:text-white">
                                HELP & SUPPORT
                            </span>
                            <ul>
                                <li className="my-4">
                                    <a
                                        href="#"
                                        rel="noreferrer nofollow"
                                        className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                                    >
                                        Contact us
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="#"
                                        rel="noreferrer nofollow"
                                        className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                                    >
                                        Knowledge Center{" "}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="resources">
                            <span className="mb-6 text-base font-semibold text-gray-600 uppercase dark:text-white">
                                FOLLOW US
                            </span>
                            <ul>
                                <li className="my-4">
                                    <a
                                        href="#"
                                        rel="noreferrer nofollow"
                                        className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                                    >
                                        Facebook
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="#"
                                        rel="noreferrer nofollow"
                                        className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                                    >
                                        Linkedin
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="resources">
                            <span className="mb-6 text-base font-semibold text-gray-600 uppercase dark:text-white">
                                LEGAL
                            </span>
                            <ul>
                                <li className="my-4">
                                    <a
                                        href="#"
                                        rel="noreferrer nofollow"
                                        className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="#"
                                        rel="noreferrer nofollow"
                                        className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                                    >
                                        Terms & Conditions{" "}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-8 border-gray-200 dark:border-gray-700 lg:my-12" />
                    <span className="block text-center text-gray-600 dark:text-slate-400 text-base">
                        © 2019 - 2022
                        <a href="#"> Buggyless</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </div>
    );
}
