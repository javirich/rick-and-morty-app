import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { CharacterScreen } from '../components/CharacterScreen';
import { HomeScreen } from '../components/HomeScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <div className='bg-rick-and-morty position-relative'>
                <h1 className="text-white text-center position-absolute bottom-0 start-50 translate-middle mb-5">
                    Rick & Morty Characters
                </h1>
            </div>
            <div id="mainContainer" className='position-relative'>

                <Routes>

                    <Route path="character/:characterId" element={<CharacterScreen />} />
                    <Route path="/" element={<HomeScreen />} />

                </Routes>

            </div>

        </BrowserRouter>
    )
}
