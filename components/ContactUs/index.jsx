export default function ContactUs() {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex sm:flex-row p-6">
                    <div className="p-5 sm:w-1/2">

                    </div>
                    <div className="p-5 sm:w-1/2">
                        <div className="px-4">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 px-4 py-3 focus:outline-none focus:border focus:border-1 focus:ring focus:ring-1 focus:ring-primary focus:border-primary w-full shadow-sm sm:text-sm border border-gray-300 rounded-lg"
                                    />
                                </div> <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-white">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 px-4 py-3 focus:outline-none focus:border focus:border-1 focus:ring focus:ring-1 focus:ring-primary focus:border-primary w-full shadow-sm sm:text-sm border border-gray-300  rounded-lg"
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}