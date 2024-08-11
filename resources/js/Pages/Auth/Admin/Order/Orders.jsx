import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Orders({ auth, orders, searchValue = "" }) {
    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        id: "",
    });
    const {
        data: searchData,
        setData: setSearchData,
        get,
        processing: searchProcessing,
        reset: searchResult,
    } = useForm({
        search: "",
    });
    const deleteProduct = (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this order?"
        );
        if (confirmed) {
            destroy(route("order.destroy", id), {
                onSuccess: () => console.log("Order deleted successfully"),
                onError: (error) =>
                    console.error("Error deleting order:", error),
            });
        } else {
            console.log("Order deletion cancelled");
        }
    };
    const onSubmitSearch = (e) => {
        e.preventDefault();
        get(route("orders.index"), {
            preserveScroll: true,
            onError: (errors) => {
                console.log("errors", errors);
            },
        });
    };
    useEffect(() => {
        if (searchValue?.length) {
            console.log("searchValue", searchValue);
            setSearchData("search", searchValue);
        }
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Orders / List
                </h2>
            }
        >
            <Head title="Orders" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto">
                    <section className="dark:bg-gray-900 p-3 sm:p-5">
                        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                    <div className="w-full md:w-1/2">
                                        <form
                                            className="flex items-center"
                                            onSubmit={onSubmitSearch}
                                        >
                                            <label
                                                htmlFor="simple-search"
                                                className="sr-only"
                                            >
                                                Search
                                            </label>
                                            <div className="relative w-full">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg
                                                        aria-hidden="true"
                                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <input
                                                    type="text"
                                                    id="simple-search"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="Search"
                                                    value={searchData.search}
                                                    onChange={(e) =>
                                                        setSearchData(
                                                            "search",
                                                            e.target.value
                                                        )
                                                    }
                                                    required=""
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3"
                                                >
                                                    Order No
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3"
                                                >
                                                    Product
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3"
                                                >
                                                    product name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3"
                                                >
                                                    customer
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3"
                                                >
                                                    quantity
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3"
                                                >
                                                    Price
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3"
                                                >
                                                    <span>Actions</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map((order, index) => (
                                                <tr
                                                    key={order.id}
                                                    className="border-b dark:border-gray-700"
                                                >
                                                    <td className="px-4 py-3">
                                                        {order.cart_number}
                                                    </td>
                                                    <th
                                                        scope="row"
                                                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                    >
                                                        <img
                                                            className=" w-24 h-24"
                                                            src={
                                                                order.product
                                                                    ?.photo
                                                            }
                                                            alt="order"
                                                        />
                                                    </th>
                                                    <td className="px-4 py-3">
                                                        {order.product?.title}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        {order.user.name}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        {order.quantity}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        {order.price}
                                                    </td>
                                                    <td className="px-4 py-3 w-12 ">
                                                        <div className="flex items-center">
                                                            <button
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    deleteProduct(
                                                                        order.id
                                                                    );
                                                                }}
                                                                id="apple-imac-27-dropdown-button"
                                                                className="inline-flex items-center p-0.5 text-sm font-medium text-center ml-2 text-red-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                                                type="button"
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={
                                                                        1.5
                                                                    }
                                                                    stroke="currentColor"
                                                                    className="size-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {/* <nav
                                    className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                                    aria-label="Table navigation"
                                >
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                        Showing
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            1-10
                                        </span>
                                        of
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            1000
                                        </span>
                                    </span>
                                    <ul className="inline-flex items-stretch -space-x-px">
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                            >
                                                <span className="sr-only">
                                                    Previous
                                                </span>
                                                <svg
                                                    className="w-5 h-5"
                                                    aria-hidden="true"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                            >
                                                1
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                            >
                                                2
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                aria-current="page"
                                                className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                            >
                                                3
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                            >
                                                ...
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                            >
                                                100
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                            >
                                                <span className="sr-only">
                                                    Next
                                                </span>
                                                <svg
                                                    className="w-5 h-5"
                                                    aria-hidden="true"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </nav> */}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
