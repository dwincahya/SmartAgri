import { FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="shadow-6xl bg-white py-10">
            <div className="w-full mx-auto px-5 md:px-20 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 sm:gap-8 lg:gap-20">

                <div className="mb-6 md:mb-0 mx-5">
                    <div>
                        <h3 className="text-lg font-semibold mb-1">SMART AGRICULTURE</h3>
                        <p>
                            Smart Agriculture adalah platform inovatif yang dirancang untuk membantu petani meningkatkan produktivitas dan efisiensi pertanian mereka. Dengan teknologi canggih, platform ini menyediakan data real-time mengenai kondisi tanah, cuaca, dan tanaman, sehingga petani dapat mengambil keputusan yang lebih tepat dan akurat.
                        </p>
                    </div>
                </div>

                <div className="mb-6 md:mb-0 ">
                    <div>
                        <h3 className="text-lg font-semibold mb-1">Informasi Kontak</h3>
                        <p>
                            JL. KusumaNegara No.16 RT.34/RW.36, Jetis, Jogjakarta,
                            <br />
                            Daerah Istimewa Yogyakarta 52444
                        </p>
                        <p className="mt-2">Telepon: +62-123-4567-7654</p>
                        <p>Email: Smart@agriculture.com</p>
                    </div>
                </div>

                <div className="mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-1">Layanan</h3>
                    <ul>
                        <li>Managemen Bibit & Pupuk</li>
                        <li>Monitoring Tanaman</li>
                    </ul>
                </div>

                <div className="mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-1">Hubungi Kami</h3>
                    <div className="grid grid-cols-3 max-w-36 gap-2">
                        <FaWhatsapp className="text-3xl" />
                        <FaEnvelope className="text-3xl" />
                        <FaFacebook className="text-3xl" />
                        <FaInstagram className="text-3xl" />
                        <FaLinkedin className="text-3xl" />
                        <FaYoutube className="text-3xl" />
                    </div>
                </div>


                <div className="mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-1">Informasi</h3>
                    <ul>
                        <li>Tentang Kami</li>
                        <li>Dashboard Lahan</li>
                        <li>Management Pupuk</li>
                        <li>Berita Tentang Kami</li>
                        <li>Ulasan</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
