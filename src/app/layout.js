import "./globals.css";
import Navbar from "@/Components/shared/Navbar.jsx";
import Footer from "@/Components/shared/Footer.jsx";
import BackgroundBlob from "@/Components/shared/BackgroundBlob.jsx";
import ScrollToTop from "./ScrollToTop";

import { Analytics } from "@vercel/analytics/next"

export const metadata = {
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        ],
        shortcut: '/favicon.ico',
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            { rel: 'web-app-manifest', url: '/site.webmanifest' },
            { rel: 'icon', type: 'image/x-icon', url: '/favicon.ico' },
            { rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' },
        ],
    },
    title: {
        default: "Jasir Limani | Full-Stack Developer & Software Engineer",
        template: "%s | Jasir Limani"
    },
    description: "Jasir Limani is a 17-year-old self-taught full-stack developer from Macedonia. Specializing in MERN stack, React, Next.js, and modern web technologies. View my projects including OrderEase, WheelseAway, and more.",
    keywords: [
        "Jasir Limani",
        "Full-Stack Developer",
        "Software Engineer",
        "MERN Stack",
        "React Developer",
        "Next.js Developer",
        "JavaScript Developer",
        "Web Developer",
        "Macedonia",
        "OrderEase",
        "WheelseAway",
        "Portfolio"
    ],
    authors: [{ name: "Jasir Limani" }],
    creator: "Jasir Limani",
    publisher: "Jasir Limani",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://jasirlimani.dev'), // Replace with your actual domain
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://jasirlimani.dev', // Replace with your actual domain
        title: 'Jasir Limani | Full-Stack Developer & Software Engineer',
        description: 'Jasir Limani is a 17-year-old self-taught full-stack developer from Macedonia. Specializing in MERN stack, React, Next.js, and modern web technologies.',
        siteName: 'Jasir Limani Portfolio',
        images: [
            {
                url: '/images/portrait.png',
                width: 1200,
                height: 630,
                alt: 'Jasir Limani - Full-Stack Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jasir Limani | Full-Stack Developer & Software Engineer',
        description: 'Jasir Limani is a 17-year-old self-taught full-stack developer from Macedonia. Specializing in MERN stack, React, Next.js, and modern web technologies.',
        creator: '@Jasir28616447',
        images: ['/images/portrait.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'rtEImrSFM19Q8-MyJaXL4gsq-M6nxjSPsl-XRsVG5CA',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <head>
                    <meta name="theme-color" content="#8B0000" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </head>

            </head>
            <body>
                <BackgroundBlob count={20} />
                <Navbar />
                <ScrollToTop />
                {children}
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
