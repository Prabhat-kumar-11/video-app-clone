export const Footer = () => {
  return (
    <footer className="bg-inherit border-t-4 border-black dark:border-black">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-black-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-black-500 dark:text-black-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline text-dark">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-dark">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-dark">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-dark">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-black-900 uppercase dark:text-white">
              Help center
            </h2>
            <ul className="text-black-500 dark:text-black-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline text-dark">
                  Discord Server
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-dark">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-dark">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-dark">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-black-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-black-500 dark:text-black-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline text-dark">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-dark">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-dark">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-black-900 uppercase dark:text-white">
              Download
            </h2>
            <ul className="text-black-500 dark:text-black-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline text-dark">
                  iOS
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-dark">
                  Android
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-dark">
                  Windows
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-dark">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
