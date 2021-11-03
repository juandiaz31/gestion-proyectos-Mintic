import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <div className="bg-green-500">hola mundo, soy next js</div>
      <div className="bg-blue-500">
        <Link href="/admin/usuarios">
          <a>Ir a admin/usuarios</a>
        </Link>
      </div>
      <div className="bg-red-500">
        <Link href="/sebastian">
          <a>Ir a sebastian</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
