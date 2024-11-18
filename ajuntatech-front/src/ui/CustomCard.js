"use client";
import { Card } from "flowbite-react";
import Link from "next/link";
import {
  FaUser,
  FaFileAlt,
  FaTransgender,
  FaUsers,
  FaLink,
  FaCalendar,
  FaDesktop,
} from "react-icons/fa"; // Importando los íconos

export const CustomCard = ({ icon, id, title, link, description }) => {
  return (
    <Card
      key={id}
      as={Link}
      href={link}
      className="scale-100"
    >
      {/* Icono pegado a la izquierda */}
      <div className="flex items-start mb-4 gap-2">
        <div className="mr-4 rounded-full transition-transform duration-300 transform hover:scale-110">
          {icon}
        </div>
        
        {/* Título y descripción */}
        <div className="flex flex-col items-start justify-start">
          <span className="font-semibold text-xl text-neutral-900 mb-2">
            {title}
          </span>
          <p className="text-sm text-neutral-600 mb-4">{description}</p>
        </div>
      </div>
    </Card>
  );
};
