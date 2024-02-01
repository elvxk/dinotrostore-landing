import logo from "../assets/dnts1.webp";

const Footer = () => {
  return (
    <footer className="footer shapedividers_com-3099">
      <div className="flex flex-col container mx-auto pt-[8vh] pb-[2vh] px-4 justify-center items-center gap-6">
        <img src={logo} alt="logo" className="h-[60px]" draggable={false} />
        <div className="flex flex-col gap-1 md:flex-row md:gap-6 items-center justify-center text-center text-lg">
          <a
            href="https://dinotrostore.com/bantuan"
            target="_blank"
            className="font-single text-white transition-all hover:text-green-500 hover:underline underline-offset-4 hover:scale-105"
          >
            BANTUAN
          </a>
          <a
            href="https://dinotrostore.com/pertanyaan-umum"
            target="_blank"
            className="font-single text-white transition-all hover:text-green-500 hover:underline underline-offset-4 hover:scale-105"
          >
            PERTANYAAN UMUM
          </a>
          <a
            href="https://dinotrostore.com/kebijakan-privasi"
            target="_blank"
            className="font-single text-white transition-all hover:text-green-500 hover:underline underline-offset-4 hover:scale-105"
          >
            KEBIJAKAN & PRIVASI
          </a>
          <a
            href="https://dinotrostore.com/syarat-ketentuan"
            target="_blank"
            className="font-single text-white transition-all hover:text-green-500 hover:underline underline-offset-4 hover:scale-105"
          >
            SYARAT & KETENTUAN
          </a>
        </div>
        <h1 className="text-white font-manrope text-center cursor-default text-sm">
          Made with Love ❤ by{" "}
          <a
            href="https://instagram.com/elvxk"
            target="_blank"
            className="text-green-500 font-bold cursor-pointer"
          >
            elvxk
          </a>
          <br />
          <span className="text-green-500 font-bold">Copyright</span> 2024 ©
          Dinotrostore
        </h1>
      </div>
    </footer>
  );
};
export default Footer;
