import { Outlet } from 'react-router-dom';
import Navbar from "./Components/shared/Navbar.jsx";
import BackgroundBlob from "./Components/shared/BackgorundBlob.jsx"; // fix typo in import name

export default function Layout() {
    return (
        <div className="relative min-h-screen bg-gradient-to-b overflow-hidden">
            {/* Blobs behind everything */}
            <BackgroundBlob count={6} />

            {/* Foreground content */}
            <Navbar />
            <main className="relative z-10 p-4">
                <Outlet />
            </main>
        </div>
    );
}
