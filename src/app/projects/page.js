import Image from "next/image";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import Bird from "../../../public/bird.svg";
import Robot from "../../../public/robot.svg";
import Privacy from "../../../public/privacy.svg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <main className="flex-grow">
        <section class="text-gray-400 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-12 mb-12 border-gray-200 sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0">
                <Image
                  src={Privacy}
                  alt="Picture of the author"
                  class="w-24 ml-2 mt-2"
                />
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-300 text-lg title-font font-medium mb-2">
                  The Impact of Privacy Enhancing Technologies on Vision Models
                </h2>
                <ul>
                  <li>
                    • Conducting research to measure the impact of techniques
                    such as face blurring and license plate alteration on visual
                    data used in autonomous driving. The study aims to evaluate
                    how these methods affect the overall success of autonomous
                    driving models.
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-12 mb-12 border-gray-200 sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0">
                <Image
                  src={Bird}
                  alt="Picture of the author"
                  class="w-24 ml-2 mt-2"
                />
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-300 text-lg title-font font-medium mb-2">
                  Object Detection Platform for IoT devices
                </h2>
                <ul>
                  <li>
                    • Developed a system that operates on Raspberry Pi and
                    Jetson devices, utilizing camera-based image processing
                    models to control connected motors based on the results.
                    Created a specialized pipeline to fine-tune the YOLOv5
                    object detection model.
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-12 mb-12 border-gray-200 sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0">
                <Image
                  src={Robot}
                  alt="Picture of the author"
                  class="w-20 ml-2"
                />
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-300 text-lg title-font font-medium mb-2">
                  Remote Robot Operation with AI Assistance
                </h2>
                <ul>
                  <li>
                    • Designed software to control a 3-axis robotic arm, created
                    with a 3D printer, using a connected camera and operating on
                    a Raspberry Pi. Enabled network-based control of the robot.
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0">
                <svg
                  fill="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 90 90"
                >
                  <path
                    d="M72.2,4.6L53.4,32.5c-1.3,1.9,1.2,4.2,3,2.6L74.9,19c0.5-0.4,1.2-0.1,1.2,0.6v50.3c0,0.7-0.9,1-1.3,0.5l-56-67
	C17,1.2,14.4,0,11.5,0h-2C4.3,0,0,4.3,0,9.6v70.8C0,85.7,4.3,90,9.6,90c3.3,0,6.4-1.7,8.2-4.6l18.8-27.9c1.3-1.9-1.2-4.2-3-2.6
	l-18.5,16c-0.5,0.4-1.2,0.1-1.2-0.6V20.1c0-0.7,0.9-1,1.3-0.5l56,67c1.8,2.2,4.5,3.4,7.3,3.4h2c5.3,0,9.6-4.3,9.6-9.6V9.6
	c0-5.3-4.3-9.6-9.6-9.6C77.1,0,74,1.7,72.2,4.6z"
                  ></path>
                </svg>
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-300 text-lg title-font font-medium mb-2">
                  MetaTravel - Near Hackathon 2022 Best Design Winner 🏆
                </h2>
                <ul class="leading-relaxed text-base">
                  <li>
                    {" "}
                    • A project involving the use of blockchain infrastructure
                    to eliminate conflicts in reservation systems.
                  </li>
                  <li>
                    • An NFT reservation system was developed for hotels using
                    blockchain.
                  </li>
                  <li>
                    • Hotel tour and reservation options were added with the
                    Metaverse concept developed using Unity and WebGL.
                  </li>
                </ul>
                <a
                  href="https://devpost.com/software/metatravel"
                  class="mt-3 text-orange-700 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </div>
  );
}
