import React from 'react';
import TypingText from '../Message';
import { Body, Container, Footer, ModalBackground, TitleCloseBtn } from './styles';

const ReasultModal = ({ visible, setVisible, output }) => {
    return (
        <ModalBackground>
            <Container>
                <TitleCloseBtn>
                    <button
                        onClick={() => {
                            setVisible(false);
                        }}
                    >
                        X
                    </button>
                </TitleCloseBtn>

                <Body>

                    <TypingText
                        message={`Diga ao Zé Inácio que o melhor caminho é passando pelas capitais de ${output.path.join(', ')} nessa ordem. Esta viagem terá aproximadamente ${output.distance} quilômetros.`}
                        shouldDelete={false}
                    />

                </Body>
                <Footer>
                    <button
                        onClick={() => {
                            setVisible(false);
                        }}
                        id="cancelBtn"
                    >
                        Fechar
                    </button>
                </Footer>
            </Container>
        </ModalBackground>
    );
}
export default ReasultModal;