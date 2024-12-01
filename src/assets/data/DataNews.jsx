const newsItems = [
    {
        id: 1,
        title: 'Cerita Sukses Petani Pelosok dalam Menggunakan Layanan Smart Agriculture',
        location: 'Yogyakarta, Yogyakarta',
        imgSrc: '3.jpg',
        content: 'Ini adalah cerita sukses petani di Yogyakarta...',
        quotes: 'Smart Agriculture adalah sebuah teknologi inovatif yang sangat bermanfaat bagi para petani',
        name: 'Mbah Rono Wijaya',
        position: 'Pendiri dari Sabin Pari',
        about: [
            {
                title: 'Awal Perjalanan Sabin Pari dalam memulai bisnis',
                description: 'Berawal dari lahan yang diwarisi turun-temurun, Mbah Rono bertekad mengubah nasibnya melalui usaha bertani. Ia mendirikan perusahaan pertanian bernama Sabin Pari, yang namanya diambil dari bahasa krama, di mana "sabin" berarti sawah dan "pari" berarti padi. Dengan dedikasi dan kerja keras, Mbah Rono bercita-cita menjadikan Sabin Pari sebagai simbol kesuksesan pertanian di desanya, meskipun ia menghadapi berbagai tantangan dan keterbatasan teknologi.',
                imgSrc: '/sawah.jpg',
                reverse: false
            },
            {
                title: 'Permasalahan yang Dihadapi Sabin Pari',
                description: 'Mbah Rono menghadapi sejumlah masalah serius. Tanah yang subur tidak selalu menjamin hasil panen yang melimpah, dan keterbatasan teknologi serta informasi menjadi hambatan utama. Dengan bergantung pada metode pertanian tradisional, Mbah Rono sering mengalami kesulitan dalam memantau kondisi tanaman dan tanah serta merencanakan waktu tanam yang tepat. Kegagalan panen yang merugikan dan pendapatan yang tidak stabil menjadi masalah besar, terutama dengan cuaca yang sering berubah-ubah secara tidak terduga.',
                imgSrc: '/petani.jpg',
                reverse: true
            },
            {
                title: 'Komunitas Petani',
                description: 'Dengan adanya Smart Agriculture, komunitas petani di daerah terpencil seperti Yogyakarta kini memiliki akses ke teknologi yang sebelumnya tidak tersedia.',
                imgSrc: '/tentang.jpg',
                reverse: false
            }
        ]
    },
    {
        id: 2,
        title: 'Inovasi Pertanian di Jawa Tengah Menghadapi Tantangan Kekeringan',
        location: 'Jawa Tengah, Magelang',
        imgSrc: '2.jpg',
        content: 'Di Jawa Tengah, para petani di Magelang berhasil mengatasi kekeringan dengan menggunakan teknologi irigasi modern...',
        quotes: 'Kami merasa terbantu dengan adanya teknologi irigasi otomatis, membuat musim kemarau bukan lagi ancaman bagi hasil panen.',
        name: 'Pak Suradi',
        position: 'Ketua Kelompok Tani Desa Sukomoro',
        about: [
            {
                title: 'Membangun Irigasi di Tengah Kekeringan',
                description: 'Menghadapi kekeringan berkepanjangan, para petani di Magelang membangun sistem irigasi yang lebih efisien...',
                imgSrc: '/petani.jpg',
                reverse: false
            }
        ]
    },
    {
        id: 3,
        title: 'Transformasi Pertanian Digital di Pati',
        location: 'Jawa Tengah, Pati',
        imgSrc: '4.jpg',
        content: 'Petani di Pati mulai beralih ke teknologi digital untuk meningkatkan hasil panen dan efisiensi kerja...',
        quotes: 'Dengan teknologi digital, kami dapat memantau tanah dan tanaman secara real-time.',
        name: 'Bu Rina Kartini',
        position: 'Petani Modern di Pati',
        about: [
            {
                title: 'Teknologi di Setiap Langkah',
                description: 'Setiap tahapan produksi kini lebih terukur dan bisa dioptimalkan berkat teknologi yang disediakan oleh Smart Agriculture...',
                imgSrc: '/sawah.jpg',
                reverse: true
            }
        ]
    },
    {
        id: 4,
        title: 'Modernisasi Lahan Terpencil di Temanggung',
        location: 'Jawa Tengah, Temanggung',
        imgSrc: '1.jpg',
        content: 'Di lahan terpencil Temanggung, petani kini bisa menikmati hasil yang lebih optimal berkat penggunaan sensor tanah...',
        quotes: 'Sensor ini sangat membantu kami dalam memahami kondisi tanah dengan lebih baik.',
        name: 'Pak Amat',
        position: 'Petani Kopi di Temanggung',
        about: [
            {
                title: 'Keajaiban Sensor Tanah',
                description: 'Sensor tanah membantu mengukur kelembaban dan nutrisi tanah sehingga petani dapat mengambil tindakan yang tepat...',
                imgSrc: '/about.jpg',
                reverse: false
            }
        ]
    },
    {
        id: 5,
        title: 'Pengembangan Hasil Panen Berkelanjutan di Banyumas',
        location: 'Jawa Tengah, Banyumas',
        imgSrc: '1.jpg',
        content: 'Inisiatif baru untuk pertanian berkelanjutan di Banyumas membawa harapan baru bagi petani lokal...',
        quotes: 'Kami tidak hanya fokus pada hasil panen, tapi juga kelestarian lingkungan.',
        name: 'Ibu Ningsih',
        position: 'Pemimpin Proyek Pertanian Berkelanjutan',
        about: [
            {
                title: 'Berkelanjutan untuk Masa Depan',
                description: 'Proyek ini bertujuan untuk mengurangi penggunaan pestisida dan meningkatkan penggunaan pupuk organik...',
                imgSrc: '/sawah.jpg',
                reverse: true
            }
        ]
    },
    {
        id: 6,
        title: 'Peningkatan Kualitas Tanah di Kebumen',
        location: 'Jawa Tengah, Kebumen',
        imgSrc: '3.jpg',
        content: 'Petani di Kebumen fokus pada peningkatan kualitas tanah dengan pendekatan organik...',
        quotes: 'Kami melihat peningkatan hasil panen berkat metode baru ini.',
        name: 'Pak Joko',
        position: 'Pengelola Lahan Pertanian',
        about: [
            {
                title: 'Pendekatan Organik',
                description: 'Penggunaan pupuk organik secara bertahap menggantikan pupuk kimia yang lebih berisiko...',
                imgSrc: '/about.jpg',
                reverse: false
            }
        ]
    },
    {
        id: 7,
        title: 'Pemanfaatan Drone untuk Monitoring Tanaman di Klaten',
        location: 'Jawa Tengah, Klaten',
        imgSrc: '1.jpg',
        content: 'Petani di Klaten menggunakan drone untuk memantau kondisi tanaman secara lebih efektif...',
        quotes: 'Drone membantu kami mengamati area pertanian yang luas tanpa harus ke lapangan setiap saat.',
        name: 'Pak Toni',
        position: 'Petani Padi di Klaten',
        about: [
            {
                title: 'Teknologi Drone untuk Semua',
                description: 'Dengan teknologi drone, kami dapat mengidentifikasi masalah lebih cepat seperti serangan hama...',
                imgSrc: '/petani.jpg',
                reverse: true
            }
        ]
    },
    {
        id: 8,
        title: 'Pertanian Cerdas di Brebes: Masa Depan Petani Bawang',
        location: 'Jawa Tengah, Brebes',
        imgSrc: '3.jpg',
        content: 'Di Brebes, para petani bawang mulai menggunakan teknologi pertanian cerdas untuk meningkatkan hasil dan kualitas produk...',
        quotes: 'Dengan sistem pertanian cerdas, kami lebih siap menghadapi tantangan seperti cuaca ekstrim dan penyakit tanaman.',
        name: 'Bu Sri',
        position: 'Petani Bawang di Brebes',
        about: [
            {
                title: 'Bawang Berkualitas Tinggi',
                description: 'Dengan adanya teknologi baru, bawang dari Brebes kini memiliki kualitas yang lebih baik dan diakui secara nasional...',
                imgSrc: '/sawah.jpg',
                reverse: false
            }
        ]
    }
];

export default newsItems;
