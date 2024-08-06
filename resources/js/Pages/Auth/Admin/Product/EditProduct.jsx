import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useRef } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import TextArea from "@/Components/TextArea";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function EditProduct({ auth, product }) {
    const textareaInput = useRef();
    const categoriesList = [
        { id: 1, name: "furniture" },
        { id: 2, name: "food" },
    ];
    const getCategoryIndex = () => {
        return categoriesList.findIndex(
            (category) => category.name === product.categories
        );
    };

    const {
        data,
        setData,
        errors,
        post,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        photo: "",
        title: product.title,
        description: product.description,
        categories: categoriesList[getCategoryIndex()],
        user_id: auth.user?.id,
        price: product.price,
    });

    const updateProduct = (e) => {
        e.preventDefault();
        console.log("data", data);
        post(route("product.update", product.id), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                console.log("errors", errors);
                // if (errors.password) {
                // reset("password", "password_confirmation");
                // passwordInput.current.focus();
                // }
                // if (errors.current_password) {
                //     reset("current_password");
                //     currentPasswordInput.current.focus();
                // }
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Products / Edit
                </h2>
            }
        >
            <Head title="Products" />

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <h2 className="text-2xl underline">Product Edit</h2>
                        <form
                            onSubmit={updateProduct}
                            className="mt-6 space-y-6"
                        >
                            <div>
                                <InputLabel htmlFor="photo" value="Photo" />

                                <TextInput
                                    id="photo"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        setData("photo", file);
                                    }}
                                    type="file"
                                    className="w-full mt-1 text-sm text-gray-500 file:mr-3 file:py-1 file:px-4 file:rounded-md file:border-blue-500/10 file:text-sm file:bg-blue-500/20 file:text-black focus:outline-none border"
                                    autoComplete="photo"
                                />

                                <InputError
                                    message={errors.photo}
                                    className="mt-2"
                                />
                                <img
                                    src={product.photo}
                                    alt="product"
                                    className="w-36 h-36 mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="title" value="Title" />

                                <TextInput
                                    id="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    type="text"
                                    className="mt-1 block w-full"
                                    autoComplete="title"
                                />

                                <InputError
                                    message={errors.title}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="categories"
                                    value="Category"
                                />
                                <div className="w-full">
                                    <div className="w-full">
                                        <Listbox
                                            value={data.categories}
                                            onChange={(value) => {
                                                setData("categories", value);
                                            }}
                                        >
                                            <div className="relative mt-1">
                                                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                    <span className="block truncate">
                                                        {data.categories?.name}
                                                    </span>
                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                        <ChevronUpDownIcon
                                                            className="h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </Listbox.Button>
                                                <Transition
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                        {categoriesList.map(
                                                            (
                                                                person,
                                                                personIdx
                                                            ) => (
                                                                <Listbox.Option
                                                                    key={
                                                                        personIdx
                                                                    }
                                                                    className={({
                                                                        active,
                                                                    }) =>
                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                            active
                                                                                ? "bg-amber-100 text-amber-900"
                                                                                : "text-gray-900"
                                                                        }`
                                                                    }
                                                                    value={
                                                                        person
                                                                    }
                                                                >
                                                                    {({
                                                                        selected,
                                                                    }) => (
                                                                        <>
                                                                            <span
                                                                                className={`block truncate ${
                                                                                    selected
                                                                                        ? "font-medium"
                                                                                        : "font-normal"
                                                                                }`}
                                                                            >
                                                                                {
                                                                                    person.name
                                                                                }
                                                                            </span>
                                                                            {selected ? (
                                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                                    <CheckIcon
                                                                                        className="h-5 w-5"
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </Listbox.Option>
                                                            )
                                                        )}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </Listbox>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <InputLabel htmlFor="price" value="Price" />

                                <TextInput
                                    id="price"
                                    value={data.price}
                                    onChange={(e) =>
                                        setData("price", e.target.value)
                                    }
                                    type="number"
                                    className="mt-1 block w-full"
                                    autoComplete="price"
                                />

                                <InputError
                                    message={errors.price}
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
                                    rows="4"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    disabled={false}
                                />

                                <InputError
                                    message={errors.description}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex items-center justify-end gap-4">
                                <PrimaryButton disabled={processing}>
                                    Save
                                </PrimaryButton>

                                <Transition
                                    show={recentlySuccessful}
                                    enter="transition ease-in-out"
                                    enterFrom="opacity-0"
                                    leave="transition ease-in-out"
                                    leaveTo="opacity-0"
                                >
                                    <p className="text-sm text-gray-600">
                                        Saved.
                                    </p>
                                </Transition>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
