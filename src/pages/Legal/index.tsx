import { useState, useEffect } from "react";
import { Stack } from "../../components/Stack";
import { initFadeInAnimation } from "../../animation";
import { SimpleHeader } from "../../components/Header/HeaderSimple";
import { useTranslation } from "react-i18next";
import "./style.css";
import { Select } from "../../components/Select";
import { Text } from "../../components/Text";

export const PrivacyPolicy = () => {
  const [language, setLanguage] = useState("it"); // Default to English
  const { t } = useTranslation();

  useEffect(() => {
    initFadeInAnimation(".fade-in");
  }, []);

  const languageOptions = [
    { value: "it", label: t("IT") },
    { value: "en", label: t("EN") },
    { value: "es", label: t("ES") },
    { value: "fr", label: t("FR") },
  ];

  const renderPolicy = () => {
    switch (language) {
      case "it":
        return <ItalianPolicy />;
      case "es":
        return <SpanishPolicy />;
      case "fr":
        return <FrenchPolicy />;
      case "en":
      default:
        return <EnglishPolicy />;
    }
  };
  return (
    <>
      <SimpleHeader
        navLink="https://wubook.net/nneb/bk/?ep=8c0ed861&lang=it&c=EUR&f=29%2F03%2F2024&t=30%2F03%2F2024&o=2.0.0.0"
        buttonTitle={t("book-now")}
      />
      <Stack
        flexDirection="column"
        paddinghorizontal={60}
        className="background-white"
      >
        {/* Language Selector */}
        <Select
          onChange={(value) => setLanguage(value)}
          options={languageOptions}
          variant="black"
        />

        {/* Render the selected policy */}
        <Text bold fontSize="lg">
          <br></br> Privacy Policy
        </Text>
        {renderPolicy()}

        <Text bold fontSize="lg">
          <br></br> Isola dei Mori S.r.l.
        </Text>
        <LegalInfo />
        <br></br>
      </Stack>
    </>
  );
};

const LegalInfo = () => {
  return (
    <>
      <p>Sede legale: Via Nazionale 199, 09017 Sant’Antioco (SU)</p>
      <p>
        Registro delle Imprese di Cagliari, codice fiscale e partita IVA
        03140250923
      </p>
      <p>CCIAA di Cagliari e Oristano, REA n. CA-249494</p>
      <p>Capitale sociale 100.000,00 € i.v.</p>
      <p>
        Email: <a href="mailto:info@isoladeimori.it">info@isoladeimori.it</a>
      </p>
      <p>
        PEC: <a href="mailto:isoladeimori@pec.it">isoladeimori@pec.it</a>
      </p>
    </>
  );
};

