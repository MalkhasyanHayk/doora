'use client'

import {Fragment, useEffect, useId, useRef, useState} from 'react'
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react'
import clsx from 'clsx'
import {AnimatePresence, motion} from 'framer-motion'
import {useDebouncedCallback} from 'use-debounce'

import {AppScreen} from '@/components/AppScreen'
import {CircleBackground} from '@/components/CircleBackground'
import {Container} from '@/components/Container'
import {PhoneFrame} from '@/components/PhoneFrame'
import {
    DiageoLogo,
    LaravelLogo,
    MirageLogo,
    ReversableLogo,
    StatamicLogo,
    StaticKitLogo,
    TransistorLogo,
    TupleLogo,
} from '@/components/StockLogos'

const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

import Screen1 from "./images/screen1.png"
import Screen2 from "./images/screen2.png"
import Screen3 from "./images/screen3.png"
import Screen4 from "./images/screen4.png"
import Screen5 from "./images/screen5.png"
import Screen6 from "./images/screen6.png"

const features = [
    {
        name: 'Fernzugriff',
        description:
            'Steuern Sie Türen und Tore von jedem Gerät aus – ob PC oder Mobilgerät​',
        // icon: DeviceUserIcon,
        image: Screen1,
        screen: InviteScreen,
    },
    {
        name: 'Echtzeitüberwachung',
        description:
            'IoT-Module ermöglichen die Überwachung des Systemzustands in Echtzeit und reagieren sofort auf Störungen',
        // icon: DeviceNotificationIcon,
        image: Screen2,
        screen: InviteScreen,
    },
    {
        name: 'Automatische Benachrichtigungen',
        description:
            'Erhalten Sie sofortige Nachrichten bei Systemstörungen per E-Mail oder SMS​',
        // icon: DeviceTouchIcon,
        image: Screen3,
        screen: InviteScreen,
    },
    {
        name: 'Protokollierung und Ereignisverlauf',
        description:
            'Alle Aktivitäten werden in Log-Dateien aufgezeichnet und können zur Analyse eingesehen werden',
        // icon: DeviceTouchIcon,
        image: Screen4,
        screen: InviteScreen,
    },
    {
        name: 'Anpassungsfähigkeit der Plattform',
        description:
            'Das System lässt sich problemlos an die Anforderungen Ihres Unternehmens anpassen',
        // icon: DeviceTouchIcon,
        image: Screen5,
        screen: InviteScreen,
    },
    {
        name: 'Sicherheit und Zuverlässigkeit',
        description:
            'Die IoT-Module sind mit den neuesten Sicherheitsstandards ausgestattet, um Daten und Systeme zu schützen',
        // icon: DeviceTouchIcon,
        image: Screen6,
        screen: InviteScreen,
    },
]

function DeviceUserIcon(props) {
    return (
        <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
            <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2}/>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
                fill="#737373"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
                fill="#A3A3A3"
            />
        </svg>
    )
}

function DeviceNotificationIcon(props) {
    return (
        <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
            <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2}/>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                fill="#A3A3A3"
            />
            <path
                d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
                fill="#737373"
            />
        </svg>
    )
}

function DeviceTouchIcon(props) {
    let id = useId()

    return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
            <defs>
                <linearGradient
                    id={`${id}-gradient`}
                    x1={14}
                    y1={14.5}
                    x2={7}
                    y2={17}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#737373"/>
                    <stop offset={1} stopColor="#D4D4D4" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2}/>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
                fill="#A3A3A3"
            />
            <path
                d="M7 22c0-4.694 3.5-8 8-8"
                stroke={`url(#${id}-gradient)`}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
                fill="#A3A3A3"
            />
        </svg>
    )
}

const headerAnimation = {
    initial: {opacity: 0, transition: {duration: 0.3}},
    animate: {opacity: 1, transition: {duration: 0.3, delay: 0.3}},
    exit: {opacity: 0, transition: {duration: 0.3}},
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
    opacity: 0.4,
    scale: 0.8,
    zIndex: 0,
    filter: 'blur(4px)',
    transition: {duration: 0.4},
}

const bodyVariantForwards = (custom) => ({
    y: '100%',
    zIndex: maxZIndex - custom.changeCount,
    transition: {duration: 0.4},
})

