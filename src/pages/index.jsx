import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Movie</title>
        <meta name="description" content="Web App Movie criado com Next.js" />
        <meta name="keywords" content="Filmes para todo tipo de gente" />
      </Head>
      <StyledHome>
        <h1>Movie - Notícias recentes</h1>
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;
