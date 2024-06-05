import Image from "next/image";
import solana from "../../public/solbadge.png";
import mascot from "../../public/mascot2.png";
import telegram from "../../public/telegramlogo.jpg";
import twitter from "../../public/twitterlogo.jpg";
import pump from "../../public/pumplogo.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="container mx-auto grid grid-flow-row md:grid-flow-col md:grid-cols-3 text-center items-center justify-center">
        <div>
          <Image
            alt="solana"
            src={solana}
            className="w-1/4 pt-20 mx-auto"
          ></Image>
          <p className="mt-10 text-slate-600 font-gagalin w-3/4 mx-auto">
            Get ready to soar with $HACHI on Solana – where the mystical meets
            the modern, and every transaction is a step towards a more playful
            and prosperous crypto world.
          </p>
        </div>
        <div className="">
          <Image alt="mascot" src={mascot} className="mx-auto" />
        </div>

        <div className="grid gap-5 grid-cols-3 justify-center p-5 w-3/4 mx-auto ">
          <Link
            href={""}
            target="_blank"
            className="hover:scale-125 transition-transform"
          >
            <Image src={telegram} alt="telegram"></Image>
          </Link>
          <Link
            href={""}
            target="_blank"
            className="hover:scale-125 transition-transform"
          >
            <Image src={twitter} alt="twitter"></Image>
          </Link>
          <Link
            href={""}
            target="_blank"
            className="hover:scale-125 transition-transform"
          >
            <Image src={pump} alt="pump"></Image>
          </Link>
        </div>
      </div>
      <div className="text-center pt-10 pb-20">
        <p className="  p-4 md:p-10 text-2xl md:text-6xl bg-red-600 rounded-full inline mx-auto font-gagalin tracking-widest">
          SOMBRERO CAT DRAGON
        </p>
      </div>
      <div className="flex overflow-hidden min-w-full font-gagalin">
        <div className="flex bg-yellow-400 text-black text-xl md:text-5xl py-4 justify-around min-w-full animate-loop ">
          <div>
            <p>$HACHI</p>
          </div>
          <div>
            <p>$HACHI</p>
          </div>
          <div>
            <p>$HACHI</p>
          </div>
          <div>
            <p>$HACHI</p>
          </div>
          <div>
            <p>$HACHI</p>
          </div>
          <div>
            <p>$HACHI</p>
          </div>
        </div>
        <div className="flex bg-yellow-400 text-black text-xl md:text-5xl py-4 justify-around min-w-full animate-loop">
          <div>
            <p>$HACHI</p>
          </div>
          <div>
            <p>$HACHI</p>
          </div>
          <div>
            <p>$HACHI</p>
          </div>
          <div>
            <p>$HACHI</p>
          </div>
          <div>
            <p>$HACHI</p>
          </div>
          <div>
            <p>$HACHI</p>
          </div>
        </div>
      </div>
    </main>
  );
}
