import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import BackgroundBlobOrange from "../components/backgroundBlobOrange";
import BackgroundBlobWhite from "../components/backgroundBlobWhite";
import Styles from "../../styles/Home.module.css";

const Login = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      <Head>
        <title>Evercheap</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" bg-tertiary isolate">
        <BackgroundBlobOrange />

        <Header />

        <main className={Styles.main}>
          <div className="container" style={{ padding: "50px 0 100px 0" }}>
            {!session ? (
              <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                theme="dark"
              />
            ) : (
              <p>Account page will go here.</p>
            )}
          </div>
          <BackgroundBlobWhite />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Login;
