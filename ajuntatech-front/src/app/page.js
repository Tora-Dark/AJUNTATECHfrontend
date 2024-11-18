"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirigir a la página de login cuando se carga la página principal
    router.push("/login");
  }, [router]);

  return null; // Opcional: Puedes devolver algo mientras esperas la redirección
}
