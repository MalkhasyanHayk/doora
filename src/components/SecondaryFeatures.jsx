import {useId} from 'react'

import {Container} from '@/components/Container'

const features = [
    {
        name: 'Personalisierung',
        description:
            "Wir bieten die Möglichkeit zur Markenanpassung – Ihr Logo und Ihre Firmenfarben werden auf allen Seiten der Plattform angezeigt. Verwalten Sie Kunden und Standorte über integrierte Module",
        // icon: DeviceArrowIcon,
    },
    {
        name: 'Flexibles Management',
        description:
            'Sie können Module selbst aktivieren oder deaktivieren, um die Plattform an die Bedürfnisse Ihres Unternehmens anzupassen. Dies ist besonders nützlich für Unternehmen mit einer großen Kundenbasis und vielen Standorten​',
        // icon: DeviceCardsIcon,
    },
    {
        name: 'Kosteneffizienz',
        description:
            'Die Nutzung der Plattform reduziert die Wartungs- und Verwaltungskosten durch die Automatisierung von Prozessen und die Fernverwaltung. Das System erleichtert die Verwaltung von Standorten, verkürzt Diagnosezeiten und macht häufige physische Wartung unnötig',
        // icon: DeviceClockIcon,
    },
    {
        name: 'Integration mit Ihren Systemen',
        description:
            'Doora.ch lässt sich problemlos in bestehende Verwaltungssysteme integrieren. Dank der modularen Architektur kann die Plattform an spezifische Geschäftsanforderungen angepasst werden',
        // icon: DeviceListIcon,
    },
]

function DeviceArrowIcon(props) {
    return (
        <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                fill="#737373"
            />
            <path
                d="M12 25l8-8m0 0h-6m6 0v6"
                stroke="#171717"
                strokeWidth={2}
                strokeLinecap="round"
            />
            <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2}/>
        </svg>
    )
}

function DeviceCardsIcon(props) {
    let id = useId()

    return (
        <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                fill="#737373"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z"
                fill={`url(#${id}-gradient)`}
            />
            <rect x={9} y={6} width={14} height={4} rx={1} fill="#171717"/>
            <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2}/>
            <defs>
                <linearGradient
                    id={`${id}-gradient`}
                    x1={16}
                    y1={12}
                    x2={16}
                    y2={28}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#737373"/>
                    <stop offset={1} stopColor="#737373" stopOpacity={0}/>
                </linearGradient>
            </defs>
        </svg>
    )
}

function DeviceClockIcon(props) {
    return (
        <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
            <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2}/>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
                fill="#737373"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z"
                fill="#171717"
            />
        </svg>
    )
}

function DeviceListIcon(props) {
    return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                fill="#737373"
            />
            <circle cx={11} cy={14} r={2} fill="#171717"/>
            <circle cx={11} cy={20} r={2} fill="#171717"/>
            <circle cx={11} cy={26} r={2} fill="#171717"/>
            <path
                d="M16 14h6M16 20h6M16 26h6"
                stroke="#737373"
                strokeWidth={2}
                strokeLinecap="square"
            />
            <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2}/>
        </svg>
    )
}

function DeviceLockIcon(props) {
    return (
        <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
            <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2}/>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
                fill="#737373"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 19.5a3.5 3.5 0 117 0V22a2 2 0 012 2v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6a2 2 0 012-2v-2.5zm2 2.5h3v-2.5a1.5 1.5 0 00-3 0V22z"
                fill="#171717"
            />
        </svg>
    )
}

function DeviceChartIcon(props) {
    return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                fill="#737373"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z"
                fill="#171717"
            />
            <path
                d="M10 12h12"
                stroke="#737373"
                strokeWidth={2}
                strokeLinecap="square"
            />
            <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2}/>
        </svg>
    )
}

export function SecondaryFeatures() {
    return (
        <section
            id="secondary-features"
            aria-label="Features for building a portfolio"
            className="py-20 sm:py-32"
        >
            <Container>
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-medium tracking-tight text-gray-900">
                        Doora.ch für Ihr Unternehmen
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Doora.ch ist nicht nur eine Plattform zur Verwaltung von Tür- und Toranlagen. Es ist eine
                        Lösung, die auf die Bedürfnisse Ihres Unternehmens zugeschnitten werden kann:
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-2F"
                >
                    {features.map((feature) => (
                        <li
                            key={feature.name}
                            className="rounded-2xl border border-gray-200 p-8"
                        >
                            {/*<feature.icon className="h-8 w-8"/>*/}
                            <h3 className="mt-6 font-semibold text-gray-900">
                                {feature.name}
                            </h3>
                            <p className="mt-2 text-gray-700">{feature.description}</p>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    )
}
