import Image from "next/image";
import Dinitha from "../../assets/images/team/dinitha.png";
import Senan from "../../assets/images/team/senan.png";
import Nipuna from "../../assets/images/team/nipuna.png";
import FacebookIcon from "../../assets/images/icons/facebook.svg";
import LinkedinIcon from "../../assets/images/icons/linkedin.svg";
import TwitterIcon from "../../assets/images/icons/twitter.svg";

export default function OurTeam() {
    const teamList = [
        {
            img: Dinitha,
            name: "Dinitha Ransidu",
            designation: "Fullstack Developer",
            social: {
                linkedin: "#",
            },
        },
        {
            img: Senan,
            name: "Senan Randiv",
            designation: "Frontend Developer",
            social: {
                linkedin: "#",
            },
        },
        {
            img: Nipuna,
            name: "Prabhath Nipuna",
            designation: "UI/UX Designer",
            social: {
                linkedin: "#",
            },
        },
    ];

    return (
        <div
            id="services"
            className="py-20 bg-gray-100 dark:bg-gray-900 sm:pt-10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100 text-center">
                    Our Team
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                    {teamList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center rounded-lg p-10 bg-white dark:bg-gray-800 shadow-lg "
                            >
                                <div className="rounded-lg p-10 m-5 bg-white dark:bg-gray-800">
                                    <div className="flex justify-center items">
                                        <div className=" h-24 w-24 ring ring-5 ring-primary rounded-full">
                                            <Image
                                                src={item.img}
                                                alt={item.name}
                                                className="rounded-full"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-center font-bold text-lg text-gray-600 dark:text-gray-300 mt-5">
                                        {item.name}
                                    </h3>
                                    <h3 className="text-center font-medium text-gray-600 dark:text-gray-300 my-2">
                                        {item.designation}
                                    </h3>
                                    <p className="flex flex-row space-x-5 mt-5">
                                        <a href="#" className="w-8">
                                            <Image
                                                src={LinkedinIcon}
                                                alt="linkedin"
                                            />
                                        </a>
                                        <a href="#" className="w-8">
                                            <Image
                                                src={TwitterIcon}
                                                alt="linkedin"
                                            />
                                        </a>
                                        <a href="#" className="w-8">
                                            <Image
                                                src={FacebookIcon}
                                                alt="linkedin"
                                            />
                                        </a>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
