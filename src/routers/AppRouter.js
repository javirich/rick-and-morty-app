import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { CharacterScreen } from '../components/CharacterScreen';
import { HomeScreen } from '../components/HomeScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>

                <Routes>

                    <Route path="character/:characterId" element={<CharacterScreen />} />
                    <Route path="/" element={<HomeScreen />} />

                </Routes>

        </BrowserRouter>
    )
}