const bodyAnimation = {
    initial: 'initial',
    animate: 'animate',
    exit: 'exit',
    variants: {
        initial: (custom, ...props) =>
            custom.isForwards
                ? bodyVariantForwards(custom, ...props)
                : bodyVariantBackwards,
        animate: (custom) => ({
            y: '0%',
            opacity: 1,
            scale: 1,
            zIndex: maxZIndex / 2 - custom.changeCount,
            filter: 'blur(0px)',
            transition: {duration: 0.4},
        }),
        exit: (custom, ...props) =>
            custom.isForwards
                ? bodyVariantBackwards
                : bodyVariantForwards(custom, ...props),
    },
}

function InviteScreen(props) {
    return (
        <AppScreen className="w-full">
            <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
                <AppScreen.Title>{props.title}</AppScreen.Title>
            </MotionAppScreenHeader>
            <MotionAppScreenBody
                {...(props.animated ? {...bodyAnimation, custom: props.custom} : {})}
            >
                <div className="px-4 py-6" style={{height: "100%", background: `url(${props?.image?.src}) no-repeat center`, backgroundSize: "80%"}}>
                    <div className="space-y-6">
                        {[
                            {label: 'Full name', value: 'Albert H. Wiggin'},
                            {label: 'Email address', value: 'awiggin@chase.com'},
                        ].map((field) => (
                            <div key={field.label}>
                                {/*<div className="text-sm text-gray-500">{field.label}</div>*/}
                                {/*<div className="mt-2 border-b border-gray-200 pb-2 text-sm text-gray-900">*/}
                                {/*    {field.value}*/}
                                {/*</div>*/}
                            </div>
                        ))}
                    </div>
                    {/*<div style={{backgroundColor: "var(--primary)"}} className="mt-6 rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-white">*/}
                    {/*    Invite person*/}
                    {/*</div>*/}
                </div>
            </MotionAppScreenBody>
        </AppScreen>
    )
}

function StocksScreen(props) {
    return (
        <AppScreen className="w-full">
            <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
                <AppScreen.Title>{props.title}</AppScreen.Title>
            </MotionAppScreenHeader>
            <MotionAppScreenBody
                {...(props.animated ? {...bodyAnimation, custom: props.custom} : {})}
            >
                <div className="divide-y divide-gray-100"  style={{height: "100%", background: `url(${props?.image?.src}) no-repeat center`, backgroundSize: "80%"}}>
                    {/*{[*/}
                    {/*    {*/}
                    {/*        name: 'Laravel',*/}
                    {/*        price: '4,098.01',*/}
                    {/*        change: '+4.98%',*/}
                    {/*        color: '#F9322C',*/}
                    {/*        logo: LaravelLogo,*/}
                    {/*    },*/}
                    {/*    {*/}
                    {/*        name: 'Tuple',*/}
                    {/*        price: '5,451.10',*/}
                    {/*        change: '-3.38%',*/}
                    {/*        color: '#5A67D8',*/}
                    {/*        logo: TupleLogo,*/}
                    {/*    },*/}
                    {/*    {*/}
                    {/*        name: 'Transistor',*/}
                    {/*        price: '4,098.41',*/}
                    {/*        change: '+6.25%',*/}
                    {/*        color: '#2A5B94',*/}
                    {/*        logo: TransistorLogo,*/}
                    {/*    },*/}
                    {/*    {*/}
                    {/*        name: 'Diageo',*/}
                    {/*        price: '250.65',*/}
                    {/*        change: '+1.25%',*/}
                    {/*        color: '#3320A7',*/}
                    {/*        logo: DiageoLogo,*/}
                    {/*    },*/}
                    {/*    {*/}
                    {/*        name: 'StaticKit',*/}
                    {/*        price: '250.65',*/}
                    {/*        change: '-3.38%',*/}
                    {/*        color: '#2A3034',*/}
                    {/*        logo: StaticKitLogo,*/}
                    {/*    },*/}
                    {/*    {*/}
                    {/*        name: 'Statamic',*/}
                    {/*        price: '5,040.85',*/}
                    {/*        change: '-3.11%',*/}
                    {/*        color: '#0EA5E9',*/}
                    {/*        logo: StatamicLogo,*/}
                    {/*    },*/}
                    {/*    {*/}
                    {/*        name: 'Mirage',*/}
                    {/*        price: '140.44',*/}
                    {/*        change: '+9.09%',*/}
                    {/*        color: '#16A34A',*/}
                    {/*        logo: MirageLogo,*/}
                    {/*    },*/}
                    {/*    {*/}
                    {/*        name: 'Reversable',*/}
                    {/*        price: '550.60',*/}
                    {/*        change: '-1.25%',*/}
                    {/*        color: '#8D8D8D',*/}
                    {/*        logo: ReversableLogo,*/}
                    {/*    },*/}
                    {/*].map((stock) => (*/}
                    {/*    <div key={stock.name} className="flex items-center gap-4 px-4 py-3">*/}
                    {/*        <div*/}
                    {/*            className="flex-none rounded-full"*/}
                    {/*            style={{backgroundColor: stock.color}}*/}
                    {/*        >*/}
                    {/*            <stock.logo className="h-10 w-10"/>*/}
                    {/*        </div>*/}
                    {/*        <div className="flex-auto text-sm text-gray-900">*/}
                    {/*            {stock.name}*/}
                    {/*        </div>*/}
                    {/*        <div className="flex-none text-right">*/}
                    {/*            <div className="text-sm font-medium text-gray-900">*/}
                    {/*                {stock.price}*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                style={{color: stock.change.startsWith('+') ? "var(--primary)" : "var(--secondary)"}}*/}
                    {/*                className={clsx(*/}
                    {/*                    'text-xs leading-5',*/}
                    {/*                    stock.change.startsWith('+')*/}
                    {/*                        ? 'text-cyan-500'*/}
                    {/*                        : 'text-gray-500',*/}
                    {/*                )}*/}
                    {/*            >*/}
                    {/*                {stock.change}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*))}*/}
                </div>
            </MotionAppScreenBody>
        </AppScreen>
    )
}

