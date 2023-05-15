import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeContainer = styled.div`
  text-align: center;
   padding: 0 1rem;
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageAndTextContainer = styled.div`
  display: flex;
  align-items: flex-start; 
  margin-top: 2rem;
  margin-left: 1rem; /* Adicione uma margem à esquerda */
`;

const ImageColumn = styled.div`
  flex: 1;
  margin-right: 1rem;
  max-width: 50%;
  margin-top: 2rem;
`;

const TextColumn = styled.div`
  flex: 1;
  max-width: 45%; /* Largura máxima ajustável */
  margin-left: 1rem;
  text-align: justify;
`;

const StyledHeading = styled.h2`
  color:  #00FFFF;
  font-family: 'Courier New', monospace;
  font-size: 25px;
`;

const StyledParagraph = styled.p`
  color: white;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`;


const SubText = styled.h2`
    color:  #FF69B4;
    font-family: 'Courier New', monospace;
    font-size: 15px;
`;
const About = () => {
    const images = [ // Coloque aqui os caminhos para as suas imagens
        require('../assets/montagem1.jpeg'),
        require('../assets/montagem2.jpeg'),
        require('../assets/montagem3.jpeg'),
        // ...
    ];
    return (
        <HomeContainer>
            <ImageColumn>
                <Carousel>
                    {images.map((image, index) => (
                        <div key={index}>
                            <CoverImage src={image} alt={`Cover Image ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>
            </ImageColumn>
            <ImageAndTextContainer>
                <TextColumn>
                    <StyledHeading>Zé Inácio Trips </StyledHeading>
                    <StyledParagraph>
                        <div>
                            "Zé Inácio Trips" é um projeto concebido para a disciplina de Projeto e Análise
                            de Algoritmos da Universidade de Brasília (UnB), sob a orientação do Professor
                            Doutor Mauricio Serrano. A essência deste trabalho reside na implementação de
                            algoritmos de grafos sofisticados, como o algoritmo de Dijkstra, numa aplicação
                            prática para traçar o caminho mais otimizado entre duas cidades.
                            <br />
                            Em nosso contexto, o caminho ideal é aquele que apresenta o menor custo - em outras
                            palavras, a rota mais curta em quilômetros, considerando as rodovias disponíveis e
                            em conformidade com as diretrizes da Centro-Sul, conforme explicado na aba 'Home'.
                            <br />
                            O algoritmo de Dijkstra, concebido pelo célebre cientista da computação holandês Edsger
                            Dijkstra em 1956, é uma técnica comumente empregada para encontrar o percurso mais curto
                            entre dois pontos em um grafo ponderado, ou seja, um grafo onde cada aresta tem um peso
                            ou custo.
                            <br />
                            O coração pulsante deste projeto é a figura de José Inácio, um caminhoneiro que nutria um amor
                            profundo por sua profissão e que era avô de um dos membros da equipe. Este projeto foi desenvolvido
                            como uma homenagem a ele. Embora José Inácio tenha nos deixado em 2008, seu legado perdura por meio
                            das histórias, lembranças, momentos vividos e, agora, imortalizado pelo "Zé Inácio Trips".
                            <br/>
                            Zé Inácio Trips foi executado ao longo de um intenso e produtivo final de semana por dois
                            amigos de longa data, Lucas e Felipe. A forte amizade entre eles foi estabelecida e cultivada desde
                            os tempos do ensino fundamental, amadurecendo ao longo dos anos de estudo compartilhados para o vestibular.
                            Agora, no estágio final do curso de Engenharia de Software na Universidade de Brasília, eles empregaram o conhecimento adquirido em uma iniciativa conjunta, resultando na criação deste projeto marcante.
                            <br />
                        </div>
                        <StyledHeading>Contato</StyledHeading>
                        <StyledParagraph>
                            <div>
                                <SubText>Felipe:</SubText>
                                
                                <div>
                                    <a href="mailto:felipealef@gmail.com">
                                        <img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank" /></a>
                                    <a href="https://www.linkedin.com/in/felipe-alef-rodrigues-28844a20a/" target="_blank">
                                        <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" /></a>
                                    <a href="https://github.com/Alef012" target="_blank">
                                        <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white" target="_blank" />
                                    </a>
                                </div>
                                <SubText>Lucas:</SubText>
                                <div>
                                    <a href="mailto:lucasoliveirainor3105@gmail.com">
                                        <img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank" /></a>
                                    <a href="https://www.linkedin.com/in/lucas-ramon-alves-de-oliveira/" target="_blank">
                                        <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" /></a>
                                        <a href="https://github.com/lramon2001" target="_blank">
                                        <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white" target="_blank" />
                                    </a>
                                </div>

                            </div>
                        </StyledParagraph>

                    </StyledParagraph>
                </TextColumn>
                <TextColumn>
                    <StyledHeading>Equipe </StyledHeading>
                    <StyledParagraph>
                        <div>
                            <SubText>Opinião do Lucas Sobre o projeto:</SubText>
                            "Trabalhar neste projeto foi uma experiência extremamente divertida e gratificante. Aprendemos muito sobre o React e, embora tenhamos enfrentado algumas dificuldades no início, especialmente devido à nossa familiaridade com o Angular, nossa percepção sobre a biblioteca mudou completamente. Agora, consideramos o React uma das melhores ferramentas para trabalhar.
                            Nosso professor de Introdução à Computação mencionou uma vez que, apesar das diferenças de sintaxe, as linguagens de programação, frameworks e bibliotecas têm propósitos similares na prática. A princípio, discordamos dessa afirmação, mas a experiência de aprender React, facilitada por nossos estudos prévios em outra ferramenta, nos fez perceber mais uma vez que ele estava correto.
                            Implementar o algoritmo de Dijkstra foi um desafio interessante e até mesmo divertido, pois, ao popular o grafo, obtivemos alguns caminhos bastante inesperados. Foi uma satisfação especial poder homenagear meu avô por meio deste projeto, e sou muito grato ao Felipe por ter aceitado a ideia e se empenhado tanto quanto eu."
                        </div>

                        <SubText>Opinião do Felipe Sobre o projeto:</SubText>
                        "Realizar esse projeto foi, sem dúvida, uma jornada incrível e divertida. Assim como Lucas, eu também comecei com algumas ressalvas em relação ao React, especialmente por estar mais acostumado com o Angular. No entanto, a flexibilidade e a eficiência do React realmente me surpreenderam.

                        Enfrentamos algumas dificuldades iniciais, é verdade, mas conforme nos aprofundávamos no aprendizado dessa biblioteca, percebíamos o quão poderosa ela pode ser. Foi uma experiência de aprendizado muito valiosa, e agora posso dizer com confiança que o React é uma das minhas ferramentas favoritas.

                        Quanto à implementação do algoritmo de Dijkstra e do grafo, foi uma experiência incrivelmente gratificante. Por mais que seja um desafio, a sensação de ver o algoritmo funcionando corretamente e o grafo sendo preenchido é incomparável. Tivemos alguns resultados inesperados no início, o que tornou tudo ainda mais divertido.

                        Finalmente, quero falar sobre a inspiração para o nome do nosso projeto, Zé Inácio Trips. Lucas sempre compartilhava comigo as histórias sobre seu avô, e eu sempre fui tocado por elas. Quando ele sugeriu homenagear seu avô com o nome do nosso projeto, eu imediatamente aceitei. Foi um elemento adicional de inspiração e motivação para nós durante todo o desenvolvimento. No final das contas, esse projeto não apenas nos permitiu aprender e crescer como desenvolvedores de software, mas também nos deu a oportunidade de prestar uma bela homenagem a uma figura tão importante na vida do meu amigo."
                    </StyledParagraph>
                </TextColumn>

            </ImageAndTextContainer>
        </HomeContainer>
    );
}

export default About;

