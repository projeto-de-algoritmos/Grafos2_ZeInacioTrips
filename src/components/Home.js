import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeContainer = styled.div`
  text-align: flex-start;
`;

const ImageAndTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
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
  max-width: 500px; /* Largura máxima ajustável */
  margin-left: 1rem;
  text-align: justify;
`;

const StyledHeading = styled.h2`
  color:  #00FFFF;
  font-family: 'Courier New', monospace;
  font-size: 16px;
`;

const StyledParagraph = styled.p`
  color: white;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`;

const HomePage = () => {
  const images = [ // Coloque aqui os caminhos para as suas imagens
  require('../assets/joseInacio1.jpeg'),
  require('../assets/joseInacio2.jpeg'),
  require('../assets/joseInacio3.jpeg'),
  require('../assets/joseInacio4.jpeg'),
  // ...
];
  return (
    <HomeContainer>
      <ImageAndTextContainer>
        <ImageColumn>
        <Carousel>
                    {images.map((image, index) => (
                        <div key={index}>
                            <CoverImage src={image} alt={`Cover Image ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>
          
        </ImageColumn>
        <TextColumn>
          <StyledHeading>Ajude José Inácio a encontrar o melhor caminho</StyledHeading>
          <StyledParagraph>
            <div>
            José Inácio é um dedicado funcionário da prestigiosa empresa de transporte, Mudanças Centro-Sul. Embora o nome sugira uma regionalização, a Centro-Sul tem uma abrangência nacional. 
            José, carinhosamente conhecido como Zé Inácio ou Zezinho, tem a oportunidade de viajar por todo o país, acumulando uma miríade de histórias fascinantes. 
            <br/>
            Dentre estas, as aventuras pelas rotas até Manaus são as minhas favoritas, especialmente devido aos desafios únicos que o trajeto apresenta.
            Outro aspecto que acho interessante é a relação que Zé Inácio desenvolve com seu caminhão.
            O da foto, por exemplo, é carinhosamente chamado de 'Melita'. O nome surgiu de um incidente singular quando o sistema de arrefecimento do caminhão falhou, fazendo a água do radiador ferver. Em uma demonstração de adaptabilidade, ele usou a água fervente para fazer café na cabine do caminhão. Como o café disponível na cabine era da marca Melita, esse nome passou a ser o apelido do veículo. Desde então, o caminhão passou a ser conhecido como 'Melita'.
            <br/>
            Zé Inácio é uma pessoa incrivelmente amigável, contudo, quando se trata de tecnologia e logística, ele tende a ter dificuldades. Para ajudá-lo nessa empreitada, ele propôs ao seu neto, um estudante de engenharia de software, que criasse um aplicativo destinado a facilitar o planejamento de suas viagens.
            <br/>
            O aplicativo, idealmente, apresentaria um mapa interativo, no qual, com apenas alguns cliques na origem e no destino, poderia sugerir a melhor rota entre os dois pontos. No entanto, uma particularidade da Centro-Sul é que a empresa possui garagens credenciadas apenas em capitais, o que, por vezes, complica um pouco a rotina de Zé Inácio. Isso significa que, sempre que passa por um estado, é obrigatório que ele visite a capital. Por exemplo, em uma viagem de Pernambuco para o Rio Grande do Norte, ele teria que passar por João Pessoa e Natal.
            <br/>
            Felizmente, o aplicativo já foi desenvolvido e você recebeu um convite exclusivo da Centro-Sul para se juntar a Zé Inácio em uma de suas viagens. Para utilizar o sistema, basta acessar a aba "Dijkstra" e clicar sobre o mapa para definir a origem e o destino. Aproveite a viagem e a agradável companhia de Zé Inácio.
          </div>
          </StyledParagraph>
        </TextColumn>
      </ImageAndTextContainer>
    </HomeContainer>
  );
}

export default HomePage;
