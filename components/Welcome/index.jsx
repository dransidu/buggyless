import Image from "next/image";
import WelcomeImg from "../../assets/images/welcome.png";

export default function Welcome() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex sm:flex-row p-6 items-center">
                <div className="left sm:w-6/12">
                    <p className="text-center sm:text-left text-gray-600 text-base dark:text-slate-300">
                        Top Web and Mobile Apps Development Company
                    </p>
                    <p className="text-center sm:text-left text-gray-900 text-5xl sm:text-6xl font-extrabold mt-5 sm:leading-idleSize dark:text-gray-100">
                        Your Trusted <br></br> Development <br></br>Partner
                    </p>
                    <p className="text-center sm:text-left mt-5 mb-10 text-gray-600 dark:text-slate-300">
                        We deliver web and mobile app development services to
                        global businesses since 1998, with 100% project delivery
                        success. Hire the best programmers at affordable prices.
                        Our design-focused approach and project execution
                        processes help you to deliver the right solutions.
                    </p>
                    <div className="text-center sm:text-left">
                        <a
                            href="#"
                            className="px-8 py-4 mr-5 bg-primary mt-5 font-medium text-white rounded-lg dark:shadow-md dark:shadow-primary dark:hover:shadow-lg dark:hover:shadow-primary"
                        >
                            What we do
                        </a>
                        <a
                            href="#"
                            className="px-8 py-4 bg-blue-200 text-primary mt-5 font-medium font-bold rounded-lg dark:shadow-md dark:shadow-primary dark:hover:shadow-lg dark:hover:shadow-primary"
                        >
                            Our portfolio
                        </a>
                    </div>
                </div>
                <div className="order-first sm:order-2 sm:w-6/12">
                    <Image src={WelcomeImg} />
                </div>
            </div>
        </div>
    );
}
