import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ccrp.css";

const Ccrp = () => {
  const { i18n } = useTranslation();

  if (i18n.language === "id") {
    return (
      <article>
        <section className="main-col">
          <h1 className="h2">Colouring Cities Research Programme</h1>
          <img src="images/200531_CC research program-logo.png"></img>
          <p>
            The Colouring Cities Research Programme (CCRP) didirikan di Alan
            Turing Institute pada tahun 2020. Tujuannya adalah untuk
            memfasilitasi kolaborasi antara institusi akademik, yang tertarik
            untuk me-reproduksi open code{" "}
            <a href="https://colouringlondon.org/" target={"_blank"}>
              Colouring London
            </a>
            untuk memajukan penelitian tentang bahan bangunan yang berkelanjutan
            dan tangguh, dan untuk mendukung New Urban Agenda PBB{" "}
            <a
              href="https://habitat3.org/the-new-urban-agenda/"
              target={"_blank"}
            >
              New Urban Agenda
            </a>
            .
          </p>
          <p>
            Mitra CCRP menguji metode pengambilan, pembuatan, pengumpulan,
            verifikasi, visualisasi, dan penyebaran data secara terbuka. Empat
            pendekatan terintegrasi untuk penyediaan data sedang dieksplorasi:
            pengumpulan dataset secara terbuka yang tersedia, melalui teknik
            komputasi dan automasi data melalui inferensi, crowdsourcing, dan
            streaming langsung. Tujuan kolektif kami adalah untuk mendukung
            peningkatan dalam volume, variasi, akurasi, presisi, dan kualitas
            data spasial yang tersedia secara terbuka pada level bangunan. Hal
            ini diperlukan untuk memahami komposisi stok bangunan, kinerja dan
            perilaku dinamis, untuk mendukung penelitian dan pembuatan
            kebijakan.
          </p>
          <p>
            Tujuan CCRP adalah untuk mengembangkan jaringan internasional dari
            basis data terbuka/platform pertukaran pengetahuan Colouring Cities
            yang dikelola secara kolaboratif yang menyediakan data dan informasi
            tentang stok bangunan nasional. Program ini juga menawarkan ruang
            yang ramah, informal, kreatif, non-kompetitif, dan eksperimental
            bagi tim multidisiplin untuk bekerja sama dalam penyediaan konten
            dan kode. Program saat ini melibatkan peneliti dari enam negara,
            menyatukan keahlian dalam ilmu komputer, artificial intelligence,
            machine learning, ilmu perkotaan, ilmu data, fisika, sejarah
            arsitektur, ilmu lingkungan, ilmu material, konservasi dan warisan,
            perumahan, perencanaan dan arsitektur.
          </p>
          <p>Contoh pertanyaan penelitian yang menarik bagi kami meliputi:</p>
          <ul>
            <li>
              Jenis bangunan apa yang ada di kota - tipologi, usia, penggunaan,
              ukuran, dll?
            </li>
            <li>
              {" "}
              Berapa banyak dari masing-masing yang ada dan di mana mereka
              berada?{" "}
            </li>
            <li>
              Berapa lama berbagai jenis bangunan bertahan dan mengapa serta
              bagaimana kita dapat membantu bangunan beradaptasi dengan cara
              yang berkelanjutan dan tangguh?
            </li>
            <li>
              Seberapa bergunakah platform Colouring Cities dalam menganalisis
              dan memodelkan stok dan/atau dalam melacak kinerja, mengurangi
              aliran energi dan limbah, menargetkan retrofit, dan meningkatkan
              kualitas perumahan?
            </li>
            <li>
              Bagaimana data longitudinal juga dapat dikumpulkan dan apa yang
              dapat diceritakan kepada kita tentang kelangsungan hidup, risiko,
              dan kerentanan dalam stok bangunan?
            </li>
            <li>
              Dapatkah platform juga berfungsi ganda sebagai alat manajemen
              bencana dan bagaimana kita dapat berbagi pembelajaran tentang
              rekonstruksi yang tangguh?
            </li>
            <li>
              Dapatkah pola-pola umum ditemukan di seluruh negara dalam
              kaitannya dengan bentuk dan kekurangan bangunan, kesehatan
              bangunan dan kematian bangunan?
            </li>
            <li>
              {" "}
              Seberapa mirip atau berbeda stok bangunan di berbagai negara?
            </li>
            <li>
              Dapatkah data yang dihasilkan, bila dikombinasikan dengan
              pendekatan AI dan machine learning, mengungkapkan pola dan masalah
              yang tidak dapat dilihat sebelumnya?
            </li>
            <li>
              Apakah terdapat ‘aturan’ spatiotemporal terhadap dinamika stok
              bangunan, dan jika ada, bisakah kita menggunakan ini untuk
              melakukan simulasi pemodelan baru, untuk bisa secara lebih akurat
              memprediksi perubahan stok bangunan dalam jangka panjang?
            </li>
          </ul>
          <p>
            Pada awal 2020, University of Bahrain's Urban and Housing Lab
            memulai pengerjaan untuk mengeksplorasi Colouring Bahrain, didukung
            oleh Otoritas Kebudayaan dan Purbakala Bahrain (Bahrain Authority
            for Culture and Antiquities). Mitra kami di Bahrain dan Lebanon juga
            ingin bekerja sama untuk mendukung lembaga penelitian lain di Timur
            Tengah yang ingin mengembangkan platform Colouring Cities.
          </p>
          <p>
            Pada tahun 2020, the Cities Future Research Centre di University of
            New South Wales, menerima dana untuk mengembangkan platform
            Colouring Australia sebagai bagian dari penelitiannya untuk Platform
            Analisis Data Perumahan Australia. Platform ini mulai tersedia di
            kota-kota besar Australia.
          </p>
          <p>
            Pada tahun 2021, the National Technical University of Athens mulai
            mengembangkan Colouring Athens dengan dukungan finansial dari
            Development and Destination Management Agency di Athena.
          </p>
          <p>
            Pada tahun 2021 King's College London mendapatkan pendanaan internal
            untuk bekerja sama dengan Institut Teknologi Bandung dalam
            mengembangkan Colouring Indonesia. Idenya adalah untuk menganalisa
            potensial dari inisiatif ini untuk kasus di perkotaan Global South,
            khususnya dalam konteks pengambilan data yang berkaitan dengan
            keadaan darurat perubahan iklim.
          </p>
          <p>
            The Leibniz Institute of Ecological Urban and Regional Development
            (IOER); EMPA, Laboratorium Federal Swiss untuk Ilmu dan Teknologi
            Material, dan The Color Research Institute, China Academy of Art
            juga berkontribusi pada CCRP.
          </p>
          <img
            className="about-image"
            src="images/about_image_2.jpg"
            alt="Colouring Beirut"
          ></img>
        </section>
      </article>
    );
  } else {
    return (
      <article>
        <section className="main-col">
          <h1 className="h2">Colouring Cities Research Programme</h1>
          <img src="images/200531_CC research program-logo.png"></img>
          <p>
            The Colouring Cities Research Programme (CCRP) was set up at the
            Alan Turing Institute in 2020. Its aim is to facilitate
            collaboration between academic institutions, interested in
            reproducing{" "}
            <a href="https://colouringlondon.org/" target={"_blank"}>
              Colouring London
            </a>
            's open code, to advance research into sustainable and resilient
            building stocks, and to support the United Nations'{" "}
            <a
              href="https://habitat3.org/the-new-urban-agenda/"
              target={"_blank"}
            >
              New Urban Agenda
            </a>
            .
          </p>
          <p>
            Our collective aim is to stimulate a rapid increase in the volume,
            variety, accuracy, precision, and quality of open spatial data
            available on stocks, at building level. This is necessary to
            understand stock composition, performance, and dynamic behaviour, to
            support research and policy making.
          </p>
          <p>
            The CCRP's aim is to develop an international network of
            collaboratively maintained Colouring Cities open databases/knowledge
            exchange platforms providing data and information on national
            buildings stocks. The programme also offers a friendly, informal,
            creative, non-competitive, and experimental space for
            multidisciplinary teams to work together on content and code. The
            programme currently involves researchers from six countries,
            bringing together expertise in computer science, artificial
            intelligence, machine learning, urban science, data science,
            physics, architectural history, environmental science, material
            science, conservation and heritage, housing, planning and
            architecture.
          </p>
          <p>
            Examples of research questions of particular interest to the group
            include:
          </p>
          <ul>
            <li>
              What kinds of buildings exist in the city - typology, age, use,
              size, etc.?
            </li>
            <li>How many of each are there and where are they located?</li>
            <li>
              How long do different types of building last and why and how can
              we help buildings adapt in a sustainable and resilient way?
            </li>
            <li>
              How useful can Colouring Cities platforms be in analysing and
              modelling stocks and/or in tracking performance, reducing energy
              and waste flows, targeting retrofit, and improving housing
              quality?
            </li>
            <li>
              How can longitudinal data also be collected and what can this tell
              us about survival, risk and vulnerability in stocks?
            </li>
            <li>
              Can platforms also double up as disaster management tools and how
              can we share learning of resilient reconstruction?
            </li>
            <li>
              Can common patterns be found across countries in relation to
              building form and deprivation, poor health and mortality?
            </li>
            <li>How similar or different are stocks across countries?</li>
            <li>
              Can generated data, when combined with AI and machine learning
              approaches, reveal patterns and problems unable to be seen before?
            </li>
            <li>
              Might universal spatiotemporal 'rules' of dynamic behaviour exist
              for stocks, and if so, could these be used in new types of
              simulation models, to more accurately forecast change in the
              longer term?
            </li>
          </ul>
          <p>
            In early 2020 the University of Bahrain's Urban and Housing Lab
            began exploratory work on Colouring Bahrain, supported by the
            Bahrain Authority for Culture and Antiquities. Our partners in
            Bahrain and Lebanon are also looking to work collaboratively to
            support other research institutions in the Middle East wishing to
            develop Colouring Cities platforms.
          </p>
          <p>
            In 2020 the Cities Future Research Centre at the University of New
            South Wales, received funding to develop Colouring Australia
            platform as part of its research into The Australian Housing Data
            Analytics Platform. Roll out is currently occurring in major
            Australian cities.
          </p>
          <p>
            In 2021 the National Technical University of Athens began work on
            Colouring Athens with funding support from the Athens Development
            and Destination Management Agency.
          </p>
          <p>
            In 2021 King's College London secured internal funding to work with
            the Institut Teknologi Bandung on Colouring Indonesia. The idea is
            to also investigate the potential usefulness of the initiative for
            the Global South, particularly in the context of data capture
            relating to responding climate change emergencies.
          </p>
          <p>
            The Leibniz Institute of Ecological Urban and Regional Development
            (IOER); EMPA, the Swiss Federal Laboratories for Material Science
            and Technology, and The Colour Research Institute, China Academy of
            Art also contributes to the CCRP.
          </p>
          <img
            className="about-image"
            src="images/about_image_2.jpg"
            alt="Colouring Beirut"
          ></img>
        </section>
      </article>
    );
  }
};

export default Ccrp;