const ItalianPolicy = () => {
  return (
    <>
      <p>Gentile Cliente,</p>
      <p>
        desideriamo informarla, ai sensi dell’articolo 13 del Codice sulla
        privacy (D. Lgs. 196/2003), che il trattamento dei suoi dati personali
        avverrà con correttezza e trasparenza, per fini leciti e tutelando la
        sua riservatezza ed i suoi diritti.
      </p>
      <p>
        Il trattamento sarà effettuato anche con l’ausilio di mezzi informatici
        per le seguenti finalità:
      </p>
      <ul>
        <li>
          per adempiere all’obbligo previsto dall’articolo 109 del R.D.
          18.6.1931 n. 773, che ci impone di registrare e comunicare alla
          Questura le generalità dei clienti alloggiati;
        </li>
        <li>
          per adempiere ai vigenti obblighi amministrativi, contabili e fiscali;
        </li>
        <li>
          per accelerare le procedure di registrazione in caso di suoi
          successivi soggiorni presso la nostra struttura;
        </li>
        <li>
          per inviarle nostri messaggi promozionali e aggiornamenti sulle
          tariffe e sulle offerte praticate.
        </li>
      </ul>
      <p>
        Desideriamo inoltre informarla che il conferimento dei suoi dati per i
        trattamenti di cui ai punti 1 e 2 è obbligatorio e, in caso di Suo
        rifiuto a fornirli, non potremo ospitarla nella nostra struttura.
      </p>
      <p>
        Se desidera che siano effettuati i trattamenti di cui ai punti 3 e 4
        dovrà invece fornirci il suo consenso. Il consenso potrà comunque essere
        successivamente revocato opponendosi ai trattamenti.
      </p>
      <p>
        Per qualsiasi ulteriore informazione, e per far valere i diritti a lei
        riconosciuti dall’articolo 7 del Codice sulla privacy (D. Lgs.
        196/2003), potrà rivolgersi al Titolare dei trattamenti.
      </p>
      <p>
        Di seguito per Sua opportuna informazione riportiamo il testo dell’art.
        7 del Codice sulla privacy (D. Lgs. 196/2003).
      </p>
      <h2> Diritto di accesso ai dati personali ed altri diritti.</h2>
      <p>
        1. L'interessato ha diritto di ottenere la conferma dell'esistenza o
        meno di dati personali che lo riguardano, anche se non ancora
        registrati, e la loro comunicazione in forma intelligibile.
      </p>
      <p>2. L'interessato ha diritto di ottenere l'indicazione:</p>
      <ul>
        <li>dell'origine dei dati personali;</li>
        <li>delle finalità e modalità del trattamento;</li>
        <li>
          della logica applicata in caso di trattamento effettuato con l'ausilio
          di strumenti elettronici;
        </li>
        <li>
          degli estremi identificativi del titolare, dei responsabili e del
          rappresentante designato ai sensi dell'articolo 5, comma 2;
        </li>
        <li>
          dei soggetti o delle categorie di soggetti ai quali i dati personali
          possono essere comunicati o che possono venirne a conoscenza in
          qualità di rappresentante designato nel territorio dello Stato, di
          responsabili o incaricati.
        </li>
      </ul>
      <p>3. L'interessato ha diritto di ottenere:</p>
      <ul>
        <li>
          l'aggiornamento, la rettificazione ovvero, quando vi ha interesse,
          l'integrazione dei dati;
        </li>
        <li>
          la cancellazione, la trasformazione in forma anonima o il blocco dei
          dati trattati in violazione di legge, compresi quelli di cui non è
          necessaria la conservazione in relazione agli scopi per i quali i dati
          sono stati raccolti o successivamente trattati;
        </li>
        <li>
          l'attestazione che le operazioni di cui alle lettere a) e b) sono
          state portate a conoscenza, anche per quanto riguarda il loro
          contenuto, di coloro ai quali i dati sono stati comunicati o diffusi,
          eccettuato il caso in cui tale adempimento si rivela impossibile o
          comporta un impiego di mezzi manifestamente sproporzionato rispetto al
          diritto tutelato.
        </li>
      </ul>
      <p>4. L'interessato ha diritto di opporsi, in tutto o in parte:</p>
      <ul>
        <li>
          per motivi legittimi al trattamento dei dati personali che lo
          riguardano, ancorché pertinenti allo scopo della raccolta;
        </li>
        <li>
          al trattamento di dati personali che lo riguardano a fini di invio di
          materiale pubblicitario o di vendita diretta o per il compimento di
          ricerche di mercato o di comunicazione commerciale.
        </li>
      </ul>
    </>
  );
};

