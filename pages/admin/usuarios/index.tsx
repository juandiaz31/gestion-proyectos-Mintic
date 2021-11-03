import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <div>Hola desde admin usuarios</div>
      <Link href="/">
        <a>Ir a la pagina de inicion</a>
      </Link>
    </div>
  );
};

export default index;
