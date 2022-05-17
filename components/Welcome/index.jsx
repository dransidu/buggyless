import Image from "next/image";
import { BadgeCheckIcon, ViewGridIcon } from "@heroicons/react/outline";
import WelcomeImg from "../../assets/images/welcome.png";

export default function Welcome() {
    return (
        <div className="dark:bg-gray-900" id="home">
            <div className="max-w-7xl mx-auto dark:bg-gray-900">
                <div className="flex flex-col sm:flex sm:flex-row p-6 items-center">
                    <div className="text-center sm:text-left sm:w-6/12 ">
                        <div className="inline-flex justify-between items-center py-1 px-1 pr-5 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200">
                            <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">
                                <BadgeCheckIcon className="w-5 h-5" />
                            </span>
                            <span className="text-sm font-medium">
                                Top Web and Mobile Apps Development Company
                            </span>
                        </div>
                        <p className="text-center sm:text-left text-gray-900 text-5xl sm:text-6xl font-extrabold mt-5 sm:leading-idleSize dark:text-gray-100">
                            Your Trusted <br></br> Development <br></br>Partner
                        </p>
                        <p className="text-center lg:pr-14 sm:text-left mt-5 mb-10 text-gray-600 dark:text-slate-300">
                            We deliver web and mobile app development services
                            to global businesses since 2020, with 100% project
                            delivery success. Hire the best programmers at
                            affordable prices. Our design-focused approach and
                            project execution processes help you to deliver the
                            right solutions.
                        </p>
                        <div className="flex flex-col mb-8 md:flex-row lg:justify-start">
                            <a
                                href="#"
                                className="text-white font-bold bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center"
                            >
                                What we do
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 bg-white-100 hover:bg-gray-100 hover:text-blue-600 border border-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white border dark:border-gray-600 font-semibold rounded-xl text-base px-6 py-2.5 text-center inline-flex justify-center items-center"
                            >
                                <ViewGridIcon className="mr-2 w-5 h-5" />
                                Explore our works
                            </a>
                        </div>
                    </div>
                    <div className="order-first sm:order-2 sm:w-6/12">
                        <Image src={WelcomeImg} alt="welcome image" />
                    </div>
                </div>
            </div>
        </div>
    );
}
