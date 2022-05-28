import Image from "next/image";
import Slider from "react-slick";

import FirstClient from "../../assets/images/clients/01.jpg";
import SecondClient from "../../assets/images/clients/02.jpg";
import ThirdClient from "../../assets/images/clients/03.jpg";
import FourthClient from "../../assets/images/clients/04.png";
import { NextArrow, PreviousArrow } from "../NavArrows";

export default function FeedBack() {
    const servicesList = [
        {
            img: FirstClient,
            name: "Ann Jose",
            designation: "CEO at JohnPrism",
            Description:
                "Our web developers create custom web and web application solutions. We deliver web presence to help you grow your business using the best web technologies.",
        },
        {
            img: SecondClient,
            name: "John Doe",
            designation: "CTO at JohnPrime",
            Description:
                "Our web developers create custom web and web application solutions. We deliver web presence to help you grow your business using the best web technologies.",
        },
        {
            img: ThirdClient,
            name: "Kane Wiliam",
            designation: "CEO at KOKOA",
            Description:
                "Our web developers create custom web and web application solutions. We deliver web presence to help you grow your business using the best web technologies.",
        },
        {
            img: FourthClient,
            name: "Kevin Josh",
            designation: "CEO at KOKOA",
            Description:
                "Our web developers create custom web and web application solutions. We deliver web presence to help you grow your business using the best web technologies.",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div
            id="services"
            className="py-20 bg-primary dark:bg-primary sm:pt-10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="mt-2 text-3xl text-gray-100 leading-8 font-extrabold tracking-tight sm:text-4xl dark:text-gray-100 text-center">
                    What Our Client{"'"}s Say About Us
                </p>
                <Slider
                    {...settings}
                    className="flex flex-row justify-between mt-10"
                >
                    {servicesList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center"
                            >
                                <div className="rounded-lg p-10 m-5 bg-white dark:bg-gray-800 shadow-lg ">
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
                                    <p className="text-center text-gray-600 dark:text-gray-400">
                                        {item.Description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}