function InvestScreen(props) {
    return (
        <AppScreen className="w-full">
            <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
                <AppScreen.Title>Buy $LA</AppScreen.Title>
                <AppScreen.Subtitle>
                    <span className="text-white">$34.28</span> per share
                </AppScreen.Subtitle>
            </MotionAppScreenHeader>
            <MotionAppScreenBody
                {...(props.animated ? {...bodyAnimation, custom: props.custom} : {})}
            >
                <div className="px-4 py-6">
                    <div className="space-y-4">
                        {[
                            {label: 'Number of shares', value: '100'},
                            {
                                label: 'Current market price',
                                value: (
                                    <div className="flex">
                                        $34.28
                                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                                            <path
                                                d="M17 15V7H9M17 7 7 17"
                                                stroke="#06B6D4"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                ),
                            },
                            {label: 'Estimated cost', value: '$3,428.00'},
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="flex justify-between border-b border-gray-100 pb-4"
                            >
                                <div className="text-sm text-gray-500">{item.label}</div>
                                <div className="text-sm font-semibold text-gray-900">
                                    {item.value}
                                </div>
                            </div>
                        ))}
                        <div style={{backgroundColor: "var(--primary)"}} className="rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-white">
                            Buy shares
                        </div>
                    </div>
                </div>
            </MotionAppScreenBody>
        </AppScreen>
    )
}

function usePrevious(value) {
    let ref = useRef()

    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}

