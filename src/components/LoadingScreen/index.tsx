import Image from "next/image";

export default function LoadingScreen() {
  return (
    <main className={`h-screen flex items-center justify-center`}>
      <Image className={`w-40 animate-bounce`} alt="" src={`/logo-white.png`} width={1079} height={1274} />
    </main>
  );
}
