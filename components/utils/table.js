import { FaPlus } from "react-icons/fa"

export default function Table() {
    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <div className="pb-4 px-2 pt-2 bg-white flex justify-between">
                <label htmlFor="table-search" className="sr-only">
                    Search
                </label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <input
                        type="text"
                        className="w-72 py-[0.35rem] pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        placeholder="Search"
                    />
                </div>
                <div>
                    <button className="flex items-center px-3 py-[0.35rem] font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        <FaPlus />
                        <span className="mx-2">Add</span>
                    </button>
                </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all-search"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                                />
                                <label htmlFor="checkbox-all-search" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Product name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Color
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Category
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Price
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                                />
                                <label htmlFor="checkbox-table-search-1" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                        >
                            Apple MacBook Pro 17"
                        </th>
                        <td className="py-4 px-6">Sliver</td>
                        <td className="py-4 px-6">Laptop</td>
                        <td className="py-4 px-6">$2999</td>
                        <td className="py-4 px-6">
                            <a
                                href="#"
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Edit
                            </a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-2"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                                />
                                <label htmlFor="checkbox-table-search-2" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                        >
                            Microsoft Surface Pro
                        </th>
                        <td className="py-4 px-6">White</td>
                        <td className="py-4 px-6">Laptop PC</td>
                        <td className="py-4 px-6">$1999</td>
                        <td className="py-4 px-6">
                            <a
                                href="#"
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Edit
                            </a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-3"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                                />
                                <label htmlFor="checkbox-table-search-3" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                        >
                            Magic Mouse 2
                        </th>
                        <td className="py-4 px-6">Black</td>
                        <td className="py-4 px-6">Accessories</td>
                        <td className="py-4 px-6">$99</td>
                        <td className="py-4 px-6">
                            <a
                                href="#"
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Edit
                            </a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-3"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                                />
                                <label htmlFor="checkbox-table-3" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                        >
                            Apple Watch
                        </th>
                        <td className="py-4 px-6">Silver</td>
                        <td className="py-4 px-6">Accessories</td>
                        <td className="py-4 px-6">$179</td>
                        <td className="py-4 px-6">
                            <a
                                href="#"
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Edit
                            </a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-3"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                                />
                                <label htmlFor="checkbox-table-3" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                        >
                            iPad
                        </th>
                        <td className="py-4 px-6">Gold</td>
                        <td className="py-4 px-6">Tablet</td>
                        <td className="py-4 px-6">$699</td>
                        <td className="py-4 px-6">
                            <a
                                href="#"
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Edit
                            </a>
                        </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-3"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                                />
                                <label htmlFor="checkbox-table-3" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                        >
                            Apple iMac 27"
                        </th>
                        <td className="py-4 px-6">Silver</td>
                        <td className="py-4 px-6">PC Desktop</td>
                        <td className="py-4 px-6">$3999</td>
                        <td className="py-4 px-6">
                            <a
                                href="#"
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Edit
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}