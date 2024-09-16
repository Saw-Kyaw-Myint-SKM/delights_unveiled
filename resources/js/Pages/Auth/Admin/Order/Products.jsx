import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import Swal from "sweetalert2";
import { useState } from "react";
import SecondaryButton from "@/Components/SecondaryButton";

export default function Products({ auth, order }) {
    const [showPayment, setShowPayment] = useState(false);
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
                        title: "Product is deleted successfull",
                    });
                    console.log("Product deleted successfully");
                },
                onError: (error) =>
                    console.error("Error deleting product:", error),
            });
        } else {
            console.log("Product deletion cancelled");
        }
    };
    const closeModal = () => {
        setShowPayment(false);
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
            <Head title="Order Detail" />

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
                                        <div className="flex items-center space-x-3">
                                            {order?.payment == "kpay" && (
                                                <button
                                                    className="w-10 h-10"
                                                    onClick={(e) => {
                                                        setShowPayment(true);
                                                    }}
                                                >
                                                    <img
                                                        src="/img/kpay.png"
                                                        alt="Kpay"
                                                    />
                                                </button>
                                            )}
                                            {order?.payment == "cash" && (
                                                <div className="w-10 h-10">
                                                    <img
                                                        src="/img/cash.jpg"
                                                        alt="Kpay"
                                                    />
                                                </div>
                                            )}
                                            {auth.user.role !== 1 && (
                                                <div>
                                                    <p className="text-gray-500 text-sm">
                                                        Total Price
                                                    </p>
                                                    <p className="font-bold font-mono text-xl text-blue-600">
                                                        {order.total_price}
                                                    </p>
                                                   </div>
                                            )}
                                        </div>
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
                                                                        ?.photo
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
                                                            {orderproduct.quantity *
                                                                orderproduct
                                                                    .product
                                                                    .price}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <Modal
                                    show={showPayment}
                                    onClose={closeModal}
                                    maxWidth="lg"
                                >
                                    <form className="p-6">
                                        <h2 className="text-lg text-red-600 font-bold mb-2">
                                            Evidence
                                        </h2>
                                        <div className="flex items-center justify-center">
                                            <div className="w-full">
                                                <div className="w-full">
                                                    <img
                                                        src={order?.evidence}
                                                        alt=""
                                                        className="w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="mt-5" />
                                        <div className="mt-3 flex justify-center">
                                            <SecondaryButton
                                                onClick={closeModal}
                                            >
                                                Close
                                            </SecondaryButton>
                                        </div>
                                    </form>
                                </Modal>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
