import React from 'react';

function ContactPage() {
    return (
        <div className="text-[#edede5] bg-[#345671] py-20 px-4 sm:px-6 lg:px-8 dark:text-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className='mx-16'>
                        <h2 className="text-3xl font-bold mb-6">
                            Get in Touch
                        </h2>
                        <p className="text-lg  mb-10">
                            Have a question or want to work with us? Fill out the form below
                            and we'll get back to you as soon as possible.
                        </p>
                        <form className="space-y-8">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium "
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 block w-full p-2 bg-[#edede5] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium "
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full rounded-md p-2 bg-[#edede5] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium "
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-[#edede5] focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-[#345671] bg-[#edede5]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className=" rounded-lg shadow-lg overflow-hidden">
                        <div className="p-10">
                            <h3 className="text-2xl font-bold text-[#edede5] mb-6">
                                Our Office
                            </h3>
                            <div className="mb-6 text-black bg-[#edede5] p-5 w-[70%] rounded-lg">
                                <p className="text-lg ">
                                    123 Main Street
                                    <br />
                                    Anytown, USA 12345
                                </p>
                            </div>
                            <div className="mb-6 text-black bg-[#edede5] p-5 w-[70%] rounded-lg">
                                <p className="text-lg ">
                                    Phone: (123) 456-7890
                                    <br />
                                    Email: info@example.com
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;