import Image from "next/image";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <main className="flex-grow">
        <section class="text-gray-300 body-font">
          <div class="container px-5 pt-32 mx-auto">
            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto ">
              <p>The easiest way to reach me is by email:</p>
              <br />
              <a
                href="mailto:contact@erinc-emre.com"
                class="italic text-orange-700"
              >
                contact@erinc-emre.com
              </a>
              <br />
              <br />
              <p>
                {""}
                You can also contact me on LinkedIn via the link at
                the bottom of this page.{" "}
              </p>
              <br />
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </div>
  );
}
