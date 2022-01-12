import React, { useEffect, useState } from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import * as S from './styleQuadro';

const Quadro = ({}) => {
  const [selected, setSelected] = useState<string>('quadro | lista | card');
  const [selectedItemQuadro, setSelectedItemQuadro] = useState('1 | 2 | 3');
  const [selectedItemLista, setSelectedItemLista] = useState('1 | 2 | 3');
  const [selectedItemCard, setSelectedItemCard] = useState('1 | 2 | 3');

  const lista = [
    {
      nome: 'Equipe Super',
      selected: false,
    },
    {
      nome: 'Time Maximo',
      selected: false,
    },
    {
      nome: 'Mega Grupo',
      selected: false,
    },
  ];
  useEffect(() => {
    setSelected('quadro');
  }, []);
  return (
    <S.Container>
      <Header />
      <S.ContainerPage>
        <S.ContainerQuadros>
          <S.ContainerQuadro>
            <S.Title>Seus Quadros</S.Title>
            <S.Quadro
              style={selected == 'quadro' ? { background: '#007aff' } : {}}
              onClick={() => setSelected('quadro')}
            >
              {lista.map((value, index) => (
                <S.rectangle
                  style={
                    selectedItemQuadro == index.toString()
                      ? { background: '#fdb400' }
                      : {}
                  }
                  onClick={() => setSelectedItemQuadro(index.toString())}
                  key={index}
                >
                  {value.nome}
                </S.rectangle>
              ))}
            </S.Quadro>
          </S.ContainerQuadro>
          <S.ContainerQuadro>
            <S.Title>Suas Listas</S.Title>
            <S.Quadro
              style={selected == 'quadro' ? { background: '#007aff' } : {}}
              onClick={() => setSelected('quadro')}
            >
              {lista.map((value, index) => (
                <S.rectangle
                  style={
                    selectedItemLista == index.toString()
                      ? { background: '#fdb400' }
                      : {}
                  }
                  onClick={() => setSelectedItemLista(index.toString())}
                  key={index}
                >
                  {value.nome}
                </S.rectangle>
              ))}
            </S.Quadro>
          </S.ContainerQuadro>
          <S.ContainerQuadro>
            <S.Title>Seus Cards</S.Title>
            <S.Quadro
              style={selected == 'quadro' ? { background: '#007aff' } : {}}
              onClick={() => setSelected('quadro')}
            >
              {lista.map((value, index) => (
                <S.rectangle
                  style={
                    selectedItemCard == index.toString()
                      ? { background: '#fdb400' }
                      : {}
                  }
                  onClick={() => setSelectedItemCard(index.toString())}
                  key={index}
                >
                  {value.nome}
                </S.rectangle>
              ))}
            </S.Quadro>
          </S.ContainerQuadro>
        </S.ContainerQuadros>
      </S.ContainerPage>
      <Footer />
    </S.Container>
  );
};

export default Quadro;
