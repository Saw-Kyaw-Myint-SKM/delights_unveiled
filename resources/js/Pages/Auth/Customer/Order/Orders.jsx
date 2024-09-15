import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import WelcomLayout from "@/Layouts/WelcomeLayout";
import { Head, Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
import Swal from "sweetalert2";

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

    const {
        data: statusData,
        setData: setStatus,
        post: postStatus,
        processing: statusProcessing,
    } = useForm({
        status: "",
    });
    const deleteProduct = (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this order?"
        );
        if (confirmed) {
            destroy(route("order.destroy", id), {
                onSuccess: () => {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        },
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Order is deleted successfull",
                    });
                    console.log("Order deleted successfully");
                },
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

    const updateStatus = (status, id) => {
        const confirmed = window.confirm(
            "Are you sure you want to change status?"
        );
        if (confirmed) {
            statusData.status = status;
            postStatus(route("order.status", id), {
                onError: (errors) => {
                    console.log("errors", errors);
                },
                onSuccess: () => {},
            });
        }
    };
    useEffect(() => {
        if (searchValue?.length) {
            console.log("searchValue", searchValue);
            setSearchData("search", searchValue);
        }
    }, []);

    return (
        <WelcomLayout user={auth.user}>
            <Head title="Orders" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto">
                    <section className="dark:bg-gray-900 p-3 sm:p-5">
                        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                    {/* <div className="w-full md:w-1/2">
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
                                    </div> */}
                                    <div>
                                        <h2 className=" font-semibold text-xl">
                                            Your Orders
                                        </h2>
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
                                                    Cart No
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3"
                                                >
                                                    Cart
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
                                                    Address
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3"
                                                >
                                                    Phone
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3"
                                                >
                                                    payment
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3"
                                                >
                                                    Total Price
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3"
                                                >
                                                    Status
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
                                                        {order.id}
                                                    </td>
                                                    <th
                                                        scope="row"
                                                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                    >
                                                        <Link
                                                            href={route(
                                                                "order.products.show",
                                                                order.id
                                                            )}
                                                        >
                                                            <img
                                                                className="w-auto h-auto max-w-14 max-h-14 animate-bounce"
                                                                src="https://cdn-icons-png.flaticon.com/512/3481/3481069.png"
                                                                alt="order"
                                                            />
                                                        </Link>
                                                        <div className="w-full h-[1px] bg-gray-200 mt-[-8px]"></div>
                                                    </th>
                                                    <td className="px-4 py-3">
                                                        {order.user.name}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        {order.address}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        {order.phone}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        {order.payment}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        {order.total_price}
                                                    </td>
                                                    <td className="px-4 py-3 w-12 ">
                                                        <div className="flex items-center">
                                                            <p
                                                                className={`${
                                                                    order.status ==
                                                                    "new"
                                                                        ? "bg-pink-300"
                                                                        : "bg-green-300"
                                                                } "text-gray-500 font-serif bg-opacity-50 px-4 border shadow py-1 rounded rounded-full"`}
                                                                type="button"
                                                                data-ripple-light="true"
                                                            >
                                                                {order.status ==
                                                                "complete"
                                                                    ? order.status
                                                                    : "InProgress..."}
                                                            </p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </WelcomLayout>
    );
}
