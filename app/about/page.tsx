import Link from "next/link"
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

export default function About() {
    return (
      <div>
        <Header />
        <h1>ヤッホー！</h1>
        <p>見ていってね</p>
        <div>
          <Image src="/my-image.jpg" alt="My Image" width={400} height={300} />
        </div>

        <Link href="/">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Back
          </button>
        </Link>
        <Footer />
      </div>
    ); 
}