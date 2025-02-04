import Footer from "./components/footer";
import Header from "./components/header";
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <Header />
            <h1>Hello</h1>
            <Link href="/about">
                <button>Go to About Page</button>
            </Link>
            <Footer />
        </div>
    );
}