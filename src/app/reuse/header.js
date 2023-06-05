import Name from "../name.png";
import Logo from "../logo.png";
import Image from "next/image";
import Link from "next/link";

function HeaderComponent() {
  return (
    <header class="text-gray-400 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href="/">
            <Image src={Logo} class="w-10 h-10 text-white p-0 rounded-full" />
          </Link>
        </div>

        <Link
          href="/"
          class="flex order-first lg:order-none lg:w-1/5  items-centerlg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <Image src={Name} class="ml-3 text-xl" />
        </Link>
        <nav class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <Link href="" class="mr-5 hover:text-orange-700">
            Contact
          </Link>
          <Link href="https://drive.google.com/file/d/18LWKrn9I5gne-RzbrInQVFXzdc1efuoU/view?usp=share_link" target="_blank" class="mr-5 hover:text-orange-700">
            Resume
          </Link>
          <Link href="/projects" class="mr-5 hover:text-orange-700">
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default HeaderComponent;
