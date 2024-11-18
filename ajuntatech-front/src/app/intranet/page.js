"use client";
import {CustomCard} from "@/ui/CustomCard";
import { Card, Text } from "flowbite-react";
import {
  FaFileAlt,
  FaBuilding,
  FaUserTie,
  FaLaptop,
  FaClipboard,
  FaShieldAlt,
  FaRegNewspaper,
  FaChalkboardTeacher,
} from "react-icons/fa"; // Importando los íconos

export default function ComponentName() {
  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardsData.map((card) => (
          <CustomCard
            key={card.id}
            id={card.id}
            title={card.title}
            icon={card.icon}
            description={card.description}
            link={card.link}
          />
        ))}
      </section>
    </div>
  );
}
const cardsData = [
  {
    id: 1,
    title: "Documents",
    description: "Accedeix a documents importants.",
    icon: <FaFileAlt className=" mb-4 text-4xl text-primary-500" />,
    link: "#",
  },
  {
    id: 2,
    title: "Espais",
    description: "Reserva espais per treballar en equip.",
    icon: <FaBuilding className=" mb-4 text-4xl text-primary-500" />,
    link: "#",
  },
  {
    id: 3,
    title: "Recursos Humans",
    description: "Informació sobre política i tràmits d'RH.",
    icon: <FaUserTie className=" mb-4 text-4xl text-primary-500" />,
    link: "#",
  },
  {
    id: 4,
    title: "Informàtica",
    description: "Suport i recursos tecnològics.",
    icon: <FaLaptop className=" mb-4 text-4xl text-primary-500" />,
    link: "#",
  },
  {
    id: 5,
    title: "Adm. Electrònica",
    description: "Accedeix a serveis administratius.",
    icon: <FaClipboard className=" mb-4 text-4xl text-primary-500" />,
    link: "#",
  },
  {
    id: 6,
    title: "Riscos Laborals",
    description: "Consells i informació sobre seguretat laboral.",
    icon: <FaShieldAlt className=" mb-4 text-4xl text-primary-500" />,
    link: "#",
  },
  {
    id: 7,
    title: "Logos i plantilles",
    description: "Descàrrega de recursos corporatius.",
    icon: <FaFileAlt className="mb-4 text-4xl text-primary-500" />,
    link: "#",
  },
  {
    id: 8,
    title: "Mobiliari outlet",
    description: "Compra mobles a preus especials.",
    icon: <FaBuilding className=" mb-4 text-4xl text-primary-500" />,
    link: "#",
  },
  {
    id: 9,
    title: "Portal d'avisos",
    description: "Publica i consulta avisos interns.",
    icon: <FaRegNewspaper className="mb-4 text-4xl text-primary-500" />,
    link: "#",
  },
  {
    id: 10,
    title: "Campus virtual",
    description: "Accedeix a recursos d'aprenentatge.",
    icon: (
      <FaChalkboardTeacher className="mb-4 text-4xl text-primary-500" />
    ),
    link: "#",
  },
];
