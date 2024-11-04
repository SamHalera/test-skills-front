import { dataLayerPageView } from "@/dataLayer/dataLayaerManager";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  dataLayerPageView("Accueil", "/");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl text-indigo-600 font-semibold">
            Welcome to the new Products Store!
          </h1>
          <Link
            className="bg-indigo-600 p-3 text-white duration-500 border border-indigo-600 hover:bg-transparent hover:text-indigo-600"
            href={"/products"}
          >
            see our products
          </Link>
        </div>
      </main>
    </div>
  );
}
