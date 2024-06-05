export default function Footer() {
    return (
      <>
        <hr />
        <footer className="flex flex-col items-center gap-2 text-center pb-10">
          <img
            src="/logo.svg"
            alt="Rick and Morty Logo"
            width="90"
            height="16"
            className="logo"
          />
          <p className="text-secondary">
            Created By Prince vasoya
            SE-I at GeekyAnts
          </p>
        </footer>
      </>
    );
  }