const SpanishPolicy = () => {
  return (
    <>
      <p>Estimado Cliente,</p>
      <p>
        Deseamos informarle, de conformidad con el artículo 13 del Código de
        Privacidad (Decreto Legislativo 196/2003), que el tratamiento de sus
        datos personales se realizará con corrección y transparencia, con fines
        lícitos y protegiendo su privacidad y sus derechos.
      </p>
      <p>
        El tratamiento también se realizará con la ayuda de medios informáticos
        con las siguientes finalidades:
      </p>
      <ul>
        <li>
          Para cumplir la obligación establecida en el artículo 109 del Real
          Decreto 18.6.1931 n. 773, que nos obliga a registrar y comunicar los
          datos de los clientes alojados a la Policía.
        </li>
        <li>
          Para cumplir con las obligaciones administrativas, contables y
          fiscales vigentes.
        </li>
        <li>
          Agilizar los trámites de registro en caso de posteriores estancias en
          nuestras instalaciones.
        </li>
        <li>
          Para enviarle nuestros mensajes promocionales y actualizaciones sobre
          las tarifas y ofertas realizadas.
        </li>
      </ul>
      <p>
        También deseamos informarle que el suministro de sus datos para los
        tratamientos mencionados en los puntos 1 y 2 es obligatorio y, en caso
        de que se niegue a proporcionarlos, no podremos alojarle en nuestra
        estructura.
      </p>
      <p>
        Si desea que se lleven a cabo los tratamientos a que se refieren los
        puntos 3 y 4, deberá en su lugar facilitarnos su consentimiento. El
        consentimiento podrá en todo caso ser revocado posteriormente
        oponiéndose a los tratamientos.
      </p>
      <p>
        Para cualquier información adicional, y para hacer valer los derechos
        reconocidos por el artículo 7 del Código de Privacidad (Decreto
        Legislativo 196/2003), puede comunicarse con el Responsable de datos.
      </p>
      <p>
        A continuación, para su información, informamos el texto del art. 7 del
        Código de Privacidad (Decreto Legislativo 196/2003).
      </p>
      <h2> Derecho de acceso a los datos personales y otros derechos.</h2>
      <p>
        1. El interesado tiene derecho a obtener la confirmación de la
        existencia o no de datos personales que le conciernen, aunque aún no
        hayan sido registrados, y su comunicación en forma inteligible.
      </p>
      <p>2. El interesado tiene derecho a obtener la indicación:</p>
      <ul>
        <li>Del origen de los datos personales.</li>
        <li>De los fines y métodos del procesamiento.</li>
        <li>
          De la lógica aplicada en caso de tratamiento realizado con la ayuda de
          instrumentos electrónicos.
        </li>
        <li>
          De la identidad del Responsable, Encargado y representante designado
          conforme al artículo 5, párrafo 2.
        </li>
        <li>
          De los sujetos o categorías de sujetos a quienes los datos personales
          pueden ser comunicados o que pueden conocerlos como representante
          designado en el Estado, encargados o agentes.
        </li>
      </ul>
      <p>3. El interesado tiene derecho a obtener:</p>
      <ul>
        <li>
          La actualización, rectificación o, en su caso, integración de datos.
        </li>
        <li>
          La cancelación, la transformación en forma anónima o el bloqueo de los
          datos procesados en violación de la ley, incluidos los datos que no
          necesitan conservarse para los fines para los que fueron recopilados o
          posteriormente procesados.
        </li>
        <li>
          La constancia de que las operaciones a que se refieren las letras a) y
          b) han sido puestas en conocimiento, también en cuanto a su contenido,
          de aquellos a quienes se han comunicado o difundido los datos, salvo
          en el caso en que este cumplimiento resulte imposible o implique el
          uso de medios manifiestamente desproporcionados con el derecho
          protegido.
        </li>
      </ul>
      <p>4. El interesado tiene derecho a oponerse, en todo o en parte:</p>
      <ul>
        <li>
          Por motivos legítimos, al tratamiento de los datos personales que le
          conciernen, aunque sean pertinentes para la finalidad de la recogida.
        </li>
        <li>
          Al tratamiento de los datos personales que le conciernen con el fin de
          enviar material publicitario o de venta directa o para realizar
          estudios de mercado o comunicación comercial.
        </li>
      </ul>
    </>
  );
};

