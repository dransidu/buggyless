/* This example requires Tailwind CSS v2.0+ */
import {
  PresentationChartBarIcon,
  CursorClickIcon,
  TerminalIcon,
  CloudUploadIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Discover",
    description:
      "We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.",
    icon: PresentationChartBarIcon,
  },
  {
    name: "Design",
    description:
      "Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users.",
    icon: CursorClickIcon,
  },
  {
    name: "Develop",
    description:
      "Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions.",
    icon: TerminalIcon,
  },
  {
    name: "Deploy",
    description:
      "We take an iterative approach to both our work and our practice, always looking for ways to improve what we do.",
    icon: CloudUploadIcon,
  },
];

export default function DevProcess() {
  return (
    <div className="py-12 bg-white dark:bg-gray-900 sm:pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          {/* <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                        Transactions
                    </h2> */}
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            We Simplify Software Development Process
          </p>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Lorem ipsum dolor sit amet consect adipisicing elit.
                        Possimus magnam voluptatum cupiditate veritatis in
                        accusamus quisquam.
                    </p> */}
        </div>

        <div className="mt-10 sm:mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-primary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-slate-300">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-slate-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
