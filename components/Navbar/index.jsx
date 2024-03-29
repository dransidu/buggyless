/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
    BookmarkAltIcon,
    CalendarIcon,
    CursorClickIcon,
    DesktopComputerIcon,
    DeviceMobileIcon,
    GlobeIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    ServerIcon,
    ShieldCheckIcon,
    SupportIcon,
    XIcon,
    HomeIcon,
    ViewGridIcon,
    ChipIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import LogoDarkMode from "../../assets/images/logo_darkmode.png";
import ThemeToggleButton from "./ThemeToggleButton";
import * as Scroll from "react-scroll";

const solutions = [
    {
        name: "Mobile Application",
        description:
            "Get a better understanding of where your traffic is coming from.",
        href: "#",
        icon: DeviceMobileIcon,
    },
    {
        name: "Web Application",
        description:
            "Speak directly to your customers in a more meaningful way.",
        href: "#",
        icon: GlobeIcon,
    },
    {
        name: "Desktop Application",
        description:
            "Speak directly to your customers in a more meaningful way.",
        href: "#",
        icon: DesktopComputerIcon,
    },
    {
        name: "UI/UX Design",
        description: "Your customers' data will be safe and secure.",
        href: "#",
        icon: CursorClickIcon,
    },
    {
        name: "DevOps",
        description:
            "Connect with third-party tools that you're already using.",
        href: "#",
        icon: ServerIcon,
    },
];
const mobileNav = [
    {
        name: "Home",
        href: "home",
        icon: HomeIcon,
    },
    {
        name: "About",
        href: "about",
        icon: SupportIcon,
    },
    {
        name: "Services",
        href: "services",
        icon: ViewGridIcon,
    },
    {
        name: "Technology",
        href: "#",
        icon: ChipIcon,
    },
];
const callsToAction = [
    { name: "Watch Demo", href: "#", icon: PlayIcon },
    { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
    {
        name: "Help Center",
        description:
            "Get all of your questions answered in our forums or contact support.",
        href: "#",
        icon: SupportIcon,
    },
    {
        name: "Guides",
        description:
            "Learn how to maximize our platform to get the most out of it.",
        href: "#",
        icon: BookmarkAltIcon,
    },
    {
        name: "Events",
        description:
            "See what meet-ups and other events we might be planning near you.",
        href: "#",
        icon: CalendarIcon,
    },
    {
        name: "Security",
        description: "Understand how we take your privacy seriously.",
        href: "#",
        icon: ShieldCheckIcon,
    },
];
const recentPosts = [
    { id: 1, name: "Boost your conversion rate", href: "#" },
    {
        id: 2,
        name: "How to use search engine optimization to drive traffic to your site",
        href: "#",
    },
    { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    return (
        <Popover className="fixed bg-white bg-opacity-80 backdrop-blur-md dark:bg-gray-900 dark:bg-opacity-80 dark:backdrop-blur-md sticky top-0 z-40 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Buggyless</span>
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
                    </div>

                    <div className="flex flex-row items-center -mr-2 -my-2 md:hidden">
                        <a href="#" className="mr-5">
                            <ThemeToggleButton />
                        </a>
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-gray-800 ">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon
                                className="h-6 w-6 dark:text-gray-100"
                                aria-hidden="true"
                            />
                        </Popover.Button>
                    </div>
                    <Popover.Group
                        as="nav"
                        className="hidden md:flex space-x-10"
                    >
                        <Scroll.Link
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            delay={100}
                            className="text-base font-medium text-gray-900 dark:text-gray-50 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer"
                        >
                            Home
                        </Scroll.Link>
                        <Scroll.Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            delay={100}
                            className="text-base font-medium text-gray-900 dark:text-gray-50 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer"
                        >
                            About
                        </Scroll.Link>
                        <Scroll.Link
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            delay={100}
                            className="text-base font-medium text-gray-900 dark:text-gray-50 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer"
                        >
                            Services
                        </Scroll.Link>
                        {/*<Popover className="relative">*/}
                        {/*    {({open}) => (*/}
                        {/*        <>*/}
                        {/*            <Popover.Button*/}
                        {/*                className={classNames(*/}
                        {/*                    open*/}
                        {/*                        ? "text-gray-900 dark:text-gray-100"*/}
                        {/*                        : "text-gray-500 dark:text-gray-300",*/}
                        {/*                    "group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none "*/}
                        {/*                )}*/}
                        {/*            >*/}
                        {/*                <span>Solutions</span>*/}
                        {/*                <ChevronDownIcon*/}
                        {/*                    className={classNames(*/}
                        {/*                        open*/}
                        {/*                            ? "text-gray-600 dark:text-gray-100"*/}
                        {/*                            : "text-gray-400 dark:text-gray-300",*/}
                        {/*                        "ml-2 h-5 w-5 group-hover:text-gray-500 dark:group-hover:text-gray-100"*/}
                        {/*                    )}*/}
                        {/*                    aria-hidden="true"*/}
                        {/*                />*/}
                        {/*            </Popover.Button>*/}

                        {/*            <Transition*/}
                        {/*                as={Fragment}*/}
                        {/*                enter="transition ease-out duration-200"*/}
                        {/*                enterFrom="opacity-0 translate-y-1"*/}
                        {/*                enterTo="opacity-100 translate-y-0"*/}
                        {/*                leave="transition ease-in duration-150"*/}
                        {/*                leaveFrom="opacity-100 translate-y-0"*/}
                        {/*                leaveTo="opacity-0 translate-y-1"*/}
                        {/*            >*/}
                        {/*                <Popover.Panel*/}
                        {/*                    className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">*/}
                        {/*                    <div*/}
                        {/*                        className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">*/}
                        {/*                        <div*/}
                        {/*                            className="relative grid gap-6 bg-white dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">*/}
                        {/*                            {solutions.map((item) => (*/}
                        {/*                                <a*/}
                        {/*                                    key={item.name}*/}
                        {/*                                    href={item.href}*/}
                        {/*                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900"*/}
                        {/*                                >*/}
                        {/*                                    <item.icon*/}
                        {/*                                        className="flex-shrink-0 h-6 w-6 text-primary "*/}
                        {/*                                        aria-hidden="true"*/}
                        {/*                                    />*/}
                        {/*                                    <div className="ml-4">*/}
                        {/*                                        <p className="text-base font-medium text-gray-900 dark:text-gray-100">*/}
                        {/*                                            {item.name}*/}
                        {/*                                        </p>*/}
                        {/*                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">*/}
                        {/*                                            {*/}
                        {/*                                                item.description*/}
                        {/*                                            }*/}
                        {/*                                        </p>*/}
                        {/*                                    </div>*/}
                        {/*                                </a>*/}
                        {/*                            ))}*/}
                        {/*                        </div>*/}
                        {/*                        <div*/}
                        {/*                            className="px-5 py-5 bg-gray-50 dark:bg-gray-700 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">*/}
                        {/*                            {callsToAction.map(*/}
                        {/*                                (item) => (*/}
                        {/*                                    <div*/}
                        {/*                                        key={item.name}*/}
                        {/*                                        className="flow-root"*/}
                        {/*                                    >*/}
                        {/*                                        <a*/}
                        {/*                                            href={*/}
                        {/*                                                item.href*/}
                        {/*                                            }*/}
                        {/*                                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"*/}
                        {/*                                        >*/}
                        {/*                                            <item.icon*/}
                        {/*                                                className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-100"*/}
                        {/*                                                aria-hidden="true"*/}
                        {/*                                            />*/}
                        {/*                                            <span className="ml-3 dark:text-gray-100">*/}
                        {/*                                                {*/}
                        {/*                                                    item.name*/}
                        {/*                                                }*/}
                        {/*                                            </span>*/}
                        {/*                                        </a>*/}
                        {/*                                    </div>*/}
                        {/*                                )*/}
                        {/*                            )}*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </Popover.Panel>*/}
                        {/*            </Transition>*/}
                        {/*        </>*/}
                        {/*    )}*/}
                        {/*</Popover>*/}

                        <Scroll.Link
                            to="techstack"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            delay={100}
                            className="text-base font-medium text-gray-900 dark:text-gray-50 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer"
                        >
                            Technology
                        </Scroll.Link>
                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 ">
                        <a
                            href="#"
                            className="whitespace-nowrap text-base font-medium text-gray-700 hover:text-gray-900 "
                        >
                            <ThemeToggleButton />
                        </a>
                        <Scroll.Link
                            to="contactus"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            delay={100}
                            className="ml-8 text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center cursor-pointer"
                        >
                            Contact us
                        </Scroll.Link>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute z-40 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 dark:bg-gray-800">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="sr-only">Buggyless</span>
                                    <span className="block dark:hidden">
                                        <Image
                                            src={Logo}
                                            alt="Buggyless logo"
                                        />
                                    </span>
                                    <span className="hidden dark:block">
                                        <Image
                                            src={LogoDarkMode}
                                            alt="Buggyless logo"
                                        />
                                    </span>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-gray-900 dark:text-gray-100">
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {mobileNav.map((item) => (
                                        <Scroll.Link
                                            key={item.name}
                                            to={item.href}
                                            spy={true}
                                            smooth={true}
                                            offset={-80}
                                            duration={500}
                                            delay={100}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointor"
                                        >
                                            <item.icon
                                                className="flex-shrink-0 h-6 w-6 text-primary"
                                                aria-hidden="true"
                                            />
                                            <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-100">
                                                {item.name}
                                            </span>
                                        </Scroll.Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            {/* <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Pricing
                                </a>

                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Docs
                                </a>
                                {resources.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div> */}
                            <div>
                                <Scroll.Link
                                    to="contactus"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    delay={100}
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary dark:shadow-md cursor-pointer"
                                >
                                    Contact us
                                </Scroll.Link>
                                {/* <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{" "}
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-500"
                                    >
                                        Sign in
                                    </a>
                                </p> */}
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
