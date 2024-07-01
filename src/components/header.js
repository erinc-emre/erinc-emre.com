import Name from "../../public/name.png";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

function HeaderComponent() {
  return (
    <header class="text-gray-300 body-font">
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
          <Link href="contact" class="mr-5 hover:text-orange-700">
            Contact
          </Link>
          <Link href="/projects" class="mr-5 hover:text-orange-700">
            Projects
          </Link>
          <Link
            href="/pdf/cv.pdf"
            locale={false}
            target="_blank"
            class="mr-5 hover:text-orange-700"
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default HeaderComponent;
