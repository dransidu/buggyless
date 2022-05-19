import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";

export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="flex items-center cursor-pointer mx-5" onClick={onClick}>
            <div className="flex items-center justify-center bg-white dark:bg-gray-800 rounded-full w-10 h-10 shadow-lg">
                <ChevronRightIcon className="h-6 w-6" />
            </div>
        </div>
    );
}
export function PreviousArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div className="flex items-center cursor-pointer mx-5" onClick={onClick}>
            <div className="flex items-center justify-center bg-white dark:bg-gray-800 rounded-full w-10 h-10 shadow-lg">
                <ChevronLeftIcon className="h-6 w-6" />
            </div>
        </div>
    );
}
