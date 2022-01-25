import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { CharacterScreen } from '../components/CharacterScreen';
import { HomeScreen } from '../components/HomeScreen';
import { ScrollToTop } from '../components/ScrollToTop';

export const AppRouter = () => {
    return (
        <Router>
            <ScrollToTop>
                <Routes>

                    <Route path="character/:characterId" element={<CharacterScreen />} />
                    <Route path="/" element={<HomeScreen />} />

                </Routes>
            </ScrollToTop>
        </Router>
    )
}
