import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./who-is-envolved.css";

const WhoIsEnvolved = () => {
  const { i18n } = useTranslation();

  if (i18n.language === "id") {
    return (
      <article>
        <section className="main-col">
          <h1 className="h2">Siapa saja yang terlibat?</h1>
          <h1 className="h3">Kontributor kami</h1>
          <p>
            Colouring Indonesia adalah bagian dari Colouring Cities,
            open-database dan platform berbagi pengetahuan yang dibangun oleh
            dan untuk mereka yang menggunakan, membuat, mengelola, memantau
            bangunan, dan mereka yang melakukan penelitian tentang koleksi data
            bangunan. Entah kamu seorang penduduk yang hanya dapat mewarnai
            informasi untuk satu bangunan, atau kamu adalah seorang ahli atau
            badan pemerintah yang menyediakan kumpulan data untuk kota secara
            keseluruhan, kontribusi sekecil apapun darimu sangat kami hargai.
            Setiap entri akan mendukung penelitian ini dan juga membantu kami
            untuk membuat kota lebih berkelanjutan.
          </p>
          <h1 className="h3">Tim kami</h1>
          <p>
            Colouring Indonesia dikembangkan oleh tim multidisiplin yang
            terhubung dengan jaringan internasional yang ahli dalam berbagai
            bidang, termasuk data-science, software engineering, arsitektur,
            konservasi bangunan bersejarah, desain grafis, open data, colour,
            dan pengembangan alat pemeliharaan kolaboratif, yang dipimpin
            masyarakat, yang dirancang untuk meningkatkan kualitas koleksi data
            bangunan. Platform ini dibangun oleh King’s College London dan
            Institut Teknologi Bandung dan menjadi bagian dari International
            Colouring Cities Research Programme di The Alan Turing Institute
            sebagai pusat Data Science dan Artficial Intelligence di Inggris.
          </p>
          <h1 className="h3">Dukungan finansial</h1>
          <p>
            Colouring Indonesia didukung secara finansial oleh King’s College
            London, United Kingdom.
          </p>
          <h1 className="h3">Penasihat</h1>
          <p>
            Terima kasih kami sampaikan kepada banyak organisasi di Indonesia,
            serta departemen pemerintah dan akademik yang telah menyediakan
            waktu, dorongan, dan ide tentang konten, sejak 2021. Termasuk di
            dalamnya pemerintah DKI Jakarta. Kami juga mengucapkan terimakasih
            kepada kontributor awal kami yang telah mengikuti kegiatan
            crowdsourcing ‘Mapathon’ di Institut Teknologi Bandung pada bulan
            Agustus 2022.
          </p>
          <h1 className="h3"> Mitra internasional </h1>
          <p>
            Mitra internasional kami adalah: Universitas Amerika Beirut
            (Colouring Beirut); Universitas Bahrain & Otoritas Bahrain untuk
            Kebudayaan dan Purbakala (Colouring Bahrain); Universitas New South
            Wales, Pusat Penelitian City Futures (Colouring Australia);
            Universitas Teknik Nasional Athena (Colouring Athens); The Leibniz
            Institute for Ecological Urban and Regional Development (Colouring
            Dresden); Universidad Distrital "Francisco José de Caldas", Fakultas
            Teknik, dan The Color Research Institute, China Academy of Art.
          </p>
          <h1 className="h3">Terima kasih</h1>
          <p>
            Terima kasih khusus ditujukan kepada individu-individu yang
            memberikan dukungan, dorongan, dan bantuan luar biasa kepada
            Colouring Indonesia selama fase pengembangan pertamanya (2022):
          </p>
          {/* <p>Bantu kami mewarnai bangunan di Indonesia, sekarang!</p> */}
          <p>
            Zahratu Shabrina, Adiwan Fahlan Aritenang, Anjar Dimara Sakti,
            Muhammad Farhan Nahduddin, Eri Krismayaningsih, Polly Hudson, Falli
            Palaiologou, Tom Russell, Ed Chalstrey, Mateusz Konieczny, dan
            George Panagiotopoulos.
          </p>
        </section>
      </article>
    );
  } else {
    return (
      <article>
        <section className="main-col">
          <h1 className="h2">Who's involved?</h1>
          <h1 className="h3">Our contributors</h1>
          <p>
            Colouring Indonesia was developed based on the prototype of Colouring
            London, as an open database and knowledge sharing platform built by
            and for those using, creating, managing, monitoring buildings and
            those undertaking research into the building stock. Whether you're a
            resident able to colour in information for just one building, or a
            specialist society or government body providing datasets for the
            city as a whole, your contribution is greatly appreciated. Each
            entry will support research into open tools that help us make our
            cities more sustainable.
          </p>
          <h1 className="h3">Our team</h1>
          <p>
Colouring Indonesia is run by a small multidisciplinary team and is connected with an international network of experts in various fields, data-science, software-engineering, architecture, historic building conservation, graphic design, open data, colour, and the development of collaborative, community-led maintenance tools. designed to improve the quality of building data collection. This platform was developed by King's College London and Institut Teknologi Bandung and is part of the Colouring Cities Research Program based at The Alan Turing Institute, The United Kingdom's National Institute for Data Science and Artificial Intelligence.
          </p>
          <h1 className="h3">Our funders</h1>
          <p>
            Colouring Indonesia is funded internally by King’s College London, United Kingdom.
          </p>
          <h1 className="h3">Advisors</h1>
          <p>
Our thanks go to the many organisations in Indonesia, as well as government and academic departments who have provided time, encouragement, and ideas about content, since 2021. This includes the DKI Jakarta government entity. We also would like to thank our initial contributors who joined our crowdsourcing ‘Mapathon’ event at Institut Teknologi Bandung in August 2022.
          </p>
          <h1 className="h3">Our international partners</h1>
          <p>
Our international partners are: The American University of Beirut (Colouring Beirut); The University of Bahrain & the Bahrain Authority for Culture and Antiquities (Colouring Bahrain); The University of New South Wales, City Futures Research Centre (Colouring Australia); The National Technical University of Indonesia (Colouring Indonesia); The Leibniz Institute for Ecological Urban and Regional Development (Colouring Dresden); The Universidad Distrital "Francisco José de Caldas", Faculty of Engineering, and The Colour Research Institute, China Academy of Art.
          </p>
          <h1 className="h3">Special thanks</h1>
          <p>
            Special thanks go to the following individuals who provided
            exceptional support, encouragement, and assistance to Colouring
            Indonesia during its first development phase (2022):
          </p>
          {/* <p>Help us colour Indonesia’s buildings now!</p> */}
          <p>
Zahratu Shabrina, Adiwan Fahlan Aritenang, Anjar Dimara Sakti, Muhammad Farhan Nahduddin, Eri Krismayaningsih, Polly Hudson, Falli Palaiologou, Tom Russell, Ed Chalstrey, Mateusz Konieczny, and George Panagiotopoulos.

          </p>
        </section>

      </article>
    );
  }
};

export default WhoIsEnvolved;
