/* eslint-disable import/no-named-as-default */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    @media screen and (max-width: 500px) {
        margin: auto;
        padding: 15px;
    }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  // eslint-disable-next-line no-console
  console.log('retorno do useState', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Next Quiz</title>

      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <span>UEFA CHAMPIONS LEAGUE</span>
          </Widget.Header>
          <Widget.Content>
            <h1>Teste seus conhecimentos sobre a maior liga de futebol do mundo</h1>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              // eslint-disable-next-line no-console
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz aí seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/EnzoAlexsander" />
    </QuizBackground>
  );
}
