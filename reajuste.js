const salarioAntigo = require("fs").readFileSync("stdin", "utf8");

validaPercentualAumento = (salarioAntigo) => {
  if (salarioAntigo > 0 && salarioAntigo <= 400) return 15;
  if (salarioAntigo > 400 && salarioAntigo <= 800) return 12;
  if (salarioAntigo > 800 && salarioAntigo <= 1200) return  10;
  if (salarioAntigo > 1200 && salarioAntigo <= 2000) return 7;
  if (salarioAntigo > 2000) return 4;
};

calculaReajuste = (salarioAntigo) => (+salarioAntigo) * (validaPercentualAumento(salarioAntigo) / 100);
calculaNovoSalario = (salarioAntigo) => (+salarioAntigo) + calculaReajuste(salarioAntigo);

formataSaida = () => {
  console.log(`Novo salario: ${calculaNovoSalario(salarioAntigo).toFixed(2)}`);
  console.log(`Reajuste ganho: ${calculaReajuste(salarioAntigo).toFixed(2)}`);
  console.log(`Em percentual: ${validaPercentualAumento(salarioAntigo)} %`);
};

formataSaida();
