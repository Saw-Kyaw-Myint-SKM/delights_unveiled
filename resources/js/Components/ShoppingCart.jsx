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
import PrimaryButton from "./PrimaryButton";

const ShoppingCart = () => {
    const { orderCart, setOrderCart, handleRemoveItem } =
        useContext(CartContext);

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

    const [confirmingPayment, setConfirmingPayment] = useState(false);

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
            onSuccess: () => setOrderCart([]),
            onError: (errors) => {
                closeModal();
            },
        });
    };

    const closeModal = () => {
        setConfirmingPayment(false);

        reset();
    };
    return (
        <div className="flex flex-col md:flex-row justify-between p-2 w-full">
            <div
                data-aos="fade-right"
                data-aos-delay="200"
                className={`${orderCart.length === 0
                    ? "w-full flex flex-col items-center"
                    : "bg-white shadow-md w-full md:w-4/6"
                    }  rounded-lg mr-0 md:mr-4 py-10`}
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
                <Link href="/" className="ps-4 text-blue-500 hover:underline">
                    Continue Shopping
                </Link>
            </div>
            <div
                data-aos="fade-left"
                data-aos-delay="200"
                className={`${orderCart.length === 0 ? "hidden" : ""
                    } w-full md:w-2/6 bg-white shadow-md rounded-lg p-6 mt-4 md:mt-0`}
            >
                <h3 className="text-base font-bold mb-4 text-gray-600">
                    Order Summary
                </h3>
                <div className="mb-4">
                    <span className="font-semibold text-sm text-gray-500">
                        Items: {orderCart.length}
                    </span>
                    <span className="ml-4 font-semibold text-base text-gray-500">
                        {calculateTotal()} Ks
                    </span>
                </div>
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
                            className={`h-8 w-8  rounded ${selectedOption === "cash" ? "opacity-100" : "opacity-80"}`}
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
                            className={`h-8 w-8 rounded ${selectedOption === "kpay" ? "opacity-100" : "opacity-80"}`}
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
                            <img
                                src="data:image/png;base64,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"
                                alt=""
                            />
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
