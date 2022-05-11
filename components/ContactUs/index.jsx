import {
    MailIcon,
    PhoneIcon
} from "@heroicons/react/outline";

export default function ContactUs() {
    return (
        <div id="contactus" className="dark:bg-gray-900 py-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex sm:flex-row p-6 items-center">
                    <div className="p-5 sm:w-1/2">
                        <div className="">
                            <h1 className="font-extrabold text-4xl dark:text-gray-100">Let's work together</h1>
                            <p className="mt-5 text-gray-500 dark:text-slate-300 mr-8">We're just one click away to help you
                                take your brand or product from great to
                                incredible. Fill in the form to share more details about your project. Or your favorite
                                gum flavor. Either way, we’d love to talk.
                            </p>
                            <span className="flex flex-row pt-8">
                                <PhoneIcon className="w-6 text-gray-500 dark:text-slate-300 mr-5"/>
                                <p className="text-gray-500 dark:text-slate-300 text-xl">+94 (0) 74 1100 811</p>
                            </span>
                            <span className="flex flex-row pt-8">
                                <MailIcon className="w-6 text-gray-500 dark:text-slate-300 mr-5"/>
                                <p className="text-gray-500 dark:text-slate-300 text-xl">buggyless.com@gmail.com</p>
                            </span>
                        </div>
                    </div>
                    <div className="p-5 sm:w-1/2">
                        <div className="bg-primary px-8 py-8 rounded-3xl">
                            <h3 className="pb-6 text-white font-bold text-xl">Send us a message</h3>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-white ">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        placeholder="John"
                                        className="mt-1 px-4 py-3 focus:outline-none focus:border focus:border-1 focus:ring focus:ring-1 focus:ring-primary focus:border-primary w-full shadow-sm sm:text-sm border border-gray-300 rounded-xl"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-white ">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        placeholder="Smith"
                                        className="mt-1 px-4 py-3 focus:outline-none focus:border focus:border-1 focus:ring focus:ring-1 focus:ring-primary focus:border-primary w-full shadow-sm sm:text-sm border border-gray-300 rounded-xl"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-white ">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        placeholder="For web development"
                                        className="mt-1 px-4 py-3 focus:outline-none focus:border focus:border-1 focus:ring focus:ring-1 focus:ring-primary focus:border-primary w-full shadow-sm sm:text-sm border border-gray-300 rounded-xl"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-white ">
                                        Email address
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        placeholder="john@mail.com"
                                        className="mt-1 px-4 py-3 focus:outline-none focus:border focus:border-1 focus:ring focus:ring-1 focus:ring-primary focus:border-primary w-full shadow-sm sm:text-sm border border-gray-300 rounded-xl"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-white ">
                                        Massege
                                    </label>
                                    <textarea
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        placeholder="Leave your massege"
                                        rows="5"
                                        className="mt-1 px-4 py-3 focus:outline-none focus:border focus:border-1 focus:ring focus:ring-1 focus:ring-primary focus:border-primary w-full shadow-sm sm:text-sm border border-gray-300 rounded-xl"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-6">
                                    <button className="w-full py-4 rounded-xl font-bold text-white bg-gray-900">Let's
                                        tallk
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}