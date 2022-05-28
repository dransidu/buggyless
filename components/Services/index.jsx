import {
    CursorClickIcon,
    DeviceMobileIcon,
    GlobeIcon,
    ServerIcon,
    ShieldCheckIcon,
    SupportIcon,
} from "@heroicons/react/outline";

export default function Services() {
    const servicesList = [
        {
            icon: GlobeIcon,
            title: "Web Development",
            Description:
                "Our web developers create custom web and web application solutions. We deliver web presence to help you grow your business using the best web technologies.",
        },
        {
            icon: DeviceMobileIcon,
            title: "Mobile Apps",
            Description:
                "We build intuitive and engaging Android, iOS and cross-platform apps for businesses, consumers and enterprises that end users love and adapt to them very quickly.",
        },
        {
            icon: CursorClickIcon,
            title: "UI/UX Design",
            Description:
                "Starting from concept, information architecture, visual identity and UI/UX design, our team delivers dazzling experiences for maximum user engagement.",
        },
        {
            icon: ServerIcon,
            title: "DevOps",
            Description:
                "Our DevOps experts help you with secured & stable infrastructure management for Continuous integration and Continuous Delivery for faster releases.",
        },
        {
            icon: ShieldCheckIcon,
            title: "QA Services",
            Description:
                "Our QA engineers don’t just test, they make your software application successful ensuring quality delivery with expert manual and automated testing services.",
        },
        {
            icon: SupportIcon,
            title: "Hire Dedicated Developers",
            Description:
                "Create your own team of developers for your software development project on short term, long term or permanent basis with guaranteed project delivery at affordable prices.",
        },
    ];

    return (
        <div
            id="services"
            className="py-20 bg-gray-100 dark:bg-gray-900 sm:pt-10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100 text-center">
                    Our Services
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                    {servicesList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center rounded-lg p-10 bg-white dark:bg-gray-800 shadow-lg "
                            >
                                <div className="flex justify-center items-center h-16 w-16 rounded-full bg-blue-100 dark:bg-primary">
                                    <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-primary dark:text-white"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className="text-center font-bold text-gray-600 dark:text-gray-300 my-5">
                                    {item.title}
                                </h3>
                                <p className="text-center text-gray-600 dark:text-gray-400">
                                    {item.Description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
