import React from "react";
import { CalendarClock, ArrowRight, Scale } from "lucide-react";

function CTAButton() {
  const whatsapp = "https://wa.me/51988996057?text=Hola%20Lic.%20Yanarico,%20quisiera%20agendar%20una%20consulta";
  return (
    <a href={whatsapp} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-white shadow hover:opacity-90" style={{ backgroundColor: "#293C3D" }}>
      <CalendarClock className="h-4 w-4" />
      <span>Agenda una consulta</span>
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="p-4 flex justify-between items-center bg-white shadow">
        <div className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-[#293C3D]" />
          <h1 className="font-bold">J. Yanarico Abogados & Asociados</h1>
        </div>
        <CTAButton />
      </header>
      <main className="text-center py-20 bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <h2 className="text-4xl font-semibold text-white drop-shadow-lg">Defensa estratégica y soluciones legales claras</h2>
        <p className="mt-4 text-white drop-shadow">Derecho Civil • Derecho Laboral • Derecho Penal • Saneamiento Físico-Legal</p>
        <div className="mt-6">
          <CTAButton />
        </div>
      </main>
      <footer className="text-center py-6 text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} J. Yanarico Abogados & Asociados — Cajamarca, Perú
      </footer>
    </div>
  );
}
