import Image from "next/image";

export default function Page8() {
  return (
    <>
      <p>Kamu adalah tipe donat....</p>
      <div>
        <Image alt={``} src={`/images/donat-2.png`} width={300} height={300} />
      </div>
      <p>Donat Chocolate!</p>
      <button className={`button`}>Claim Free Donut</button>
    </>
  );
}
