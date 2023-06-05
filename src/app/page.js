import Image from "next/image";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <main className="">
        <section class="text-gray-300 body-font">
          <div class="container px-5 pt-32 mx-auto">
            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto ">
              <p>
                Hello! I&apos;m a recent Computer Engineering graduate from
                Akdeniz University, Turkey. Passionate about Computer Science,
                Distributed Systems, and Machine Learning, I&apos;ve dedicated
                my academic journey to exploring these areas, from understanding
                theoretical principles to practical applications.
              </p>
              <br />
              <p>
                I thrive on tackling challenges in distributed systems and
                unearthing insights from data using machine learning. More than
                just a technologist, I am a problem-solver at heart, committed
                to using technology as a tool to make an impact. Some of the
                highlights so far:
              </p>
              <br />
              <div class="lm-8">
                <ul>
                  <li>
                    • Technical Lead at 2022 MetaTravel Metaverse-Blockchain
                    Team - 🏆 Best Design Winner
                  </li>

                  <li>
                    • Software Team Lead at 2022 Alioth CANSAT Team - 🏅
                    Successfully passed the PDR phase
                  </li>

                  <li>
                    • After graduation, I worked on Machine Learning and
                    Distributed Systems at Martur Fompak International for 6
                    months.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-400 body-font">
          <div class="container px-5 pt-52 mx-auto">
            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block w-8 h-8 text-gray-600 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class="leading-relaxed text-lg">
                Theories are not enough. We need good experiments too. That’s
                what gives us the knowledge we need to improve our theories.
              </p>
              <span class="inline-block h-1 w-10 rounded bg-orange-700 mt-2 mb-2"></span>
              <h2 class="text-gray-600 font-medium title-font tracking-wider text-sm">
                Richard Feynman
              </h2>
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  );
}
