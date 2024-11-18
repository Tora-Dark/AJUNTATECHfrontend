import { CustomCard } from "@/ui/CustomCard";
import React from "react";
import {
  FaUser,
  FaFileAlt,
  FaTransgender,
  FaUsers,
  FaLink,
  FaCalendar,
  FaDesktop,
} from "react-icons/fa"; // Importando los íconos

const Dashboard = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.map((card) => (
          <CustomCard
            key={card.id}
            icon={card.icon}
            id={card.id}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </section>
    </div>
  );
};

export default Dashboard;

const cardsData = [
  {
    id: 1,
    title: "Intranet IA",
    description: "Permet extreure informació clau de tota la documentació emmagatzemada.",
    icon: <FaUser className=" mb-4 text-4xl text-primary-500" />,
    link: "/intranet",
  },
  {
    id: 2,
    title: "Documents IA",
    description: "Possibilita la pujada de documents per a l'extracció d'informació.",
    icon: <FaFileAlt className=" mb-4 text-4xl text-primary-500" />,
    link: "/documents",
  },
  {
    id: 3,
    title: "Transcripció i diaritització",
    description: "Transcriu i identifica els diferents participants en les reunions.",
    icon: <FaDesktop className=" mb-4 text-4xl text-primary-500" />,
    link: "/transcripcio",  // Añadir el enlace que falte
  },
  {
    id: 4,
    title: "Reunions amb IA",
    description: "Genera actes automàtiques i facilita el seguiment i la gestió de les tasques.",
    icon: <FaUsers className=" mb-4 text-4xl text-primary-500" />,
    link: "/reunions",  // Añadir el enlace que falte
  },
  {
    id: 5,
    title: "Links d'interès",
    description: "Accés ràpid a recursos i enllaços rellevants centralitzats.",
    icon: <FaLink className=" mb-4 text-4xl text-primary-500" />,
    link: "/links",  // Añadir el enlace que falte
  },
  {
    id: 6,
    title: "Calendari",
    description: "Organitza esdeveniments, reunions i tasques programades.",
    icon: <FaCalendar className="mb-4 text-4xl text-primary-500" />,
    link: "/calendari",  // Añadir el enlace que falte
  },
];
