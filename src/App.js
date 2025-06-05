import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header"
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./Pages/AboutPage";
import AboutLink from "./shared/AboutLink";
import { FeedbackProvider } from "./Context/FeedbackContext";

function App()
{

    return (
    <FeedbackProvider>
        <Router>
        <>
            <Header/>
            <Routes>
            <Route path="/" element={<>
            <div className="container">
                <FeedbackForm ></FeedbackForm>
                <FeedbackStats/>
                <FeedbackList/>
            </div>
                    <AboutLink></AboutLink>
            </>}/>
            <Route path="/about" element={<AboutPage></AboutPage>}/>
            </Routes>
        </>
        </Router>
    </FeedbackProvider>
)
}

export default App