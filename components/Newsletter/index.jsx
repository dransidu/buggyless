export default function Newsletter() {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto">
                <div className=" flex flex-col md:flex md:flex-row md:gap-8 bg-gray-700 p-10 m-5 rounded-3xl -mt-24">
                    <div className="">
                        <h3 className="text-white font-bold text-xl md:text-3xl">Sign up for our newsletter!</h3>
                        <p>
                            Stay up to date with the roadmap progress,
                            announcements and exclusive discounts feel free to
                            sign up with your email.
                        </p>
                    </div>
                    <div>
                        <div>
                            <input type="text" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
