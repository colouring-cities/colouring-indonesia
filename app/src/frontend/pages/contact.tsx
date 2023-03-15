import React from "react";
import { useTranslation } from "react-i18next";
import "./contact.css";

const ContactPage = () => {
  const { i18n } = useTranslation();

  if (i18n.language === "gr") {
    return (
      <article>
        <section className="main-col">
          <h1 className="h2">Επικοινωνία</h1>
          <p>
            {" "}
            Το Colouring Athens έχει σχεδιαστεί ως μια βιώσιμη πλατφόρμα
            ανταλλαγής γνώσεων/ανοικτών δεδομένων χαμηλού κόστους που μπορεί να
            αναπαραχθεί από άλλες πόλεις χρησιμοποιώντας τον ανοιχτό της κώδικα.
          </p>

          <p>
            {" "}
            Αναπτύσσεται από μια μικρή, αφοσιωμένη ομάδα στο Εθνικό Μετσόβιο
            Πολυτεχνείο. Δεν είμαστε σε θέση να απαντήσουμε σε μεμονωμένα
            ερωτήματα, αλλά καλωσορίζουμε εποικοδομητικά σχόλια σχετικά με
            τρόπους βελτίωσης του ιστότοπου, καθώς και σχετικά με άλλους τύπους
            δεδομένων και νέες δυνατότητες που μπορεί να θέλετε να δείτε.
          </p>

          <p>
            {" "}
            Μπορείτε να μας στείλετε τα σχόλια ή τις ερωτήσεις σας στη διεύθυνση{" "}
            ...
            {/* <a href="https://discuss.colouring.london/">
              https://discuss.colouring.london/
            </a> */}
            .
          </p>

          <p>
            {" "}
            Για να δείτε τον τεχνικό μας ιστότοπο και τον κώδικά μας,
            επισκεφτείτε το Github στη διεύθυνση:{" "}
            <a href="https://github.com/colouring-cities/colouring-Athens">
              https://github.com/colouring-cities/colouring-Athens
            </a>
            .
          </p>

          <p>
            Για ερωτήσεις τύπου, επικοινωνήστε με το Σπουδαστήριο Πολεοδομικών
            Ερευνών της Σχολής Αρχιτεκτόνων Μηχανικών του Εθνικού Μετσόβιου
            Πολυτεχνείου.{" "}
            {/* <a href="https://www.turing.ac.uk/contact-us/press-office">
              The Alan Turing Institute press office
            </a> */}
          </p>

          <p>
            Εάν χρησιμοποιήσετε εικόνες ή δεδομένα από το Colouring Athens,
            αναφέρετε τους συνεργάτες μας που συνέλεξαν τα δεδομένα, το
            OpenStreetMap και την Ελληνική Στατιστική Αρχή που παρείχαν τις
            γεωμετρίες κτιρίων ως εξής:
          </p>
          <p>
            <pre>
              <code>
                Colouring Athens http://Athens.colouringcities.org/ Τα δεδομένα
                χαρακτηριστικών κτιρίου είναι © των συνεισφερόντων του Colouring
                Athens. Οι χάρτες περιέχουν δεδομένα λειτουργικού συστήματος ©
                Πνευματικά δικαιώματα Crown: Υπόβαθρα χαρτών και περιγράμματα
                κτιρίων.
              </code>
            </pre>
          </p>
          <hr />
          <div className="logo-parent">
            <div className="logo ">
              <div className="grid">
                <div className="row">
                  <div className="cell background-location"></div>
                  <div className="cell background-use"></div>
                  <div className="cell background-type"></div>
                  <div className="cell background-age"></div>
                </div>
                <div className="row">
                  <div className="cell background-size"></div>
                  <div className="cell background-construction"></div>
                  <div className="cell background-streetscape"></div>
                  <div className="cell background-team"></div>
                </div>
                <div className="row">
                  <div className="cell background-sustainability"></div>
                  <div className="cell background-planning"></div>
                  <div className="cell background-dynamics"></div>
                  <div className="cell background-community"></div>
                </div>
              </div>
              <h1 className="logotype">
                <span>Colouring</span>
                <span>Athens</span>
              </h1>
            </div>
          </div>
          {/* <p>
            <img className="d-block mx-auto" src="images/logo-cl.png"></img>
          </p> */}
        </section>
      </article>
    );
  } else {
    return (
      <article>
        <section className="main-col">
          <h1 className="h2">Contact</h1>
          <p>
            {" "}
            Examples of subcategories within our 12 main categories are shown
            below. We're trying to keep collection as efficient and simple as
            possible.
          </p>

          <p>
            {" "}
            It is being developed by a small, dedicated team at The National
            Technical University of Athens. We are unable to answer individual
            queries but we welcome constructive comments on how to improve the
            site, and on other types of data and new features you might like to
            see.
          </p>

          <p>
            {" "}
            You can send us comments or ask questions on our discussion threads
            at{" "}
            <a href="https://github.com/colouring-cities/colouring-Athens">
              https://github.com/colouring-cities/colouring-Athens
            </a>
            .
          </p>

          <p>
            {" "}
            To view our technical site and platform code please visit Github at:{" "}
            <a href="https://github.com/colouring-cities/colouring-Athens">
              https://github.com/colouring-cities/colouring-Athens
            </a>
            .
          </p>

          <p>
            For press enquiries please contact the Urban Planning Research Lab
            of the National Technical University of Athens.
          </p>

          <p>
            If you capture images or download shapefiles from the maps of
            Colouring Athens, please credit our contributors who collected the
            data, OpenStreetMap and the Hellenic Statistical Authority who
            provided the basemaps and building geometries as follows:
          </p>
          <p>
            <pre>
              <code>
                Colouring Athens http://Athens.colouringcities.org/ Building attribute
                data is © Colouring Athens contributors. Maps contain OS data ©
                Crown copyright: OS Maps baselayers and building outlines.
              </code>
            </pre>
          </p>
          <hr />
          <div className="logo-parent">
            <div className="logo ">
              <div className="grid">
                <div className="row">
                  <div className="cell background-location"></div>
                  <div className="cell background-use"></div>
                  <div className="cell background-type"></div>
                  <div className="cell background-age"></div>
                </div>
                <div className="row">
                  <div className="cell background-size"></div>
                  <div className="cell background-construction"></div>
                  <div className="cell background-streetscape"></div>
                  <div className="cell background-team"></div>
                </div>
                <div className="row">
                  <div className="cell background-sustainability"></div>
                  <div className="cell background-planning"></div>
                  <div className="cell background-dynamics"></div>
                  <div className="cell background-community"></div>
                </div>
              </div>
              <h1 className="logotype">
                <span>Colouring</span>
                <span>Athens</span>
              </h1>
            </div>
          </div>
        </section>
      </article>
    );
  }
};

export default ContactPage;
