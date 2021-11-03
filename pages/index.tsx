import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <div className="bg-green-500">hola mundo, soy next js</div>
      <Link href="/admin/usuarios">
      <a>Ir a admin/usuarios</a>
      </Link>
      <Link href="/sebastian">
      <a>Ir a sebastian</a>
      </Link>
    </div>
  );
};

export default Home;
