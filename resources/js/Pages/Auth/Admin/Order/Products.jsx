import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Products({ auth, order }) {
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
            "Are you sure you want to delete this product?"
        );
        if (confirmed) {
            destroy(route("product.destroy", id), {
                onSuccess: () => console.log("Product deleted successfully"),
                onError: (error) =>
                    console.error("Error deleting product:", error),
            });
        } else {
            console.log("Product deletion cancelled");
        }
    };
    const onSubmitSearch = (e) => {
        e.preventDefault();
        console.log("data", data);
        get(route("products.index"), {
            preserveScroll: true,
            onError: (errors) => {
                console.log("errors", errors);
            },
        });
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Products / List
                </h2>
            }
        >
            <Head title="Products" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto">
                    <section className="dark:bg-gray-900 p-3 sm:p-5">
                        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-1 md:space-x-4 p-4">
                                    <div className="w-auto">
                                        <p className=" text-xs text-gray-600">
                                            Cart No
                                        </p>
                                        <p className="text-3xl text-blue-400 font-bold font-serif">
                                            {order.id}
                                        </p>
                                    </div>
                                    <div className="w-full">
                                        <marquee behavior="" direction="right">
                                            <div className="flex items-center">
                                                <img
                                                    className="w-12 h-12 mr-7"
                                                    src="https://cdn-icons-png.flaticon.com/512/3481/3481069.png"
                                                    alt="order"
                                                />
                                                <img
                                                    className="w-12 h-12"
                                                    src="https://cdn-icons-png.flaticon.com/512/3481/3481069.png"
                                                    alt="order"
                                                />
                                            </div>
                                        </marquee>
                                    </div>
                                    <div className="w-auto">
                                        <p className="text-gray-500 text-sm">
                                            Total Price
                                        </p>
                                        <p className="font-bold font-mono text-xl text-blue-600">
                                            {order.total_price}
                                        </p>
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
                                                    Product
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3"
                                                >
                                                    Product name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3"
                                                >
                                                    Category
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
                                                    city
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3"
                                                >
                                                    Total Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order?.order_products.map(
                                                (orderproduct, index) => (
                                                    <tr
                                                        key={
                                                            orderproduct.product
                                                                .id
                                                        }
                                                        className="border-b dark:border-gray-700"
                                                    >
                                                        <td className="px-4 py-3">
                                                            <img
                                                                className="w-20 h-20 max-w-20 max-h-20"
                                                                src={
                                                                    orderproduct
                                                                        .product
                                                                        .photo
                                                                }
                                                                alt="product"
                                                            />
                                                        </td>
                                                        <th
                                                            scope="row"
                                                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                        >
                                                            {
                                                                orderproduct
                                                                    .product
                                                                    .title
                                                            }
                                                        </th>
                                                        <td className="px-4 py-3">
                                                            {
                                                                orderproduct
                                                                    .product
                                                                    .categories
                                                            }
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            {
                                                                orderproduct.quantity
                                                            }
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            {
                                                                orderproduct
                                                                    .product
                                                                    .price
                                                            }
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            {
                                                                orderproduct
                                                                    .product
                                                                    .city
                                                            }
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            {orderproduct.price}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
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
