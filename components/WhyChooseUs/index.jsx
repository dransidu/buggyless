import {
    LightBulbIcon,
    CashIcon,
    SupportIcon,
} from "@heroicons/react/outline";

export default function WhyChooseUs() {
    const servicesList = [
        {
            icon: CashIcon,
            title: "Save Cost And Launch Quickly",
            Description:
                "Our Development Process is Effitient And Fully Transparent, Allowing us To Deliver Your Software Product On Time And On Budget.",
        },
        {
            icon: LightBulbIcon,
            title: "The Right Solution For Your Needs",
            Description:
                "Client's Success is Our Priority. We Carefully Align Your Business Requirements With Software Functionality To Ensure The Best Value.",
        },
        {
            icon: SupportIcon,
            title: "Support After Launch",
            Description:
                "Our Work Doesn't Stop When Your Custom Product Goes Live. Our Reliable Support Team Will Ensure Your Platform Runs Smoothly.",
        },
    ];

    return (
        <div id="services" className="py-20 bg-white dark:bg-gray-900 sm:pt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100 text-center">
                    Why Choose Us
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                    {servicesList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center rounded-lg p-10"
                            >
                                <div className="flex justify-center items-center h-16 w-16 rounded-full bg-blue-100 dark:bg-primary">
                                    <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-primary dark:text-white"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className="text-center font-bold text-gray-600 dark:text-gray-300 my-4">
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
