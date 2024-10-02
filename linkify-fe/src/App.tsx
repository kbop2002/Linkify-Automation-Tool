import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Dashboard from './components/dashboard/Dashboard.tsx';
import Navbar from './components/shared/Navbar.tsx';

const App: React.FC = () => {
    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "#0d47a1",
                        },
                    },
                    fpsLimit: 60,
                    particles: {
                        color: { value: "#ffffff" },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                        },
                        move: {
                            enable: true,
                            speed: 2,
                        },
                        number: {
                            density: { enable: true, area: 800 },
                            value: 50,
                        },
                    },
                }}
            />
            <div style={{ position: 'absolute', top: 0, width: '100%', zIndex: 1 }}>
                <Navbar />
                <Dashboard />
            </div>
        </div>
    );
};

export default App;
