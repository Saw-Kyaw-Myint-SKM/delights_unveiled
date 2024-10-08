import React, { useContext, useState } from "react";
import { Link } from "@inertiajs/react";
import { CartContext } from "@/Layouts/context/CardContext";
import { useForm } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "./SecondaryButton";
import DangerButton from "./DangerButton";
import Swal from "sweetalert2";
import PrimaryButton from "./PrimaryButton";
import { FaConnectdevelop } from "react-icons/fa";

const ShoppingCart = () => {
    const { orderCart, setOrderCart, handleRemoveItem } =
        useContext(CartContext);
    const [confirmingPayment, setConfirmingPayment] = useState(false);

    const [selectedOption, setSelectedOption] = useState("cash"); // Default value

    const handleOptionChange = (event) => {
        console.log("value", event.target.value);
        setSelectedOption(event.target.value);
    };
    const handleIncreaseQuantity = (productId) => {
        const updatedCart = orderCart.map((item) =>
            item.id === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );

        setOrderCart(updatedCart);
        console.log(orderCart);
        calculateTotal();
    };

    const handleDecreaseQuantity = (productId) => {
        const updatedCart = orderCart.map((item) =>
            item.id === productId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setOrderCart(updatedCart);
        calculateTotal();
    };

    const calculateTotal = () => {
        return orderCart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2);
    };
    const submitAddToCard = () => {
        setConfirmingPayment(true);
    };

    const {
        data,
        setData,
        post,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        orders: "",
        phone: "",
        address: "",
        total_price: "",
        evidence: "",
        payment: "",
    });

    const submitOrder = (e) => {
        e.preventDefault();
        const extractedData = orderCart.map((item) => {
            return {
                id: item.id,
                quantity: item.quantity,
                price: item.price,
            };
        });
        data.orders = extractedData;
        data.payment = selectedOption;
        data.total_price = calculateTotal();
        post(route("order.store"), {
            preserveScroll: true,
            onSuccess: (e) => {
                if (e.component == "Welcome") {
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
                        title: "Order is successfull",
                    });
                }

                setOrderCart([]);
            },
            onError: (errors) => {
                console.log("errors", errors);
                if (!errors.evidence) {
                    closeModal();
                }
            },
        });
    };

    const closeModal = () => {
        setConfirmingPayment(false);

        // reset();
    };
    return (
        <div className="flex flex-col md:flex-row justify-between p-2 w-full">
            <div
                data-aos="fade-right"
                data-aos-delay="200"
                className={`${
                    orderCart.length === 0
                        ? "w-full flex flex-col items-center"
                        : "bg-white shadow-md w-full md:w-4/6"
                }  rounded-lg mr-0 md:mr-4 py-8`}
            >
                {orderCart.length === 0 ? (
                    <p className="mb-10 text-lg font-bold text-gray-700">
                        There is no order yet.
                    </p>
                ) : (
                    <div className="mb-5 h-80 overflow-y-auto">
                        {orderCart.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between p-4 border-b"
                            >
                                <div className="flex items-center mr-10">
                                    <img className="w-24" src={item.photo} />
                                    <div className="ml-4">
                                        <div className="text-sm font-semibold text-gray-700">
                                            {item.title}
                                        </div>
                                        <div className="text-gray-500">
                                            {item.categories}
                                        </div>
                                        <button
                                            className="text-xs text-red-500 hover:text-red-700 mt-2"
                                            onClick={() =>
                                                handleRemoveItem(item.id)
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        className="text-lg font-semibold px-3 py-1 border"
                                        onClick={() =>
                                            handleDecreaseQuantity(item.id)
                                        }
                                    >
                                        -
                                    </button>
                                    <span className="px-4">
                                        {item.quantity}
                                    </span>
                                    <button
                                        className="text-lg font-semibold px-3 py-1 border"
                                        onClick={() =>
                                            handleIncreaseQuantity(item.id)
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-xs font-semibold rounded py-1 px-2 bg-blue-200">
                                        {" "}
                                        {item.price} Ks{" "}
                                    </span>
                                    <span className="ml-4 text-xs text-white font-semibold rounded py-1 px-2 bg-red-500">
                                        {(item.price * item.quantity).toFixed(
                                            2
                                        )}{" "}
                                        Ks
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="flex items-center justify-between mr-5">
                    <Link
                        href="/"
                        className="ps-4 animate-bounce flex items-center text-blue-500 hover:underline"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-8 mr-1 font-semibold"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                            />
                        </svg>
                        Continue Shopping
                    </Link>
                    <div className="flex items-center mb-4">
                        <div className="flex items-center font-semibold text-sm text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6 mr-2 text-red-400"
                            >
                                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                            </svg>
                            Items: {orderCart.length} ,
                        </div>
                        <div className="ml-4 font-semibold flex items-center text-base text-gray-500">
                            Total Amounts :
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 ml-2 text-green-500 mr-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                                />
                            </svg>
                            {calculateTotal()} Ks
                        </div>
                    </div>
                </div>
            </div>
            <div
                data-aos="fade-left"
                data-aos-delay="200"
                className={`${
                    orderCart.length === 0 ? "hidden" : ""
                } w-full md:w-2/6 bg-white shadow-md rounded-lg p-4 mt-4 md:mt-0`}
            >
                <h3 className="text-base font-bold mb-4 text-gray-600">
                    Order Summary
                </h3>
                <div>
                    <InputLabel htmlFor="phone" value="Phone" />

                    <TextInput
                        id="phone"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="phone"
                        isFocused={true}
                        onChange={(e) => setData("phone", e.target.value)}
                        required
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="address" value="Address" />

                    <TextInput
                        id="address"
                        name="addres"
                        value={data.address}
                        className="mt-1 block w-full"
                        autoComplete="address"
                        onChange={(e) => setData("address", e.target.value)}
                        required
                    />

                    <InputError message={errors.address} className="mt-2" />
                </div>

                <div className=" w-2/5 md:w-1/2 mb-10 mt-5 flex items-center justify-evenly space-x-2">
                    <label
                        className={`p-1 rounded cursor-pointer flex items-center justify-center
            ${selectedOption === "cash" ? "bg-blue-500" : "bg-gray-200"}`}
                    >
                        <input
                            type="radio"
                            value="cash"
                            checked={selectedOption === "cash"}
                            onChange={handleOptionChange}
                            className="hidden"
                        />
                        <img
                            src="/img/cash.jpg"
                            alt="Cash"
                            className={`h-8 w-8  rounded ${
                                selectedOption === "cash"
                                    ? "opacity-100"
                                    : "opacity-80"
                            }`}
                        />
                    </label>
                    <label
                        className={`p-1 rounded cursor-pointer flex items-center justify-center
            ${selectedOption === "kpay" ? "bg-blue-500" : "bg-gray-200"}`}
                    >
                        <input
                            type="radio"
                            value="kpay"
                            checked={selectedOption === "kpay"}
                            onChange={handleOptionChange}
                            className="hidden"
                        />
                        <img
                            src="/img/kpay.png"
                            alt="Kpay"
                            className={`h-8 w-8 rounded ${
                                selectedOption === "kpay"
                                    ? "opacity-100"
                                    : "opacity-80"
                            }`}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <span className="font-semibold text-sm text-gray-500">
                        Total Cost:
                    </span>
                    <span className="ml-4 font-semibold text-base text-gray-700">
                        {calculateTotal()} Ks
                    </span>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                    onClick={submitAddToCard}
                >
                    Confirm
                </button>
            </div>
            <Modal show={confirmingPayment} onClose={closeModal} maxWidth="md">
                <form className="p-6">
                    <h2 className="text-lg text-red-600 font-bold">
                        Delights Unveiled
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Are you sure you want to place this order? Click confirm
                        to{" "}
                        <span className="font-semibold text-gray-800 text-base">
                            Save Order
                        </span>{" "}
                        button.
                    </p>
                    <div className="flex items-center justify-center">
                        {selectedOption == "kpay" && (
                            <div className="w-full">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="data:image/png;base64,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"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="evidence"
                                        value="Evidence"
                                    />

                                    <TextInput
                                        id="evidence"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            setData("evidence", file);
                                        }}
                                        type="file"
                                        className="w-full mt-1 text-sm text-gray-500 file:mr-3 file:py-1 file:px-4 file:rounded-md file:border-blue-500/10 file:text-sm file:bg-blue-500/20 file:text-black focus:outline-none border"
                                        autoComplete="evidence"
                                    />

                                    <InputError
                                        message={errors.evidence}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="mt-6">
                        <InputLabel
                            htmlFor="password"
                            value="Password"
                            className="sr-only"
                        />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>

                        <PrimaryButton
                            className="ms-3 bg-blue-600"
                            onClick={submitOrder}
                            disabled={processing}
                        >
                            Save Order
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default ShoppingCart;