const EnglishPolicy = () => {
  return (
    <>
      <p>Dear Customer,</p>
      <p>
        We wish to inform you, pursuant to Article 13 of the Privacy Code
        (Legislative Decree 196/2003), that the processing of your personal data
        will take place with correctness and transparency, for lawful purposes
        and protecting your privacy and your rights.
      </p>
      <p>
        The processing will also be carried out by IT means for the following
        purposes:
      </p>
      <ul>
        <li>
          To fulfill the obligation set out in Article 109 of the Royal Decree
          18.6.1931 n. 773, which requires us to register and communicate the
          details of the clients housed to the Police.
        </li>
        <li>
          To fulfill current administrative, accounting and tax obligations.
        </li>
        <li>
          To speed up the registration procedures in case of subsequent stays at
          our facility.
        </li>
        <li>
          To send you our promotional messages and updates on the rates and
          offers made.
        </li>
      </ul>
      <p>
        We also wish to inform you that the provision of your data for the
        treatments referred to in points 1 and 2 is mandatory and, in case of
        your refusal to provide them, we will not be able to host you in our
        facility.
      </p>
      <p>
        If you want the treatments referred to in points 3 and 4 to be carried
        out, you must instead provide us with your consent. The consent may in
        any case be subsequently revoked by opposing the treatments.
      </p>
      <p>
        For any further information, and to assert the rights recognized by
        Article 7 of the Privacy Code (Legislative Decree 196/2003), you can
        contact the data Controller.
      </p>
      <p>
        Below, for your information, we report the text of art. 7 of the Privacy
        Code (Legislative Decree 196/2003).
      </p>
      <h2> Right to access personal data and other rights.</h2>
      <p>
        1. The interested party has the right to obtain confirmation of the
        existence or not of personal data concerning him, even if not yet
        recorded, and their communication in an intelligible form.
      </p>
      <p>2. The interested party has the right to obtain the indication:</p>
      <ul>
        <li>The origin of the personal data.</li>
        <li>The purposes and methods of the processing.</li>
        <li>
          The logic applied in case of treatment carried out with the aid of
          electronic instruments.
        </li>
        <li>
          The identity of the data Controller, Processor, and the representative
          appointed under article 5, paragraph 2.
        </li>
        <li>
          The subjects or categories of subjects to whom the personal data may
          be communicated or who can learn about them as appointed
          representatives in the State, managers, or agents.
        </li>
      </ul>
      <p>3. The interested party has the right to obtain:</p>
      <ul>
        <li>
          Updating, rectification or, when interested, integration of data.
        </li>
        <li>
          The cancellation, transformation into anonymous form, or blocking of
          data processed in violation of the law, including data which need not
          be kept for the purposes for which the data were collected or
          subsequently processed.
        </li>
        <li>
          The attestation that the operations referred to in letters a) and b)
          have been brought to the attention, also as regards their content, of
          those to whom the data have been communicated or disseminated, except
          in the case in which this fulfillment is impossible or involves the
          use of means that are manifestly disproportionate to the protected
          right.
        </li>
      </ul>
      <p>
        4. The interested party has the right to object, in whole or in part:
      </p>
      <ul>
        <li>
          For legitimate reasons, to the processing of personal data concerning
          him, even if pertinent to the purpose of the collection.
        </li>
        <li>
          To the processing of personal data concerning him for the purpose of
          sending advertising or direct sales material or for carrying out
          market research or commercial communication.
        </li>
      </ul>
    </>
  );
};

