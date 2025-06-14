import Image from "next/image";


export default function Header() {
  return (
    <header className="w-full bg-white shadow-md p-4 flex items-center justify-between lg:border-b-1 lg:border-gray-300">
      <h1 className="lg:text-2xl font-bold text-xl ml-9 lg:ml-0">DashBoard-Nextjs</h1>

      <div className="flex items-center gap-4 ">
        <span className="font-semibold hidden md:block">Hardik Sharma</span>
        <Image
          src="/avatar.jpg"   
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      </div>
    </header>
  );
}


