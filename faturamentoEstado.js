const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const total = Object.values(faturamentoPorEstado).reduce((soma, valor) => soma + valor, 0);

console.log(`Faturamento total: R$ ${total.toFixed(2)}\n`);

for (const estado in faturamentoPorEstado ) {
    const valor = faturamentoPorEstado[estado];
    const percentual = ( valor / total) * 100;
    console.log(`${estado}: R$ ${valor.toFixed(2)} - ${percentual.toFixed(2)}%`)
}