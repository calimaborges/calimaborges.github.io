import Head from "next/head";
import { format } from "date-fns";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.h4}>
        <p>
          Hello! I am <strong>Carlos Augusto Borges</strong>. I currently work
          as a full-time programmer for the Brazilian government. My main
          experience is with backend development but I also do frontend and
          infrastructure development using Java, JavaScript and Kubernetes.
        </p>
        <p>
          I am currently going through a carreer shift to game development and I
          pretend to document this journey here.
        </p>
      </section>
      <section className={`${utilStyles.h4} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.h2}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
