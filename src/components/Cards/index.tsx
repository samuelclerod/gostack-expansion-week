import React, { ReactNode, useCallback, useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiHome } from 'react-icons/fi';
import { useTransition } from 'react-spring';
import Card from './Card';

import { Container } from './styles';

interface Page {
    title: string;
    background: string;
    color: string;
    content: ReactNode;
}

const pages: Page[] = [
    {
        title: 'O que é Empatia?',
        background: '#D7263D',
        color: 'white',
        content: (
            <>
                <p>
                    A Empatia é a capacidade de se identificar com outra pessoa a fim de compreender o que ela pensa e sente. Ter Empatia é ter a sensibilidade de ouvir alguém na essência e entender os seus desconfortos e suas alegrias, ver suas vitórias, conquistas e se alegrar, ver suas tristezas e se convalescer
                </p>
                <p>
                    A empatia leva as pessoas a ajudarem umas às outras. Está intimamente ligada ao altruísmo - amor e interesse pelo próximo - e à capacidade de ajudar
                </p>
            </>
        )
    },
    {
        title: 'O poder da Empatia',
        background: '#C5D86D',
        color: 'white',
        content: (
            <iframe
                title="Youtube video sobre empatia"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Q6rAV_7J5T0?feature=oembed"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        )
    },
    {
        title: 'Empatia x Problemas',
        background: '#F46036',
        color: 'white',
        content: (<>
            <p>A capacidade de se colocar no lugar do outro, que se desenvolve através da empatia, ajuda a compreender melhor o comportamento alheio em determinadas circunstâncias e a forma como outra pessoa toma as decisões.</p>
            <p>Nas relações pessoais a empatia pode ser fundamental para a compreensão de dificuldades das pessoas com quem se convive, ajudando a diminuir e evitar conflitos. O mesmo pode ocorrer no ambiente de trabalho, já que a empatia pode ajudar que um colega compreenda as dificuldades enfrentadas por outro</p>
            <p>Com Empatia é possível observar o lugar da fala para saber reagir a um ambiente diverso.</p>
        </>
        )
    },
    {
        title: 'Empatia x Trabalho',
        background: '#2E294E',
        color: 'white',
        content: (<>
            <p>No mundo corporativo, empatia significa aceitar a diversidade, estar sempre aberto a sugestões e ter disposição para tentar o novo, compreender os erros e, a partir deles, aprender novas liçõe</p>
            <p>Estudos indicam que os valores associados à empatia, autoconhecimento, motivação, autogestão e relacionamento social são responsáveis por quase 60% da performance de um profissional hoje em dia.</p>
            <p>Entender profundamente os desejos e demandas dos consumidores é fundamental para construir soluções realmente práticas e atraentes.</p>
        </>
        )
    },
    {
        title: 'Empatia desenvolve outras softskills',
        background: '#1B998B',
        color: 'white',
        content: (<>
            <ul>
                <li>
                    <strong>Autoconhecimento </strong>:
                    Para adentrar o terreno empático, é preciso antes aceitar as próprias vulnerabilidades e admitir que ninguém que encontrarmos, por melhor que seja, será perfeito;
                </li>
                <li>
                    <strong>Comunicação</strong>:
                    Com origem no termo em grego empatheia, que significava "paixão", a empatia pressupõe uma comunicação afetiva com outra pessoa e é um dos fundamentos da identificação e compreensão psicológica de outros indivíduos;
                </li>
                <li>
                    <strong>Resiliência e Adaptabilidade</strong>:
                    A partir da Empatia é possível transformar a forma de encarar o mundo, ligar com problemas, com isso adaptar-se a mudanças e superar obstáculos, ou resistir a situações de pressão e adiversas.
                </li>
            </ul>
        </>
        )
    },
    {
        title: 'Como desenvolver Empatia?',
        background: '#000',
        color: 'white',
        content: (<>
            <ol>
                <li>
                    Esteja disposto a ouvir na essência o que aflige a outra pessoa. Quando ouvimos o outro, damos abertura para que ele nos mostre o seu mundo e sua realidade, fazendo deste um lugar seguro para o outro.
                </li>
                <li>
                    Tente deixar de lado os preconceitos e julgamentos. Ouvir o que o outro tem a dizer, sem uma carga prévia, nos faz entender melhor o que ele vive e porque age como age.
                </li>
                <li>
                    Não faça comparações com outros casos. Cada pessoa possui uma carga emocional própria, quando comparamos diminuímos a situação do outro.
                </li>
                <li>
                    Passe a conversar com pessoas diferentes. Ao conversarmos com diversas pessoas vemos diversos pontos de vista e variadas vivências, expandindo nossos horizontes.
                </li>
                <li>
                    Estabeleça um laço de confiança com as pessoas, seja sincero e gentil. A gentileza é capaz de grandes maravilhas na vida dos seres humanos.
                </li>
            </ol>
        </>
        )
    }

]
const Cards: React.FC = () => {
    const [index, set] = useState(0);

    const rightClick = useCallback(() => set(state => (state + 1) % pages.length), [])
    const leftClick = useCallback(() => set(0), [])

    const transitions = useTransition(index, p => p, {
        from: { opacity: 1, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    })
    return (
        <Container>
            {transitions.map(({ item, props, key }) => {
                const page = pages[item]
                const background = page.background;
                const color = page.color;
                return <Card
                    key={key}
                    title={page.title}
                    style={{ ...props, background, color }}
                >
                    {page.content}
                </Card>

            }
            )}
            <button onClick={rightClick} id="rightButton"><FiArrowRight /></button>
            <button onClick={leftClick} id="leftButton"><FiHome /></button>
        </Container >
    );
}

export default Cards;