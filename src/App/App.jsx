import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterPage from "../components/footer/Footer";
import EditPromotion from "../pages/edit-promotion";
import NewPromotion from "../pages/new-promotion";
import Promotions from "../pages/promotions";

export default function App() {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Promotions />} />
                <Route path="/create" element={<NewPromotion />} />
                <Route path="/edit/:id" element={<EditPromotion />} />
            </Routes>
            <FooterPage />
        </Router>
    );
}