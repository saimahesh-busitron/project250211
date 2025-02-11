import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Location from "./pages/Location";
import Projects from "./pages/Projects";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFoundpage from "./pages/NotFoundpage";
import "./index.css";
import ConversationList from "./pages/chatinbox";
import ChatSent from "./pages/chatsent";
import ChatTrashed from "./pages/chattrashed";
import ChatDreaft from "./pages/chatdraft";
import ChatStarred from "./pages/chatstarred";
import ChatNew from "./pages/chatnew";
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Homepage />
                            <About />
                            <Service />
                            <Projects />
                            <Location />
                            <Contact />
                            
                        </>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/chat-inbox" element={<ConversationList />} />
                <Route path="/chat-sent" element={<ChatSent/>} />
                <Route path="/chat-trashed" element={<ChatTrashed />} />
                <Route path="/chat-draft" element={<ChatDreaft />} />
                <Route path="/chat-starred" element={<ChatStarred />} />
            <Route path="/chat-new" element={<ChatNew />} />
                <Route path="*" element={<NotFoundpage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
