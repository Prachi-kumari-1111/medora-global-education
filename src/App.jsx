import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MessageCircle } from "lucide-react";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Classes from "./pages/Classes";
import LearningModelsPage from "./pages/LearningModelsPage";
import SuccessStories from "./pages/SuccessStories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";

function Protected({children}) {
  const location=useLocation();
  const authed=localStorage.getItem("medora_auth")==="true";
  return authed ? children : <Navigate to="/login" replace state={{from:location}} />;
}

function PublicAuth({children}) {
  const authed=localStorage.getItem("medora_auth")==="true";
  return authed ? <Navigate to="/" replace/> : children;
}

function App() {
  useLocation();
  return <div className="min-h-screen bg-[#f7fbff]">
    <Navbar/>
    <main>
      <Routes>
        <Route path="/login" element={<PublicAuth><Auth mode="login"/></PublicAuth>} />
        <Route path="/signup" element={<PublicAuth><Auth mode="signup"/></PublicAuth>} />
        <Route path="/" element={<Protected><Home/></Protected>} />
        <Route path="/programs" element={<Protected><Programs/></Protected>} />
        <Route path="/classes" element={<Protected><Classes/></Protected>} />
        <Route path="/learning-models" element={<Protected><LearningModelsPage/></Protected>} />
        <Route path="/success-stories" element={<Protected><SuccessStories/></Protected>} />
        <Route path="/about" element={<Protected><About/></Protected>} />
        <Route path="/contact" element={<Protected><Contact/></Protected>} />
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
    </main>
    {localStorage.getItem("medora_auth")==="true" && <><Footer/><a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-xs font-black text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-1"><MessageCircle size={17}/> Chat With Us</a></>}
  </div>;
}
export default App;
