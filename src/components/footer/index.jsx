import { FaLinkedin } from "react-icons/fa";
import BCITLogo from "/bcitLogo.svg";
export default function Footer() {
  return (
    <>
      <div className="absolute h-5 w-full z-10 bg-[#4C6440] rounded-br-xl rounded-bl-xl" />
      <footer className="bg-[#d4cbb8] py-10 px-6 text-gray-800">
        <div className="max-w-6xl flex flex-col text-center lg:text-left lg:flex-row m-auto gap-10 items-start">
          <div className="m-auto">
            <h4 className="font-bold mb-4 text-[#4C6440] text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm font-medium text-center lg:text-left uppercase tracking-widest text-gray-700">
              <li>
                <a href="/" className="hover:text-green-700">
                  Home
                </a>
              </li>
              <li>
                <a href="/Interactive-Map" className="hover:text-green-700">
                  Ecosystems
                </a>
              </li>
              <li>
                <a href="/Gallery" className="hover:text-green-700">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/FAQ" className="hover:text-green-700">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.bcit.ca/programs/forest-and-natural-areas-management-diploma-full-time-7485dipma/#contacts"
                  className="hover:text-green-700"
                >
                  Contact
                </a>
              </li>
            </ul>
            <img className="w-32 lg:w-48 pl-2 pt-4" src={BCITLogo} />
          </div>

          {/* References */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-[#4C6440] uppercase tracking-widest text-sm mb-4">
              References
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-xs text-gray-700 font-body-copy leading-relaxed">
              <div>
                <p>
                  Canadian Society of Soil Science. 2020.{" "}
                  <em>Soils of Canada.</em> [Online] Available:{" "}
                  <a
                    href="https://soilsofcanada.ca"
                    target="_blank"
                    className="underline hover:text-green-700"
                  >
                    soilsofcanada.ca
                  </a>{" "}
                  [2024].
                  <br />
                  This work is licensed under a Creative Commons
                  Attribution-NonCommercial 4.0 International License.
                </p>
              </div>

              <div>
                <p>
                  D.V. Meidinger and J. Pojar.{" "}
                  <em>Ecosystems of British Columbia.</em> 1991. Research
                  Branch.
                  <br />
                  Available at:{" "}
                  <a
                    href="https://www.for.gov.bc.ca/hfd/pubs/docs/srs/srs06.htm"
                    target="_blank"
                    className="underline hover:text-green-700"
                  >
                    https://www.for.gov.bc.ca/hfd/pubs/docs/srs/srs06.htm
                  </a>
                </p>
              </div>

              <div>
                <p>
                  Krzic, M., Walley, F.L., Diochon, A., Paré, M.C., & Farrell,
                  R.E. (Eds.). 2021. <em>Digging into Canadian soils:</em>
                  <br />
                  Pinawa, MB: Canadian Society of Soil Science. Available at:{" "}
                  <a
                    href="https://openpress.usask.ca/soilscience/"
                    target="_blank"
                    className="underline hover:text-green-700"
                  >
                    https://openpress.usask.ca/soilscience/
                  </a>
                </p>
              </div>

              <div>
                <p>
                  Panchuk, K. <em>Physical Geology – H5P Edition.</em>
                  <br />
                  Licensed under a Creative Commons
                  Attribution-NonCommercial-ShareAlike 4.0 International
                  License.
                </p>
              </div>

              <div>
                <p>
                  UBC – Center for Forest Conservation Genetics.{" "}
                  <em>CWH subzones map.</em>
                  <br />
                  Available at:{" "}
                  <a
                    href="https://cfcg.forestry.ubc.ca/resources/cataloguing-in-situ-genetic-resources/cwh-zone/cwh-subzone-maps/"
                    target="_blank"
                    className="underline hover:text-green-700"
                  >
                    UBC CWH Subzone Maps
                  </a>
                </p>
              </div>

              <div>
                <p>
                  Photo and video provided from © 2024 Julia Alards-Tomalin,
                  Alex Tait, Jason Pon, and Justin Perry.
                  <br />
                  Licensed under CC BY-SA-NC.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-10 text-center text-xs text-gray-700 font-body-copy flex flex-col items-center justify-center gap-1">
          <span className="">
            In collaboration with{" "}
            <strong>BCIT's Forest and Natural Resources Management</strong>{" "}&{" "}  
            <strong>Fish, Wildlife and Recreation Programs</strong>.
          </span>

          <span className="pt-4">
            Created by <strong>Yeongtaek Lee</strong>{" "}
            <a
              href="https://www.linkedin.com/in/yeongtaek-lee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block ml-1 text-green-700 hover:text-green-900"
            >
              <FaLinkedin className="inline-block" />
            </a>{" "}
            and <strong>Madi Tabon</strong>{" "}
            <a
              href="https://www.linkedin.com/in/madi-tabon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block ml-1 text-green-700 hover:text-green-900"
            >
              <FaLinkedin className="inline-block" />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