const FrenchPolicy = () => {
  return (
    <>
      <p>Cher client,</p>
      <p>
        Nous souhaitons vous informer, conformément à l'article 13 du Code de la
        confidentialité (décret législatif 196/2003), que le traitement de vos
        données personnelles aura lieu avec exactitude et transparence, à des
        fins licites et en protégeant votre vie privée et vos droits.
      </p>
      <p>
        Le traitement sera également effectué à l'aide de moyens informatiques
        aux fins suivantes :
      </p>
      <ul>
        <li>
          Remplir l'obligation énoncée à l'article 109 du décret royal 18.6.1931
          no. 773, qui nous oblige à enregistrer et à communiquer les
          coordonnées des clients hébergés à la Police.
        </li>
        <li>
          Remplir les obligations administratives, comptables et fiscales
          courantes.
        </li>
        <li>
          Accélérer les procédures d'enregistrement en cas de séjours ultérieurs
          dans notre établissement.
        </li>
        <li>
          Pour vous envoyer nos messages promotionnels et mises à jour sur les
          tarifs et les offres faites.
        </li>
      </ul>
      <p>
        Nous souhaitons également vous informer que la fourniture de vos données
        pour les traitements visés aux points 1 et 2 est obligatoire et, en cas
        de refus de votre part de les fournir, nous ne pourrons pas vous
        héberger dans notre structure.
      </p>
      <p>
        Si vous souhaitez que les traitements visés aux points 3 et 4 soient
        effectués, vous devez à la place nous donner votre consentement. Le
        consentement pourra en tout état de cause être ultérieurement révoqué en
        s'opposant aux traitements.
      </p>
      <p>
        Pour toute information complémentaire et pour faire valoir les droits
        reconnus par l'article 7 du Code de la confidentialité (décret
        législatif 196/2003), vous pouvez contacter le Responsable du
        traitement.
      </p>
      <p>
        Ci-dessous, pour votre information, nous rapportons le texte de l'art. 7
        du Code de confidentialité (décret législatif 196/2003).
      </p>
      <h2>7. Droit d'accès aux données personnelles et autres droits.</h2>
      <p>
        1. L'intéressé a le droit d'obtenir la confirmation de l'existence ou
        non de données personnelles le concernant, même si elles ne sont pas
        encore enregistrées, et leur communication sous une forme intelligible.
      </p>
      <p>2. L'intéressé a le droit d'obtenir l'indication :</p>
      <ul>
        <li>De l'origine des données personnelles ;</li>
        <li>Des finalités et les modalités du traitement ;</li>
        <li>
          De la logique appliquée en cas de traitement effectué à l'aide
          d'instruments électroniques ;
        </li>
        <li>
          De l'identité du Responsable, Sous-traitant et du représentant désigné
          en vertu de l'article 5, alinéa 2 ;
        </li>
        <li>
          Des sujets ou catégories de sujets auxquels les données personnelles
          peuvent être communiquées ou qui peuvent en prendre connaissance en
          qualité de représentant désigné dans l'État, de responsables ou
          d'agents.
        </li>
      </ul>
      <p>3. L'intéressé a le droit d'obtenir :</p>
      <ul>
        <li>
          La mise à jour, rectification ou, le cas échéant, intégration des
          données ;
        </li>
        <li>
          L'annulation, la transformation en forme anonyme ou le blocage des
          données traitées en violation de la loi, y compris les données qui ne
          doivent pas être conservées aux fins pour lesquelles les données ont
          été collectées ou ultérieurement traitées ;
        </li>
        <li>
          L'attestation que les opérations visées aux lettres a) et b) ont été
          portées à la connaissance, également en ce qui concerne leur contenu,
          de ceux à qui les données ont été communiquées ou diffusées, sauf dans
          le cas où cette réalisation s'avère impossible ou implique l'emploi de
          moyens manifestement disproportionnés au droit protégé.
        </li>
      </ul>
      <p>4. L'intéressé a le droit de s'opposer, en tout ou en partie :</p>
      <ul>
        <li>
          pour des motifs légitimes, au traitement des données personnelles le
          concernant, même si pertinentes au but de la collecte ;
        </li>
        <li>
          au traitement des données personnelles le concernant à des fins
          d'envoi de matériel publicitaire ou de vente directe ou pour la
          réalisation d'études de marché ou de communication commerciale.
        </li>
      </ul>
    </>
  );
};
