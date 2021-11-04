import React from "react";
import Link from "next/link";

const sebastian = () => {
  return (
    <div>
      <div>hola desde sebastian</div>
      <Link href="/">
        <a>Ir a la pagina de inicio</a>
      </Link>
    </div>
  );
};

export default sebastian;
