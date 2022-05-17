import Image from "next/dist/client/image";
import gurantee from "../../assets/images/gurantee.png";

export default function Gurantee() {
    return (
        <div className="dark:bg-gray-900 pb-48">
            <div className="max-w-6xl mx-auto px-5 flex flex-col items-center sm:flex sm:flex-row">
                <div className="sm:w-7/12">
                    <p className="text-gray-600 text-base dark:text-slate-300">
                        Guaranteed Customer Satisfaction
                    </p>
                    <h3 className="text-2xl font-black dark:text-white lg:text-4xl mt-5">
                        We Promise. We Deliver.
                    </h3>
                    <p className="text-gray-600 text-base dark:text-slate-300 mt-5">
                        <span className="text-gray-800 dark:text-slate-200 font-semibold">
                            Have an idea?{" "}
                        </span>
                        Work with us and see how it goes. We promise to go the
                        extra mile for every project that we take onboard.
                    </p>
                    <p className="text-gray-600 text-base dark:text-slate-300 mt-5">
                        The{" "}
                        <span className="text-gray-800 dark:text-slate-200 font-semibold">
                            first 7 days are on us with ZERO upfront investment.
                        </span>
                    </p>
                    <a
                        href="#"
                        className="mt-5 text-white font-bold bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center"
                    >
                        What we do
                    </a>
                </div>
                <div className="sm:w-5/12">
                    <Image src={gurantee} alt="Buggyless guarantee" />
                </div>
            </div>
        </div>
    );
}
