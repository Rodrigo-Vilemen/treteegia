import React from 'react';

export const conversaoMonetaria = (valor: number) => {
  if (valor < 999999) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  } else {
    return (
      (valor / 1000000).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }) + 'M'
    );
  }
};

export const conversaoNumerosMilhar = (valor: number) => {
  if (valor < 999999) {
    return valor.toFixed(2);
  } else {
    return (valor / 1000000).toFixed(2) + 'M';
  }
};
export const conversaoNumeros = (valor: number) => {
  if (valor < 999999) {
    return valor;
  } else {
    return (valor / 1000000).toFixed(2) + 'M';
  }
};
