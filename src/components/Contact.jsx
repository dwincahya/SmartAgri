import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
    };

    return (
        <section className="py-12 bg-gray-100 scroll-mt-20" id="Contact-Section">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Kontak Kami</h2>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">SMART AGRICULTURE</h3>
                        <p className="mb-2">
                            JL. KusumaNegara No.16 RT.34/RW.36, Jetis, Jogjakarta,
                            <br />
                            Daerah Istimewa Yogyakarta 52444
                        </p>
                        <p className="mb-2">Telepon: +62-123-4567-7654</p>
                        <p className="mb-4">
                            Email: <a href="mailto:Smart@agriculture.com" className="text-blue-600 hover:underline">Smart@agriculture.com</a>
                        </p>

                        <h3 className="text-xl font-semibold mb-4 text-center ">Hubungi Kami</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nama</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Nama Anda"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Email Anda"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Pesan</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Pesan Anda"
                                    rows="4"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
                                >
                                    Kirim
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                        <iframe
                            title="Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63465.756872570254!2d110.35938619267576!3d-7.797568978990075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708ef3173c91b1%3A0x2e9cb2e0b58aa8a6!2sJetis%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1683670424643!5m2!1sid!2sid"
                            width="100%"
                            height="500px"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                        <div className="absolute bottom-0 right-0 p-4 bg-white text-gray-700 text-sm">
                            <a href="https://www.google.com/maps" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                Open in Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
