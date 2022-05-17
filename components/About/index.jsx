import Image from "next/image";
import aboutImg from "../../assets/images/about.png";

export default function About() {
    return (
        <div className="dark:bg-gray-900" id="about">
            <div className=" max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex sm:flex-row p-6 items-center">
                    <div className="p-5 sm:w-1/2">
                        <Image src={aboutImg} alt="Buggyless Aboutus"/>
                    </div>
                    <div className="right sm:w-1/2">
                        <h1 className="font-extrabold text-4xl dark:text-gray-100">
                            Hire the Best Web and Mobile App Developers
                        </h1>
                        <p className="mt-5 text-gray-500 dark:text-slate-300">
                            Buggyless is a top web design agency and software
                            development company with a large pool of software
                            developers available for dedicated and fixed
                            time/cost projects. Hire web developers from
                            IndiaNIC who have proven expertise in trending web
                            technologies like Javascript, Typescript, NextJS,
                            front-end technologies like ReactJS and back-end
                            technologies like Node.js to develop custom and
                            responsive websites, web apps and eCommerce
                            solutions. <br />
                            <br /> Our Android app, iOS app and cross-platform
                            mobile app developers are adroit in the latest
                            mobile technologies and tools like Android Studio,
                            Xcode, Java, React Native, etc. to build next-gen
                            mobile applications.
                        </p>
                        <div className="text-center sm:text-left mt-8">
                            <a
                                href="#"
                                className="text-white font-bold bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center"
                            >
                                What we do
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