function FeaturesDesktop() {
    let [changeCount, setChangeCount] = useState(0)
    let [selectedIndex, setSelectedIndex] = useState(0)
    let prevIndex = usePrevious(selectedIndex)
    let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

    let onChange = useDebouncedCallback(
        (selectedIndex) => {
            setSelectedIndex(selectedIndex)
            setChangeCount((changeCount) => changeCount + 1)
        },
        100,
        {leading: true},
    )

    return (
        <TabGroup
            className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
            selectedIndex={selectedIndex}
            onChange={onChange}
            vertical
        >
            <TabList className="relative z-10 order-last col-span-6 space-y-6">
                {features.map((feature, featureIndex) => (
                    <div
                        key={feature.name}
                        className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
                    >
                        {featureIndex === selectedIndex && (
                            <motion.div
                                layoutId="activeBackground"
                                className="absolute inset-0 bg-gray-800"
                                initial={{borderRadius: 16}}
                            />
                        )}
                        <div className="relative z-10 p-8">
                            {/*<feature.icon className="h-8 w-8"/>*/}
                            <h3 className="mt-6 text-lg font-semibold text-white">
                                <Tab className="text-left ui-not-focus-visible:outline-none">
                                    <span className="absolute inset-0 rounded-2xl"/>
                                    {feature.name}
                                </Tab>
                            </h3>
                            <p className="mt-2 text-sm text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </TabList>
            <div className="relative col-span-6">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <CircleBackground color="#13B5C8" className="animate-spin-slower"/>
                </div>
                <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
                    <TabPanels as={Fragment}>
                        <AnimatePresence
                            initial={false}
                            custom={{isForwards, changeCount}}
                        >
                            {features.map((feature, featureIndex) =>
                                selectedIndex === featureIndex ? (
                                    <TabPanel
                                        static
                                        key={feature.name + changeCount}
                                        className="col-start-1 row-start-1 flex focus:outline-offset-[32px] ui-not-focus-visible:outline-none"
                                    >
                                        <feature.screen
                                            image={feature?.image}
                                            title={feature.name}
                                            animated
                                            custom={{isForwards, changeCount}}
                                        />
                                    </TabPanel>
                                ) : null,
                            )}
                        </AnimatePresence>
                    </TabPanels>
                </PhoneFrame>
            </div>
        </TabGroup>
    )
}

function FeaturesMobile() {
    let [activeIndex, setActiveIndex] = useState(0)
    let slideContainerRef = useRef(null)
    let slideRefs = useRef([])

    useEffect(() => {
        let observer = new window.IntersectionObserver(
            (entries) => {
                for (let entry of entries) {
                    if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
                        setActiveIndex(slideRefs.current.indexOf(entry.target))
                        break
                    }
                }
            },
            {
                root: slideContainerRef.current,
                threshold: 0.6,
            },
        )

        for (let slide of slideRefs.current) {
            if (slide) {
                observer.observe(slide)
            }
        }

        return () => {
            observer.disconnect()
        }
    }, [slideContainerRef, slideRefs])

    return (
        <>
            <div
                ref={slideContainerRef}
                className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
            >
                {features.map((feature, featureIndex) => (
                    <div
                        key={featureIndex}
                        ref={(ref) => ref && (slideRefs.current[featureIndex] = ref)}
                        className="w-full flex-none snap-center px-4 sm:px-6"
                    >
                        <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <CircleBackground
                                    color="#13B5C8"
                                    className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                                />
                            </div>
                            <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                                <feature.screen
                                    image={feature?.image}
                                />
                            </PhoneFrame>
                            <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                                {/*<feature.icon className="h-8 w-8"/>*/}
                                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                                    {feature.name}
                                </h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-center gap-3">
                {features.map((_, featureIndex) => (
                    <button
                        type="button"
                        key={featureIndex}
                        className={clsx(
                            'relative h-0.5 w-4 rounded-full',
                            featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500',
                        )}
                        aria-label={`Go to slide ${featureIndex + 1}`}
                        onClick={() => {
                            slideRefs.current[featureIndex].scrollIntoView({
                                block: 'nearest',
                                inline: 'nearest',
                            })
                        }}
                    >
                        <span className="absolute -inset-x-1.5 -inset-y-3"/>
                    </button>
                ))}
            </div>
        </>
    )
}

export function PrimaryFeatures() {
    return (
        <section
            id="features"
            aria-label="Features for investing all your money"
            className="bg-gray-900 py-20 sm:py-32"
        >
            <Container>
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
                    <h2 className="text-3xl font-medium tracking-tight text-white">
                        Hauptfunktionen des Systems
                    </h2>
                    <p className="mt-2 text-lg text-gray-400">
                        Überwachen Sie den Status der Türen, steuern Sie den Zugang und verfolgen Sie den Betrieb
                        automatischer Systeme in Echtzeit. Alle Daten sind immer zur Hand – egal ob auf Ihrem Smartphone
                        oder PC. Die Doora.ch-Plattform bietet Ihnen einen umfassenden Überblick über den Systembetrieb,
                        sofortige Benachrichtigungen bei Störungen, Fernverwaltung und ermöglicht es Ihnen, die
                        Sicherheit und Stabilität aller Standorte mühelos zu gewährleisten.
                    </p>
                </div>
            </Container>
            <div className="mt-16 md:hidden">
                <FeaturesMobile/>
            </div>
            <Container className="hidden md:mt-20 md:block">
                <FeaturesDesktop/>
            </Container>
        </section>
    )
}
