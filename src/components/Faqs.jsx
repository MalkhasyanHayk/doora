import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Welche Vorteile bringt mir das Modul als Endkunde?',
      answer:
        'Durch eine detaillierte Aufzeichnung der übertragenen Signale ihres Tores, resp. Ihrer Türe können Störungen viel einfacher nachvollzogen und diagnostiziert werden. Somit entfällt eine aufwendige Fehlersuche, was die Reparaturzeiten verkürzt oder es sogar ermöglicht, kleinere Störungen selbst zu beheben.',
    },
    {
      question: 'Welche Vorteile bringt mir das Modul als Serviceunternehmen?',
      answer:
        'Fehlermeldungen werden sofort gesendet und erleichtern die Diagnose enorm. Sie können sofort reagieren und sind nicht auf eine ungenaue Störungsmeldung seitens des Kunden angewiesen. Sie können die Ursache eingrenzen und das erforderliche Ersatzteil sogleich auf die Baustelle mitnehmen. Damit werden Leerläufe vermieden und die Effizienz der Reparatureinsätze gesteigert.',
    },
    {
      question: 'Welche Module gibt es?',
      answer:
        'Die Übersicht aller erhältlichen Module finden Sie hier',
    },
    {
      question: "Welche hierarchischen Zugriffsberechtigungen gibt es?",
      answer: `Auf der Plattform gibt es vier Zugriffsrollen: Admin:
          - Kann Manager erstellen, bearbeiten, löschen und blockieren.
          - Kann Managerrollen ändern.
          Manager:
          - Verwalten von Kunden, Standorten und Geräten.
          - Hinzufügen, Entfernen und Konfigurieren von Geräten für Kunden.
          - Erstellen und Zuweisen von Benutzern und Standorten.
          Türbesitzer:
          - Kann Benutzer erstellen und Standorte zuweisen.
          - Hat volle Kontrolle über den Gerätemodus und die Überwachung aller Standorte.
          - Kann den Zugriff des Managers auf Geräte einschränken.
          Benutzer:
          - Kann den Gerätemodus konfigurieren und überwacht zugewiesene Standorte.
          Diese Struktur stellt sicher, dass jeder Benutzer den passenden Zugriff gemäß seiner Rolle hat und effizient arbeiten kann.`
    },
  ],
  [
    {
      question: "Für welche Steuerungen sind die Module geeignet?",
      answer: "Es gibt Module für Input-Spannungen von 0V bis 24VDC. Eine Kompatibilitätstabelle der Steuerungen und Module finden Sie hier"
    },
    {
      question: "Wie sicher sind die Module bzw. die Plattform doora.ch vor Fremdzugriffen?",
      answer: "Die Module verbinden sich via Funk über das Handynetz oder mit dem LAN-Kabel (falls ein LAN-Port vorhanden ist) mit dem Internet. Eine Verbindung über WiFi ist nicht möglich. Der Zugriff erfolgt ausschließlich über die Plattform doora.ch. Das Login erfolgt 2-stufig, d.h. das Login muss mit einem Code bestätigt werden. Dazu wird der Authenticator von Google eingesetzt, der auf Ihrem Handy installiert sein muss. Durch die Eingabe des temporär angezeigten Codes beim Login ist eine Manipulation ausgeschlossen."
    },
    {
      question: "Welche Systemvoraussetzungen sind nötig, um die Module zu verwenden?",
      answer: "Der Einsatzort muss über einen ausreichenden Handy-Empfang (vorzugsweise 4G) verfügen. Bei Orten ohne Handyempfang bieten wir Module mit einem LAN-Port an. Allerdings ist die erforderliche Infrastruktur dafür deutlich aufwendiger (Kabel, Router, etc.)."
    },
    {
      question: "Ist es möglich, doora.ch mit eigenem Logo zu verwenden? (Rebranding)",
      answer: "Ja, das ist möglich. Wir können unsere Plattform auch anderen Unternehmen zur Verfügung stellen, die ihren Kunden diese Dienstleistung unter eigenem Namen anbieten wollen. Wenn Sie mehr darüber erfahren wollen, nehmen Sie bitte mit uns Kontakt auf."
    },
    {
      question: "Mit welchen Spannungen arbeiten die Module?",
      answer: "Die Versorgungsspannung beträgt mindestens 12VDC – max.36VDC. Die Spannungspegel an den Eingängen (Digitale Inputs) sind je nach Modul unterschiedlich. Bei Toren mit SPS-Steuerungen beträgt sie meist 24VDC und bei Türanlagen 0V, resp. 5V. Analoge Inputs: 3V – 5V."
    },
  ],
  [
    {
      question: "Auf welchen Endgeräten läuft die Software doora.ch?",
      answer: "Doora.ch ist eine IoT-Plattform, die auf jedem modernen Browser funktioniert. Da es sich um eine Online-Anwendung handelt, ist keine zusätzliche Software notwendig."
    },
    {
      question: "Welche Funktionen sind über doora.ch möglich?",
      answer: "- Für Tore: Ferndiagnose via Anzeige der Torsignale: Tor offen oder geschlossen, Zustand der Sensoren (Lichtschranken, Kontaktleisten, Servicetüre, etc.), Versorgungsspannung ja/nein, Notaus, spezielle Freigabe-Funktion bei Störungen, optional: Tor öffnen.\n" +
          "- Für Türen: Ferndiagnose via Anzeige der Türsignale: Türe offen oder zu, Zustand der Verriegelung, Akkuspannung, Fehlermeldungen, Zustand der Sensoren, Notaus, spezielle Freigabe-Funktion bei Störungen, Fernsteuerung (Programm wählen: Nacht, Auto, Daueroffen, etc.), Türe öffnen.\n" +
          "Auf Wunsch können auch noch andere Funktionen realisiert werden."
    },
    {
      question: "Kann man die Türe, das Tor über das Modul öffnen?",
      answer: "Ja, das ist je nach Ausführung möglich. (Siehe Frage Nr.8)"
    },
    {
      question: "Wieviel kostet ein Modul?",
      answer: "Dies ist abhängig von Typ und der Anzahl der Module. Für ein einzelnes LTE-Modul (Handynetzverbindung) muss mit mindestens Fr. 400.- excl. MwSt. gerechnet werden. Die Ersteinrichtung der Module und Aufschaltung des Zuganges (ohne Installation des Moduls auf der Anlage) kostet ca. Fr. 200.- (max. 10 Module). Für größere Mengen bitten wir Sie, ein Angebot einzuholen."
    },
    {
      question: "Wie hoch sind die Abo-Gebühren für die Modul-Nutzung und LTE-Verbindung?",
      answer: "Die Abogebühren betragen pro Modul und Monat Fr. 9.- inkl. Zugang zur Plattform doora.ch und SMS-Gebühren bei Störungsmeldungen."
    }
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
