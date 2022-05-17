import Image from "next/image";
import Slider from "react-slick";
import JsImage from "../../assets/images/techstack/js.png";
import TsImage from "../../assets/images/techstack/ts.png";
import NodeImage from "../../assets/images/techstack/node.png";
import MongoImage from "../../assets/images/techstack/mongodb.png";
import MysqlImage from "../../assets/images/techstack/mysql.png";
import ReactImage from "../../assets/images/techstack/react.png";
import VueImage from "../../assets/images/techstack/vue.png";
import AwsImage from "../../assets/images/techstack/aws.png";
import AzureImage from "../../assets/images/techstack/azure.png";

export default function Techstack() {
    const technologies = [
        {
            id: 1,
            name: "Javascript",
            image: JsImage,
        },
        {
            id: 2,
            name: "Typescript",
            image: TsImage,
        },
        {
            id: 5,
            name: "ReactJS",
            image: ReactImage,
        },
        {
            id: 6,
            name: "Vue",
            image: VueImage,
        },
        {
            id: 3,
            name: "NodeJS",
            image: NodeImage,
        },
        {
            id: 4,
            name: "MongoDB",
            image: MongoImage,
        },
        {
            id: 7,
            name: "MySql",
            image: MysqlImage,
        },
        {
            id: 8,
            name: "AWS",
            image: AwsImage,
        },
        {
            id: 9,
            name: "Azure",
            image: AzureImage,
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <div className="dark:bg-gray-900 py-10" id="techstack">
            <div className="max-w-6xl mx-auto px-5">
                <div>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100 text-center">
                        Our Techstack
                    </p>
                    <Slider {...settings} className="mt-10">
                        {technologies.map((item) => {
                            return (
                                <div className="flex flex-col text-center ">
                                    <div className="bg-gray-50 rounded-lg m-5 py-8  dark:bg-gray-800 shadow shadow-sm">
                                        <div className="mb-2 ">
                                            <Image src={item.image} />
                                        </div>
                                        <span className="">{item.name}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
