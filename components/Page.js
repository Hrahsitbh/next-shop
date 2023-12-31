import Head from "next/head";
import NavBar from "./NavBar";
import Title from "./Title";

function Page({ children, title }) {
  return (
    <>
      <Head>
        <title>{`${title} - Next Shopp`}</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="px-6 py-4">
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
}

export default Page;
