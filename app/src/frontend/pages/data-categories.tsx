import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./data-categories.css";

const DataCategories = () => {
  const { i18n } = useTranslation();

  if (i18n.language === "id") {
    return (
      <article>
        <section className="main-col">
          <h1 className="h2">Kategori dan metode pengambilan data</h1>
          <p>
            {" "}
            Apa jenis bangunan yang membentuk Indonesia? Berapa ukuran dan
            bentuk mereka? Bagaimana mereka dibuat dan dari apa? Siapa yang
            membangunnya dan mana yang paling hemat energi? Di mana kamu dapat
            menemukan berbagai jenis? Dan mana yang kamu sukai, dan yang kamu
            pikir berpengaruh pada keberhasilan dan kesejahteraan suatu kota.
          </p>
          <p>
            {" "}
            Kami mengumpulkan 12 jenis data untuk menjawab ini dan banyak
            pertanyaan lain tentang Indonesia. Untuk melakukan ini, kami menguji
            empat pendekatan: kumpulan dataset massal yang pada, komputasi,
            crowdsourcing, dan pengambilan data secara langsung.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-a">
              <span className="grid-item-title">Lokasi</span>
              <br></br>
              <span className="grid-item-subtitle">
                Dimanakah bangunannya?{" "}
              </span>
            </div>
            <div className="grid-item grid-item-b">
              <span className="grid-item-title">Penggunaan</span>
              <br></br>
              <span className="grid-item-subtitle">Penggunaan saat ini</span>
            </div>
            <div className="grid-item grid-item-c">
              <span className="grid-item-title">Tipe</span>
              <br></br>
              <span className="grid-item-subtitle">
                Tipe dan penggunaan sebenarnya
              </span>
            </div>
            <div className="grid-item grid-item-d">
              <span className="grid-item-title">Umur</span>
              <br></br>
              <span className="grid-item-subtitle">Tanggal terbangun</span>
            </div>
            <div className="grid-item grid-item-e">
              <span className="grid-item-title">Ukuran</span>
              <br></br>
              <span className="grid-item-subtitle">Dimensi</span>
            </div>
            <div className="grid-item grid-item-f">
              <span className="grid-item-title">Konstruksi</span>
              <br></br>
              <span className="grid-item-subtitle">Metode dan material</span>
            </div>
            <div className="grid-item grid-item-g">
              <span className="grid-item-title">Konteks Jalan</span>
              <br></br>
              <span className="grid-item-subtitle">
                Plot, jalan, tanaman hijau
              </span>
            </div>
            <div className="grid-item grid-item-h">
              <span className="grid-item-title">Tim</span>
              <br></br>
              <span className="grid-item-subtitle">
                Pembangun & penghargaan
              </span>
            </div>
            <div className="grid-item grid-item-i">
              <span className="grid-item-title">Perencanaan</span>
              <br></br>
              <span className="grid-item-subtitle">Kontrol</span>
            </div>
            <div className="grid-item grid-item-j">
              <span className="grid-item-title">Keberlanjutan</span>
              <br></br>
              <span className="grid-item-subtitle">Kinerja & pemeliharaan</span>
            </div>
            <div className="grid-item grid-item-k">
              <span className="grid-item-title">Dinamika</span>
              <br></br>
              <span className="grid-item-subtitle">Masa guna & sejarah</span>
            </div>
            <div className="grid-item grid-item-l">
              <span className="grid-item-title">Komunitas</span>
              <br></br>
              <span className="grid-item-subtitle">
                Manfaat bagi masyarakat setempat
              </span>
            </div>
          </div>
          <h1 className="h2">Kategori data</h1>
          <p>
            {" "}
            Dikarenakan kompleksitas data yang dibutuhkan, kami telah mencoba
            mengelompokkan data kami sesederhana mungkin. Dua belas grid
            kategori di atas juga berfungsi ganda sebagai logo kami, dan sebagai
            panel kontrol di dalam platform Colouring Indonesia untuk kemudahan
            menavigasikan peta kami.
          </p>
          <p>
            {" "}
            Di dalam grid kategori tersebut terdapat lebih dari 50 sub kategori
            data. Hal Ini telah dipilih melalui konsultasi dengan lebih dari 50
            organisasi yang dikombinasikan dengan analisis secara detail tentang
            kebutuhan data para peneliti yang bekerja dalam ilmu keberlanjutan
            dan analisis energi, dan ilmu perkotaan, serta berdasarkan penilaian
            dari jurnal akademis. Apabila daftar data yang tersedia ini tidak
            lengkap, maka sub kategori baru dapat ditambahkan kapan saja.
            Pekerjaan kami juga melibatkan analisa dan pemilihan format data
            yang sesuai.
          </p>
          <p>
            {" "}
            Grid dibagi menjadi dua bagian. Yang pertama meliputi data
            <span className="bold-text">Lokasi</span>,{" "}
            <span className="bold-text">Penggunaan</span>,{" "}
            <span className="bold-text">Tipe</span>,{" "}
            <span className="bold-text">Umur</span>,{" "}
            <span className="bold-text">Ukuran</span>,{" "}
            <span className="bold-text">Konstruksi</span> and{" "}
            <span className="bold-text">Konteks Jalan</span> yang berisi
            informasi tentang bentuk dan penggunaan bangunan. Ini relevan untuk
            berbagai aplikasi mulai dari menghitung dan memprediksi volume emisi
            energi, hingga menilai kualitas dan pasokan perumahan, hingga
            memprediksi kegagalan struktural atau menginformasikan pengembangan
            rencana lokal. Dengan menggunakan data ini, model kota berbasis
            aturan 3D terbuka juga dapat mulai dibangun. Lima kategori lainnya
            yakni
            <span className="bold-text"></span>Tim,{" "}
            <span className="bold-text">Perencanaan</span>,{" "}
            <span className="bold-text">Keberlanjutan</span>,{" "}
            <span className="bold-text">Dinamika</span> and{" "}
            <span className="bold-text">Komunitas</span>
            semua data memiliki beragam fungsi yang dirancang tidak hanya untuk
            menangkap melainkan juga mendukung analisis guna mendukung tujuan
            besar yakni membantu peningkatan kualitas lingkungan dan
            keberlanjutannya. Platform ini diharapkan dapat menjadi wadah
            pertukaran informasi dari semua pihak yang terlibat di dalamnya.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-a data-categories-title">
              <span className="grid-item-title">Lokasi</span>
              <br></br>
              <span className="grid-item-subtitle">Dimanakah bangunannya?</span>
            </div>
          </div>
          {/* <h1 className="h2">Lokasi</h1>
          <p> Dimanakah bangunannya?</p> */}
          <p>
            <span className="bold-text">Lokasi</span> adalah tipe data pertama
            dalam kategori kami karena semua tipe data lainnya bergantung pada
            ketersediaan koordinat bangunan termasuk alamat dan batas bangunan
            untuk kemudahan pengumpulan, pemetaan, dan analisis secara spasial.
            Semakin banyak jumlah kategori lokasi yang diisi pada peta kami,
            semakin gelap warna bangunannya, memungkinkan kamu melihat dengan
            cepat di mana lebih banyak data diperlukan.
          </p>
          <p>
            Batas bangunan adalah jenis data yang sangat penting yang penting
            bagi platform Colouring Cities untuk bekerja, karena mereka
            bertindak sebagai lemari arsip mini, menyimpan, menemukan, dan
            memvisualisasikan data yang dikumpulkan. Kami menggunakan data batas
            bangunan dari Jakarta satu yang kemudian dipetakan diatas poligon
            dari Open Street Map (OSM).
          </p>
          <p>
            Batas bangunan dari OSM mungkin akan dibutuhkan untuk kota-kota lain
            di Indonesia apabila data resmi dari pemerintah tidak tersedia.
            Keterbatasan dari penggunaan data dari pemerintah adalah data
            mungkin tidak sesuai dengan kondisi saat ini secara akurat karena
            pembaharuan data masih dilakukan di periode tertentu saja.
          </p>
          <p>
            Data batas bangunan yang terdapat di Colouring Indonesia jumlahnya
            lebih dari 1.6 juta data di Jakarta.
          </p>
          <p>
            Selain itu, progress yang cepat dalam perbaikan pengumpulan data
            batas bangunan dalam skala global sedang dilakukan oleh kolaborasi
            antara Microsoft/Bing dan OSM, dan penggunaan artificial
            intelligence dan penggunaan indera jauh untuk menghasilkan data
            batas bangunan. Saat ini, metode tersebut telah menghasilkan data
            batas bangunan di Amerika Serikat, Kanada, Uganda dan Australia
            dimana dilakukan integrasi dengan OSM, dan juga departemen pemetaan
            internasional yang memiliki data jaringan jalan (apabila tersedia)
            dan juga sumber-sumber data informasi geografis lainnya.
          </p>
          <p>
            Kemitraan antara OSM dan Microsoft sangatlah penting karena ini
            berarti data batas bangunan akan semakin banyak tersedia pada skala
            global (dengan kualitas yang dapat terus ditambah sejalan dengan
            pengadaan pemetaan oleh departemen pemetaan nasional), memberikan
            peluang untuk pengadaan analisis menggunakan berbagai data pada
            level bangunan.
          </p>
          <p>
            Sementara itu, kami akan mencoba untuk mengumpulkan dan menyediakan
            sebanyak mungkin informasi lokasi bangunan semampu kami. Ini
            meliputi nomor bangunan, alamat, koordinat lokasi dan OSM ID (untuk
            geometri atau poligon).
          </p>
          <p>
            Sumber data lokasi terbuka yang paling signifikan saat ini adalah
            OpenStreetMap (OSM), yang telah menjadi yang terdepan dalam
            mendorong rilis data terbuka di kota-kota sejak tahun 2004. Model
            pemeliharaan kolaboratifnya, bersama dengan Wikipedia juga sangat
            mempengaruhi pendekatan Coloring Indonesia. Awalnya diatur untuk
            data crowdsource di jalan-jalan, OSM sekarang juga berfokus pada
            penyediaan data terbuka di gedung-gedung. Oleh karena itu, semua
            data yang dihasilkan oleh platform Coloring Cities dirancang untuk
            terhubung dengan mulus ke OSM, dengan ID OSM, dan data atribut
            terintegrasi jika memungkinkan.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-b data-categories-title">
              <span className="grid-item-title">Penggunaan</span>
              <br></br>
              <span className="grid-item-subtitle">Penggunaan saat ini</span>
            </div>
          </div>
          {/* <h1 className="h2">Penggunaan</h1>
          <p>Penggunaan saat ini</p> */}
          <p>
            Untuk menganalisis kota dengan cara yang lebih ilmiah, komposisi
            dasarnya perlu dipahami terlebih dahulu. Salah satu jenis data yang
            paling umum digunakan dalam perencanaan, analisis perkotaan dan
            penilaian energi adalah data penggunaan lahan. Ini memberikan
            informasi tentang jenis bangunan yang ada dan berapa banyak contoh
            dari masing-masing jenis yang berbeda serta berapa banyak ruang
            lantai yang tersedia untuk berbagai jenis kegiatan. Hal ini juga
            membantu menjawab pertanyaan seperti di mana jenis klaster
            penggunaan lahan tertentu, apakah ini sama di semua kota, dan
            bagaimana hal ini mempengaruhi cara kota beroperasi?
          </p>
          <p>
            Walaupun ada permintaan yang cukup besar untuk data penggunaan
            lahan, pada level properti dan bangunan, pengadaan data yang bisa
            diakses oleh publik masih terbatas di Indonesia. Namun sebenarnya,
            informasi tersebut pada level bangunan sebenarnya bisa dikumpulkan,
            dan biasanya dapat diperoleh dengan melihat foto bangunan tersebut
            menggunakan Google Street View. Kebanyakan dari properti yang berada
            di Indonesia didominasi oleh bangunan perumahan. Mengenali rumah
            cukup mudah untuk dilakukan. Membedakan antara bangunan kantor dan
            apartemen bisa dilakukan melalui pengamatan lebih lanjut misalnya
            dengan melihat ada atau tidaknya gorden. Mengidentifikasi penggunaan
            bangunan lainnya mungkin lebih sulit untuk dilakukan, namun bisa
            dengan cara melihat bentuk dan ukuran bangunan, pemasangan jendela,
            papan reklame atau bentuk pintu masuk.
          </p>
          <p>
            Jika kamu ingin menambahkan data, cukup pilih sebuah bangunan dan
            putuskan ‘Kategori’ penggunaan lahan mana yang dimiliki aktivitas
            tersebut. Ini adalah: Mixed use, perumahan, perdagangan, industry,
            perdagangan dan pergudangan, rekreasi, institusi pendidikan,
            kesehatan, transportasi, utilitas dan infrastruktur, sedang dalam
            konstruksi, tidak terpakai, dan sebagainya.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-c data-categories-title">
              <span className="grid-item-title">Tipe</span>
              <br></br>
              <span className="grid-item-subtitle">
                Bentuk & penggunaan sebenarnya
              </span>
            </div>
          </div>
          {/* <h1 className="h2">Tipe</h1>
          <p> Bentuk & penggunaan sebenarnya </p> */}
          <p>
            Jenis kegiatan dan kapasitas jumlah orang yang sewaktu merancang
            bangunan, serta periode di mana ia dibangun, akan mempengaruhi
            bentuk bangunan, termasuk ukuran, bentuk, fitur dekoratif, dan tata
            letaknya. Karakteristik tersebut juga digunakan untuk mengelompokkan
            bangunan ke dalam tipe atau tipologi tertentu, di mana salinan atau
            versi banguan juga sering tersedia.
          </p>
          <p>
            Memahami lokasi berbagai <span className="bold-text">tipologi</span>{" "}
            bangunan penting untuk mendukung kegiatan seperti retrofit bangunan
            untuk meningkatkan efisiensi energi, memungkinkan metode dan
            anggaran retrofit untuk ditargetkan secara lebih akurat dan memahami
            bagaimana bangunan bersandingan satu dengan lainnya. Memahami
            tingkat kelangsungan hidup untuk tipologi bangunan yang berbeda, dan
            mengidentifikasi dan mempertahankan bangunan yang dapat beradaptasi,
            juga diperlukan untuk mengurangi pemborosan dan energi yang tidak
            diperlukan dalam konstruksi, dan untuk belajar dari masa lalu untuk
            membangun lebih banyak bangunan tahan lama untuk masa depan.
          </p>
          <p>
            Ketika dikombinasikan dengan data batas bangunan, ukuran, tinggi dan
            usia, informasi tipologi juga membantu membangun gambaran bentuk
            geometris 3D bangunan. Hal ini semakin penting dalam analisis energi
            dan panas perkotaan, dan dalam pengembangan model kota digital
            berbasis 3D yang mampu mensimulasikan perencanaan masa depan dan
            skenario energi.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-d data-categories-title">
              <span className="grid-item-title">Umur</span>
              <br></br>
              <span className="grid-item-subtitle">Tanggal terbangun</span>
            </div>
          </div>
          {/* <h1 className="h2">Umur</h1>
          <p>Tanggal terbangun</p> */}
          <p>
            <span className="bold-text">Umur</span> bangunan biasanya
            dikumpulkan dan digunakan oleh badan dan ahli sejarah bangunan,
            pihak konservasi bangunan dan ahli yang memahami morfologi
            perkotaan.
          </p>
          <p>
            Informasi mengenai umur bangunan yang diambil melalui tanggal
            konstruksi sangatlah penting untuk menentukan lokasi geografis dari
            tipe bangunan. Dalam waktu dekat ini, umur bangunan juga sering
            digunakan dalam riset energi dan kota berkelanjutan, terutama untuk
            analisis emisi dan perkiraan urban heat. Disini, tanggal konstruksi
            sering dikombinasikan dengan data atribut lainnya untuk membantu
            menggambarkan bentuk bangunan, terutama bentuk geometri dan volume
            bangunan. Data umur bangunan, dikombinasikan dengan sejarah
            konstruksi bangunan dan data pembongkaran bangunan (yang termasuk
            kedalam data ‘Dinamika’ bangunan) juga dibutuhkan untuk memproduksi
            data keberlangsungan hidup bangunan. Data tersebut dibutuhkan untuk
            memprediksi dimana dan kapan stok bangunan harus dibangun kembali,
            untuk merencanakan perpanjangan keberlangsungan hidup bangunan.
            (Data umur bangunan juga kedepannya akan digunakan dalam kategori
            ‘Keberlanjutan’, untuk menyediakan indikasi potensi keberlangsungan
            hidup bangunan).
          </p>

          <div className="grid-container">
            <div className="grid-item grid-item-e data-categories-title">
              <span className="grid-item-title">Ukuran</span>
              <br></br>
              <span className="grid-item-subtitle">Dimensi</span>
            </div>
          </div>
          {/* <h1 className="h2">Ukuran</h1>
          <p>Dimensi</p> */}
          <p>
            Data tentang <span className="bold-text">ukuran</span> dan geometri
            bangunan kota memiliki banyak aplikasi mulai dari penggunaan dalam
            model kota digital 3D, hingga memahami implikasi terhadap perubahan
            ketinggian bangunan kota, hingga menganalisis dan memprediksi
            penggunaan energi, dan emisi gas rumah kaca, serta konsentrasi dari
            urban heat.
          </p>
          <p>
            Data tentang dimensi bangunan juga relevan dengan banyak bidang
            penelitian perkotaan lainnya, mulai dari menganalisis kapasitas
            perumahan dan mengidentifikasi daerah yang cocok untuk densifikasi,
            hingga mengamati (dalam ilmu perkotaan dan morfologi perkotaan) pola
            perubahan jangka panjang dalam bentuk perkotaan.
          </p>
          <p>
            Pada kategori 'Ukuran', kami mengumpulkan data ketinggian bangunan,
            jumlah lantai, dan luas lantai.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-f data-categories-title">
              <span className="grid-item-title">Konstruksi</span>
              <br></br>
              <span className="grid-item-subtitle">Metode & material</span>
            </div>
          </div>
          {/* <h1 className="h2">Konstruksi</h1>
          <p>Metode & material </p> */}
          <p>
            Apa material yang dipakai pada bangunan-bangunan di Indonesia? Apa
            tipe dan metode sistem <span className="bold-text">konstruksi</span>{" "}
            yang digunakan? Apakah material bangunan utama yang digunakan pada
            inti bangunan? Apakah bangunan menggunakan batu bata, kayu, baja
            atau beton? Seberapa banyak bagian yang dilapisi glaze? Apakah
            bangunan tersebut pernah direnovasi atau di retrofit untuk membantu
            mengurangi emisi karbon dan mengurangi biaya energi?
          </p>
          <p>
            Tipe informasi ini berguna untuk profesional yang berkerja di bidang
            pembangunan perkotaan yang tergabung dalam kegiatan perbaikan,
            manajemen, konservasi, retrofit, desain, dan konstruksi bangunan di
            Indonesia. Ide yang kami gunakan untuk kategori ini adalah untuk
            membantu membuat repository This type of information is useful to
            built environment professionals involved in the repair, management,
            conservation, retrofit, design and construction of Indonesia’s
            buildings. However, it is not currently available for the city. The
            idea is to use this category to help create a live, open repository
            for data about construction in Indonesia.
          </p>
          <p>
            Understanding what kind of material is stocked where in the city,
            and the location of different types of structural systems, is also
            relevant to many other types of research, from calculating potential
            energy and construction waste flows, to targeting funds for
            retrofitting programmes, to geolocating vulnerable construction
            systems. Spatial construction data can also help us explore
            questions such as: Are there health issues associated with specific
            types of building materials or building systems? Which types of
            systems can be most easily repaired? Which have the shortest
            lifespan and where are these located? Which are the most energy
            efficient? How can we use our collective knowledge of the operation
            of systems and materials to inform sustainable design and
            construction in Indonesia for the future?
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-g data-categories-title">
              <span className="grid-item-title">Streetscape</span>
              <br></br>
              <span className="grid-item-subtitle">Plot, Street, Greenery</span>
            </div>
          </div>
          {/* <h1 className="h2">Streetscape</h1>
          <p>Plot, street, greenery</p> */}
          <p>
            In our <span className="bold-text">streetscape</span> category, we
            are collecting information on all greenery, street width, pavements,
            bicycle lanes and carriageway. Greenery specifically has a number of
            roles in Indonesia: It adds beauty, but it also acts as a climate
            moderator, improving thermal comfort within the city by providing
            shade, and reducing the build-up of heat and urban heat islands. It
            can also improve health, by reducing pollution and improving air
            quality through the production of oxygen, absorption of carbon
            dioxide and heavy metals, and by trapping dust particles.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-h data-categories-title">
              <span className="grid-item-title">Team</span>
              <br></br>
              <span className="grid-item-subtitle">Creators & Awards</span>
            </div>
          </div>
          {/* <h1 className="h2">Team</h1>
          <p>Creators & Awards</p> */}
          <p>
            <span className="bold-text">Team</span> captures data on designers
            and builders. For most buildings this requires expert input from
            professional and amateur historians. Awards and quality marks are
            also included here, to celebrate construction firms' commitment to
            sustainability, and industry skills and expertise. The section is
            also designed to drive up new build quality by enabling the
            longevity, energy Performance and workability/attractiveness of
            buildings (as viewed by users/citizens) to be more easily tracked
            over time and used to improve building design in future.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-i data-categories-title">
              <span className="grid-item-title">Planning</span>
              <br></br>
              <span className="grid-item-subtitle">Controls</span>
            </div>
          </div>
          {/* <h1 className="h2">Planning</h1>
          <p>Controls</p> */}
          <p>
            <span className="bold-text">Planning</span> captures data on allowed
            FAR, plot coverage and maximum allowed building height, and most
            importantly, on the preservation status of buildings. This helps
            communities understand in advance if the buildings they consider to
            be of local importance are being threatened, and allows them to use
            the 'Community category' to highlight buildings they have found to
            contribute to the area/city.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-j data-categories-title">
              <span className="grid-item-title">Sustainability</span>
              <br></br>
              <span className="grid-item-subtitle">
                Performance & Maintenance
              </span>
            </div>
          </div>
          {/* <h1 className="h2">Sustainability</h1>
          <p>Performance & Maintenance</p> */}
          <p>
            <span className="bold-text">Sustainability</span> is a broad
            category designed not only to capture data on the maintenance level
            of the building, identify buildings in risk of collapse and collect
            data on energy Performance, but also to stimulate discussion on
            inclusion of new types of data designed to maximise building
            longevity and minimise emissions. Data categories of future interest
            include for example the repairability, adaptability and potential
            lifespan of buildings/or building components.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-k data-categories-title">
              <span className="grid-item-title">Dynamics</span>
              <br></br>
              <span className="grid-item-subtitle">Lifespan & History</span>
            </div>
          </div>
          {/* <h1 className="h2">Dynamics</h1>
          <p>Lifespan & History</p> */}
          <p>
            <span className="bold-text">Dynamics</span> captures data on the
            evolution of the city, on incremental development within plots over
            long periods of time, and on building lifespans. These are needed to
            track rates of change, assess typology survival rate, predict
            lifespans and anticipate vulnerability to demolition and system
            failure. They are also required in urban metabolism studies to
            assess and predict the volume of energy and waste flows occurring in
            the city, generated from changes to the stock, and differences in
            the amount of energy used in new material extraction/new
            construction/old building disposal compared with building
            updating/extension/reuse.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-l data-categories-title">
              <span className="grid-item-title">Community</span>
              <br></br>
              <span className="grid-item-subtitle">Works well locally?</span>
            </div>
          </div>
          {/* <h1 className="h2">Community</h1>
          <p>Works well locally?</p> */}
          <p>
            Our 'Like me?' category simply asks whether you like the building.
            You might think it works well on the inside, or on the outside,
            contributes to the local community or adds to the quality, diversity
            and success of the city as a whole. You can 'Like' as many buildings
            as you wish but you only have one vote per building. The more
            'Likes' there are, the deeper the colour will get.
          </p>
          <p>
            Colouring Indonesia is designed, in the first instance, as a
            constructive, welcoming environment for knowledge exchange about the
            building stock. It is included to encourage engagement. For these
            reasons we do not collect 'dislikes'.
          </p>
          <p>
            It is however designed to stimulate discussion. To create a more
            sustainable, efficient, successful and healthy city we need to build
            better buildings, demolish less and reuse and upgrade more.
            Conversation between those using and those creating and managing
            buildings is vital. Buildings that work well for many members of the
            local community do so for a reason.
          </p>
          <p>
            Categories are not set in stone. Where there is general consensus
            that a category or subcategory should be adjusted or added, relevant
            changes can be made. You can add your suggestions to our discussion
            threads{" "}
            <a
              href="https://github.com/colouring-cities/colouring-indonesia"
              target="blank_"
            >
              here
            </a>
            .
          </p>
          <h1 className="h2">Subcategories</h1>
          <p>
            We are gradually releasing subcategories for testing. If you are
            able to help us by adding or checking the accuracy of data, just go
            to Edit Maps, click on a building, choose any category of interest
            and fill in any information you can. Every entry and/or verification
            helps. Some categories are easier to fill than others. Our
            'Community' category is perhaps the best place to start. Here you
            can simply colour any building you think contributes to the city.{" "}
          </p>
          <p>
            Examples of subcategories within our 12 main categories are shown
            below. We're trying to keep collection as efficient and simple as
            possible.
          </p>
        </section>
      </article>
    );
  } else {
    return (
      <article>
        <section className="main-col">
          <h1 className="h2">Data Categories & Collection Methods</h1>
          <p>
            {" "}
            What kinds of buildings make up Indonesia? What are their size and
            shape? How are they made and what of? Who built them and which are
            the most energy efficient? Where can you find different types? And
            which do you like and think contributes to the success and
            well-being of the city.
          </p>
          <p>
            {" "}
            We are collecting twelve types of data to answer these and many
            other questions about Indonesia. To do this we are testing four
            approaches: existing bulk dataset collation; computational
            generation; crowdsourcing and live streaming when possible.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-a">
              <span className="grid-item-title">Location</span>
              <br></br>
              <span className="grid-item-subtitle">Where's the building?</span>
            </div>
            <div className="grid-item grid-item-b">
              <span className="grid-item-title">Use</span>
              <br></br>
              <span className="grid-item-subtitle">Current Use</span>
            </div>
            <div className="grid-item grid-item-c">
              <span className="grid-item-title">Type</span>
              <br></br>
              <span className="grid-item-subtitle">Form & Original Use</span>
            </div>
            <div className="grid-item grid-item-d">
              <span className="grid-item-title">Age</span>
              <br></br>
              <span className="grid-item-subtitle">Date built</span>
            </div>
            <div className="grid-item grid-item-e">
              <span className="grid-item-title">Size</span>
              <br></br>
              <span className="grid-item-subtitle">Dimensions</span>
            </div>
            <div className="grid-item grid-item-f">
              <span className="grid-item-title">Construction</span>
              <br></br>
              <span className="grid-item-subtitle">Methods & Materials</span>
            </div>
            <div className="grid-item grid-item-g">
              <span className="grid-item-title">Street Context</span>
              <br></br>
              <span className="grid-item-subtitle">Plot, Street, Greenery</span>
            </div>
            <div className="grid-item grid-item-h">
              <span className="grid-item-title">Team</span>
              <br></br>
              <span className="grid-item-subtitle">Creators & Awards</span>
            </div>
            <div className="grid-item grid-item-i">
              <span className="grid-item-title">Planning</span>
              <br></br>
              <span className="grid-item-subtitle">Controls</span>
            </div>
            <div className="grid-item grid-item-j">
              <span className="grid-item-title">Sustainability</span>
              <br></br>
              <span className="grid-item-subtitle">
                Performance & Maintenance
              </span>
            </div>
            <div className="grid-item grid-item-k">
              <span className="grid-item-title">Dynamics</span>
              <br></br>
              <span className="grid-item-subtitle">Lifespan & History</span>
            </div>
            <div className="grid-item grid-item-l">
              <span className="grid-item-title">Community</span>
              <br></br>
              <span className="grid-item-subtitle">Works well locally?</span>
            </div>
          </div>
          <h1 className="h2">Data Categories</h1>
          <p>
            {" "}
            Owing to the complexity of the stock as a system, we have tried to
            group our datasets in as simple a way as possible. The
            12-category-grid above also doubles as our logo, and as Colouring
            Indonesia’s control panel, allowing you to easily navigate across
            our maps.
          </p>
          <p>
            {" "}
            The grid contains over 50 subcategories of data. These have been
            selected through consultation with over fifty organisations combined
            with a detailed analysis of data needs of researchers working in
            sustainability science and energy analysis, and urban science, based
            on the assessment of academic papers. The list is not exhaustive and
            new subcategories can be added at any point. Our work also involves
            investigating and selecting suitable data formats.
          </p>
          <p>
            {" "}
            The grid is divided into two sections. The first includes data on
            <span className="bold-text">Location</span>,{" "}
            <span className="bold-text">Use</span>,{" "}
            <span className="bold-text">Type</span>,{" "}
            <span className="bold-text">Age</span>,{" "}
            <span className="bold-text">Size</span>,{" "}
            <span className="bold-text">Construction</span> and{" "}
            <span className="bold-text">Street Context</span> which contain
            information on the form, use and context of the building. These are
            relevant to multiple applications ranging from calculating and
            predicting volume of energy emissions, to assessing housing quality
            and supply, to predicting structural failure or informing the
            development of local plans. Using these data, open 3D rule-based
            city models can also begin to be built. The remaining five
            categories on the grid - <span className="bold-text"></span>Team,{" "}
            <span className="bold-text">Planning</span>,{" "}
            <span className="bold-text">Sustainability</span>,{" "}
            <span className="bold-text">Dynamics</span> and{" "}
            <span className="bold-text">Community</span> - all have multiple
            functions, and are designed not only to capture and contain data,
            but also to support analysis and help improve quality and
            sustainability in stocks through greater engagement and knowledge
            exchange from all those involved in.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-a data-categories-title">
              <span className="grid-item-title">Location</span>
              <br></br>
              <span className="grid-item-subtitle">Where's the building?</span>
            </div>
          </div>
          {/* <h1 className="h2">Location</h1>
          <p>Where's the building?</p> */}
          <p>
            <span className="bold-text">Location</span> data is the first type
            of data in the grid as all other data types rely on coordinates,
            addresses and building footprints for every building, to allow data
            be collected, mapped and spatially analysed. The greater the number
            of location categories filled on our map the darker the building
            colour is, allowing you to quickly see where more data are required.
          </p>
          <p>
            Building footprints are a very important type of data essential for
            Colouring Cities platforms to work, as they act as mini filing
            cabinets, storing, locating and visualising contributed data. We are
            using official polygon/building footprint basemap from Jakarta Satu
            overlaid on top of OpenStreetMap (OSM) polygons.
          </p>
          <p>
            OSM footprints might be needed for other cities when the official
            data is not available. The limitation of using official government
            data is that the data might not correspond accurately to the current
            situation as updates are being done periodically.
          </p>
          <p>
            The final building footprint basemap consists of more than 1.6
            million building dataset in Jakarta.
          </p>
          <p>
            Furthermore, rapid progress is improving global scale of footprint
            coverage is being made through Microsoft/Bing’s collaboration with
            OSM, and its application of artificial intelligence to satellite
            imagery, to generate open footprints. This has so far produced open
            footprint datasets for the US, Canada, Uganda and Australia, which
            are being integrated by OSM, alongside open street-network and
            international national mapping agency data (where available) as well
            as other types of open, crowdsourced, geoinformation.
          </p>
          <p>
            The OSM/Microsoft partnership is extremely important in that it
            means that footprints are likely to become increasingly available at
            global scale (with the quality of these able to be improved through
            parallel release by national mapping agencies), opening up offering
            opportunities for scientific analysis of diverse types of building
            attribute data at global scale.
          </p>
          <p>
            In the meantime, we will try to collect and release as much
            information on Location as we can. This includes building number and
            address, lat/long coordinates and OSM ID (geometry/polygon) number.
          </p>
          <p>
            The most significant current source of open location data is
            OpenStreetMap (OSM), which has been at the forefront of driving
            release of open data on cities since 2004. Its collaborative
            maintenance model, along with Wikipedia's has also strongly
            influenced Colouring Cities' approach. Originally set up to
            crowdsource data on streets, OSM also now focuses on providing open
            data on buildings. All data generated by Colouring Cities platforms
            are therefore designed to link seamlessly to OSM, with OSM IDs, and
            attribute data integrated wherever possible.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-b data-categories-title">
              <span className="grid-item-title">Use</span>
              <br></br>
              <span className="grid-item-subtitle">Current Use</span>
            </div>
          </div>
          {/* <h1 className="h2">Use</h1>
          <p>Current use</p> */}
          <p>
            In order to analyse cities in a more scientific way, their basic
            composition first needs to be understood. One of the most commonly
            used types of data in planning, urban analysis and energy assessment
            is <span className="bold-text">land use data</span>. This provides
            information of the kind of buildings that exist and how many
            examples of each different kind are there and how much floor space
            is available for different types of activity. It also helps answer
            questions such as where do specific types of land use cluster, is
            this same in all cities, and how does this affect the way the city
            operates?
          </p>
          <p>
            Despite widespread demand for land use data, at property and
            building level, for cities as a whole, comprehensive open land use
            data are still not available in Indonesia. Fortunately, information
            on building use is quite easy to collect, and can usually be worked
            out simply by viewing the front of the building from the street or
            using a streetview image. The vast majority of properties are
            residential. Recognising houses is quite straightforward. Blocks of
            flats can be differentiated from offices by the presence of
            curtains. Identifying activities within non-residential buildings is
            slightly harder but activities can often be determined by the shape
            and size of buildings, their window layout as well as signage to the
            front, or at entrances.
          </p>
          <p>
            If you would like to add data just select a building and decide
            which land use 'Group' the activity belongs to. These are: Mixed
            use, Residential, Retail, Industry & Workshops, Wholesale &
            Warehouses, Offices & Services, Recreation & Leisure, Education,
            Health, Transport, Utilities & Infrastructure, Under construction,
            Unused - Vacant, Other.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-c data-categories-title">
              <span className="grid-item-title">Type</span>
              <br></br>
              <span className="grid-item-subtitle">Form & Original Use</span>
            </div>
          </div>
          {/* <h1 className="h2">Type</h1>
          <p>Form & Original Use</p> */}
          <p>
            The kind of activities and number of people a building was
            originally designed to hold, as well as the period in which it was
            built, will affect a building's form, including its size, shape,
            decorative features and layout. Such characteristics are also used
            to group buildings into specific types or typologies, where copies
            or versions also exist.
          </p>
          <p>
            Understanding the location of different building{" "}
            <span className="bold-text">typologies</span> is important in areas
            such as the retrofit of buildings to improve energy efficiency,
            allowing retrofit methods and budgets to be more accurately targeted
            and understanding how buildings are packed together. Understanding
            survival rates for different typologies, and identifying and
            retaining adaptable ones, is also necessary to reduce unnecessary
            waste and energy in construction, and to learn from the past to
            build more long-lasting buildings for the future.
          </p>
          <p>
            When combined with footprint, size, height and age data, typology
            information also helps build a picture of a building's 3D geometric
            form. This is increasingly important in energy and urban heat
            analysis, and in the development of 3D rule-based digital city
            models able to simulate future planning and energy scenarios.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-d data-categories-title">
              <span className="grid-item-title">Age</span>
              <br></br>
              <span className="grid-item-subtitle">Date built</span>
            </div>
          </div>
          {/* <h1 className="h2">Age</h1>
          <p>Date Built</p> */}
          <p>
            Building <span className="bold-text">age</span> is also commonly
            used, and recorded, by architectural historians, building
            conservationists, heritage specialists and urban morphologists.
          </p>
          <p>
            Information on building age, generated from date of construction, is
            extremely important for geolocating building types. More recently
            building age data have also become increasingly used in energy and
            urban sustainability research, particularly in emissions analysis
            and urban heat assessments. Here construction date is often combined
            with other attribute data to help describe the building's form,
            particularly its geometry and volume. Age data, combined with
            historical construction and demolition data (captured in our
            'Dynamics ' category) are also needed to produce actual building
            lifespan data. This is required to forecast when and where specific
            areas of the stock may have to be replaced, and to plan lifespan
            extension. (Age data will also in future be used, within our
            'Sustainability' category, to provide an indication of potential
            building lifespans as well.)
          </p>

          <div className="grid-container">
            <div className="grid-item grid-item-e data-categories-title">
              <span className="grid-item-title">Size</span>
              <br></br>
              <span className="grid-item-subtitle">Dimensions</span>
            </div>
          </div>
          {/* <h1 className="h2">Size</h1>
          <p>Dimensions</p> */}
          <p>
            Data on the <span className="bold-text">size</span> and geometry of
            a city's buildings have many applications ranging from use in 3D
            digital city models, to understanding implications to changes to the
            height of a city's buildings, to analysing and predicting energy
            use, and greenhouse gas emissions, and the build-up of urban heat.
          </p>
          <p>
            Data on the dimensions of buildings are also relevant to many other
            areas of urban research, from analysing housing capacity and
            identifying areas suitable for densification, to observing (within
            urban science and urban morphology) long-term patterns of change
            within urban form.
          </p>
          <p>
            In the 'Size' category, data on building height and number of
            storeys are collected.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-f data-categories-title">
              <span className="grid-item-title">Construction</span>
              <br></br>
              <span className="grid-item-subtitle">Methods & Materials</span>
            </div>
          </div>
          {/* <h1 className="h2">Construction</h1>
          <p>Methods & Materials</p> */}
          <p>
            What are Indonesia’s buildings made of and how are they built? What
            type of <span className="bold-text">construction</span> systems and
            methods are used? What is the main material used for the building's
            core? Does it have solid brick walls, or perhaps a wooden, steel or
            concrete frame? How much is glazed? Has it recently been refurbished
            and retrofitted to help reduce carbon emissions and reduce energy
            costs?
          </p>
          <p>
            This type of information is useful to built environment
            professionals involved in the repair, management, conservation,
            retrofit, design and construction of Indonesia’s buildings. However,
            it is not currently available for the city. The idea is to use this
            category to help create a live, open repository for data about
            construction in Indonesia.
          </p>
          <p>
            Understanding what kind of material is stocked where in the city,
            and the location of different types of structural systems, is also
            relevant to many other types of research, from calculating potential
            energy and construction waste flows, to targeting funds for
            retrofitting programmes, to geolocating vulnerable construction
            systems. Spatial construction data can also help us explore
            questions such as: Are there health issues associated with specific
            types of building materials or building systems? Which types of
            systems can be most easily repaired? Which have the shortest
            lifespan and where are these located? Which are the most energy
            efficient? How can we use our collective knowledge of the operation
            of systems and materials to inform sustainable design and
            construction in Indonesia for the future?
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-g data-categories-title">
              <span className="grid-item-title">Streetscape</span>
              <br></br>
              <span className="grid-item-subtitle">Plot, Street, Greenery</span>
            </div>
          </div>
          {/* <h1 className="h2">Streetscape</h1>
          <p>Plot, street, greenery</p> */}
          <p>
            In our <span className="bold-text">streetscape</span> category, we
            are collecting information on all greenery, street width, pavements,
            bicycle lanes and carriageway. Greenery specifically has a number of
            roles in Indonesia: It adds beauty, but it also acts as a climate
            moderator, improving thermal comfort within the city by providing
            shade, and reducing the build-up of heat and urban heat islands. It
            can also improve health, by reducing pollution and improving air
            quality through the production of oxygen, absorption of carbon
            dioxide and heavy metals, and by trapping dust particles.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-h data-categories-title">
              <span className="grid-item-title">Team</span>
              <br></br>
              <span className="grid-item-subtitle">Creators & Awards</span>
            </div>
          </div>
          {/* <h1 className="h2">Team</h1>
          <p>Creators & Awards</p> */}
          <p>
            <span className="bold-text">Team</span> captures data on designers
            and builders. For most buildings this requires expert input from
            professional and amateur historians. Awards and quality marks are
            also included here, to celebrate construction firms' commitment to
            sustainability, and industry skills and expertise. The section is
            also designed to drive up new build quality by enabling the
            longevity, energy Performance and workability/attractiveness of
            buildings (as viewed by users/citizens) to be more easily tracked
            over time and used to improve building design in future.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-i data-categories-title">
              <span className="grid-item-title">Planning</span>
              <br></br>
              <span className="grid-item-subtitle">Controls</span>
            </div>
          </div>
          {/* <h1 className="h2">Planning</h1>
          <p>Controls</p> */}
          <p>
            <span className="bold-text">Planning</span> captures data on allowed
            FAR, plot coverage and maximum allowed building height, and most
            importantly, on the preservation status of buildings. This helps
            communities understand in advance if the buildings they consider to
            be of local importance are being threatened, and allows them to use
            the 'Community category' to highlight buildings they have found to
            contribute to the area/city.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-j data-categories-title">
              <span className="grid-item-title">Sustainability</span>
              <br></br>
              <span className="grid-item-subtitle">
                Performance & Maintenance
              </span>
            </div>
          </div>
          {/* <h1 className="h2">Sustainability</h1>
          <p>Performance & Maintenance</p> */}
          <p>
            <span className="bold-text">Sustainability</span> is a broad
            category designed not only to capture data on the maintenance level
            of the building, identify buildings in risk of collapse and collect
            data on energy Performance, but also to stimulate discussion on
            inclusion of new types of data designed to maximise building
            longevity and minimise emissions. Data categories of future interest
            include for example the repairability, adaptability and potential
            lifespan of buildings/or building components.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-k data-categories-title">
              <span className="grid-item-title">Dynamics</span>
              <br></br>
              <span className="grid-item-subtitle">Lifespan & History</span>
            </div>
          </div>
          {/* <h1 className="h2">Dynamics</h1>
          <p>Lifespan & History</p> */}
          <p>
            <span className="bold-text">Dynamics</span> captures data on the
            evolution of the city, on incremental development within plots over
            long periods of time, and on building lifespans. These are needed to
            track rates of change, assess typology survival rate, predict
            lifespans and anticipate vulnerability to demolition and system
            failure. They are also required in urban metabolism studies to
            assess and predict the volume of energy and waste flows occurring in
            the city, generated from changes to the stock, and differences in
            the amount of energy used in new material extraction/new
            construction/old building disposal compared with building
            updating/extension/reuse.
          </p>
          <div className="grid-container">
            <div className="grid-item grid-item-l data-categories-title">
              <span className="grid-item-title">Community</span>
              <br></br>
              <span className="grid-item-subtitle">Works well locally?</span>
            </div>
          </div>
          {/* <h1 className="h2">Community</h1>
          <p>Works well locally?</p> */}
          <p>
            Our 'Like me?' category simply asks whether you like the building.
            You might think it works well on the inside, or on the outside,
            contributes to the local community or adds to the quality, diversity
            and success of the city as a whole. You can 'Like' as many buildings
            as you wish but you only have one vote per building. The more
            'Likes' there are, the deeper the colour will get.
          </p>
          <p>
            Colouring Indonesia is designed, in the first instance, as a
            constructive, welcoming environment for knowledge exchange about the
            building stock. It is included to encourage engagement. For these
            reasons we do not collect 'dislikes'.
          </p>
          <p>
            It is however designed to stimulate discussion. To create a more
            sustainable, efficient, successful and healthy city we need to build
            better buildings, demolish less and reuse and upgrade more.
            Conversation between those using and those creating and managing
            buildings is vital. Buildings that work well for many members of the
            local community do so for a reason.
          </p>
          <p>
            Categories are not set in stone. Where there is general consensus
            that a category or subcategory should be adjusted or added, relevant
            changes can be made. You can add your suggestions to our discussion
            threads{" "}
            <a
              href="https://github.com/colouring-cities/colouring-indonesia"
              target="blank_"
            >
              here
            </a>
            .
          </p>
          <h1 className="h2">Subcategories</h1>
          <p>
            We are gradually releasing subcategories for testing. If you are
            able to help us by adding or checking the accuracy of data, just go
            to Edit Maps, click on a building, choose any category of interest
            and fill in any information you can. Every entry and/or verification
            helps. Some categories are easier to fill than others. Our
            'Community' category is perhaps the best place to start. Here you
            can simply colour any building you think contributes to the city.{" "}
          </p>
          <p>
            Examples of subcategories within our 12 main categories are shown
            below. We're trying to keep collection as efficient and simple as
            possible.
          </p>
        </section>
      </article>
    );
  }
};

export default DataCategories;
