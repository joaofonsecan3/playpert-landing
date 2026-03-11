import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Home from "./pages/Home";
import WhatsAppFloat from "./components/landing/WhatsAppFloat";

const UniversoPlaypert = lazy(() => import("./pages/UniversoPlaypert"));

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universo-playpert" element={<UniversoPlaypert />} />
        </Routes>
      </Suspense>

      <WhatsAppFloat />
    </>
  );
}