export function Header({ navbar, setNavbar }) {
  return (
    <header className="fixed w-full flex justify-between items-center h-20 md:h-20  bg-black">
      <div className="text-white p-4">Profile</div>

      <div className=" flex justify-center items-center ">
        <ul className=" flex justify-center items-center ">
          <li className="p-2 mx-2">
            <a
              href="https://github.com/tamilanbann?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                className="m-2 fill-white bg-black   hover:bg-white hover:fill-black "
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
          </li>
          <li className="p-2 mx-2">
            <a
              href="https://www.linkedin.com/in/tamilanbannakkeeran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                className="m-2 fill-white bg-black   hover:bg-white hover:fill-black"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </li>
        </ul>
        <nav>
          <button
            className="md:hidden"
            onClick={() => setNavbar({ open: !navbar.open })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-12 h-19"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
          <ul
            className={
              !navbar.open
                ? "fixed  w-full min-h-screen bg-black " +
                  "text-white  transition duration-300 transform translate-x-full md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-6  " +
                  "md:translate-x-0 "
                : "fixed  left-0 right-0 min-h-screen bg-black " +
                  "text-white  transition duration-300 transform translate-x-0 md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-6 " +
                  "md:translate-x-0 "
            }
          >
            <li
              className="hover:bg-white hover:text-black md:min-w-[90px] h-20 flex justify-center items-center"
              onClick={() => setNavbar({ open: !navbar.open })}
            >
              <a href="/#">Home</a>
            </li>
            <li
              className="w-full  hover:bg-white hover:text-black md:min-w-[90px] h-20 flex justify-center items-center"
              onClick={() => setNavbar({ open: !navbar.open })}
            >
              <a href="/#" className="inline-flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="m-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                <p>Github</p>
              </a>
            </li>
            <li
              className="w-full hover:bg-white hover:text-black md:min-w-[90px] h-20 flex justify-center items-center"
              onClick={() => setNavbar({ open: !navbar.open })}
            >
              <a href="/#">Skills</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
