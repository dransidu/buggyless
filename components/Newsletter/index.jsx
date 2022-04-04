export default function Newsletter() {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex md:justify-between md:flex-row md:gap-8 bg-gray-800 dark:bg-gray-700 p-14 m-5 rounded-3xl -mt-24 items-center">
                    <div className="md:w-5/12">
                        <h3 className="text-white font-bold text-xl md:text-3xl">
                            Sign up for our newsletter!
                        </h3>
                        <p className="text-gray-300 mt-3 text-sm">
                            Stay up to date with the roadmap progress,
                            announcements and exclusive discounts feel free to
                            sign up with your email.
                        </p>
                    </div>
                    <div className="md:w-5/12">
                        <div className="flex flex-col md:flex md:flex-row gap-2">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="bg-white rounded-xl px-6 py-2.5 w-full border border-transparent focus:outline-none focus:ring focus:ring focus:ring-2 focus:ring-primary"
                            />
                            <button className="bg-primary px-6 py-2.5 font-bold text-white rounded-xl">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
