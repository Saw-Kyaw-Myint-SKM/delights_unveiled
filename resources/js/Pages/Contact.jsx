import { Link, Head } from "@inertiajs/react";
import WelcomLayout from "@/Layouts/WelcomeLayout";
import Navbar from "@/Components/Nevbar";
import InputError from "@/Components/InputError";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import { useRef } from "react";
import Swal from "sweetalert2";

import { useForm } from "@inertiajs/react";

export default function Contact({ auth, laravelVersion, phpVersion }) {
    const textareaInput = useRef();

    const {
        data,
        setData,
        errors,
        post,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        name: "",
        email: "",
        description: "",
    });

    const submitContact = (e) => {
        e.preventDefault();
        console.log("data", data);
        post(route("contact.store"), {
            preserveScroll: true,
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
                    title: "Mail has been sent successfully.",
                });
                reset();
            },
            onError: (errors) => {
                console.log("errors", errors);
            },
        });
    };

    return (
        <>
            <Head title="Delights Unveiled" />
            <WelcomLayout user={auth.user}>
                <section>
                    <Navbar />
                </section>
                <div className=" bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:w-3/6 sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                        <div className="relative px-3 py-8 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className=" w-full mx-auto">
                                <div>
                                    <h1 className="text-2xl font-semibold">
                                        Contact Admin
                                    </h1>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div>
                                            <InputLabel
                                                htmlFor="user_name"
                                                value="Name"
                                            />

                                            <TextInput
                                                id="name"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                className="mt-1 block w-full"
                                                autoComplete="name"
                                            />
                                            <InputError
                                                message={errors.name}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div>
                                            <InputLabel
                                                htmlFor="email"
                                                value="Email"
                                            />

                                            <TextInput
                                                id="email"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                className="mt-1 block w-full"
                                                autoComplete="email"
                                            />
                                            <InputError
                                                message={errors.email}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div>
                                            <InputLabel
                                                htmlFor="description"
                                                value="Description"
                                            />

                                            <TextArea
                                                ref={textareaInput}
                                                className="w-full mt-1"
                                                rows="6"
                                                value={data.description}
                                                onChange={(e) =>
                                                    setData(
                                                        "description",
                                                        e.target.value
                                                    )
                                                }
                                                disabled={false}
                                            />

                                            <InputError
                                                message={errors.description}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex justify-center">
                                <button
                                    onClick={submitContact}
                                    className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    <svg
                                        className="w-8 h-5 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 49.4 512 399.4200000000001"
                                    >
                                        <g fill="none" fill-rule="evenodd">
                                            <g fill-rule="nonzero">
                                                <path
                                                    d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"
                                                    fill="#4285f4"
                                                />
                                                <path
                                                    d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"
                                                    fill="#34a853"
                                                />
                                                <path
                                                    d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"
                                                    fill="#fbbc04"
                                                />
                                            </g>
                                            <path
                                                d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"
                                                fill="#ea4335"
                                            />
                                            <path
                                                d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"
                                                fill="#c5221f"
                                                fill-rule="nonzero"
                                            />
                                        </g>
                                    </svg>
                                    <span>Send Mail</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </WelcomLayout>
        </>
    );
}
