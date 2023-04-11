/// no me dio tiempo de acomodarlo en clase ni mostrar los resultados

class Cliente {
  constructor(
    tipoNomina,
    fechaIngreso,
    genero,
    montoMinimoCredito,
    maximoCredito,
    lineaOptima
  ) {
    this.tipoNomina = tipoNomina;
    this.fechaIngreso = fechaIngreso;
    this.genero = genero;
    this.montoMinimoCredito = montoMinimoCredito;
    this.maximoCredito = maximoCredito;
    this.lineaOptima = lineaOptima;
  }

  // Getter
  get tipoNomina() {
    return this.tipoNomina();
  }
  get fechaIngreso() {
    return this.fechaIngreso();
  }
  get genero() {
    return this.genero();
  }
  get montoMinimoCredito() {
    return this.montoMinimoCredito();
  }
  get armaximoCreditoea() {
    return this.maximoCredito();
  }
  get lineaOptima() {
    return this.lineaOptima();
  }

  // Método
  calculoMotor(tipoNomina, fechaIngreso, genero) {
    return this.alto * this.ancho;
  }
}

///La variable para trabajar con los elementos
const slNomina = document.querySelector("#nomina");
const fechaHTML = document.querySelector("#fecha");
const slGenero = document.querySelector("#genero");

const montoMinimo = document.querySelector("#montoMinimo");
const montoMaximo = document.querySelector("#montoMaximo");
///
const nomina = [{ valor: "A" }, { valor: "B" }, { valor: "C" }, { valor: "D" }];
const genero = [{ genero: "M" }, { genero: "F" }];
console.log(slNomina);
const montosMinimosM = {
  A: [100, 400, 900, 100, 600],
  B: [1000, 600, 1000, 1000, 1000],
  C: [400, 200, 200, 1000, 900],
  D: [600, 600, 600, 600],
};

const montosMinimosF = {
  A: [800, 800, 800, 600, 200],
  B: [800, 700, 100, 600, 700],
  C: [200, 900, 700, 800, 100],
  D: [500, 1000, 600, 400, 700],
};

//Montos Maximos
const montosMaximosM = {
  A: [4900, 4700, 4600, 4600, 4500],
  B: [4700, 4400, 5000, 4400, 4900],
  C: [5000, 4700, 5000, 4200, 4200],
  D: [4400, 4700, 4300, 4900, 4300],
};

const montosMaximosF = {
  A: [4000, 4200, 4100, 4200, 4500],
  B: [4700, 4200, 4500, 4300, 4300],
  C: [4600, 4900, 4600, 4700, 4000],
  D: [5000, 4900, 4700, 5000, 4300],
};

document.addEventListener("DOMContentLoaded", () => {
  nomina.forEach((element) => {
    const opcionesNomina = document.createElement("option");
    opcionesNomina.value = element.valor;
    opcionesNomina.textContent = element.valor;
    slNomina.appendChild(opcionesNomina);
  });
  calcularValoresMontos(slGenero.value, fechaHTML.value, slGenero.value);
});

slNomina.addEventListener("change", () => {
  slGenero.disabled = false;
  calcularValoresMontos();
});

fechaHTML.addEventListener("change", () => {
  calcularValoresMontos();
});

slGenero.addEventListener("change", () => {
  slGenero.disabled = false;
  calcularValoresMontos();
});

const calcularValoresMontos = () => {
  if (slGenero.value == null) {
    return;
  }
  if (slGenero.value != null && slGenero.value == "M") {
    calcularValoresMinyMa(slNomina.value, fechaHTML.value, slGenero.value);
  } else {
    calcularValoresMinyMa(slNomina.value, fechaHTML.value, slGenero.value);
  }
};

const calcularValoresMinyMa = (tipoNomina, fecha, genero) => {
  const fechaSeleccionada = new Date(fecha);
  const fechaActual = new Date();
  const aniosDifficional =
    fechaActual.getFullYear() - fechaSeleccionada.getFullYear();
  if (fecha == null || genero == null) {
    return;
  }
  console.log(fechaActual.getFullYear());
  console.log(fechaActual);
  console.log(aniosDifficional);
  let valorMontoMinimo = 0;
  let valorMaximo = 0;
  if (genero == "M") {
    switch (tipoNomina) {
      case "A":
        if (aniosDifficional >= 0 && aniosDifficional <= 26) {
          valorMontoMinimo = montosMinimosM.A[0];
          valorMaximo = montosMaximosM.A[0];
        } else if (aniosDifficional == 27) {
          valorMontoMinimo = montosMinimosM.A[1];
          valorMaximo = montosMaximosM.A[1];
        } else if (aniosDifficional == 28) {
          valorMontoMinimo = montosMinimosM.A[2];
          valorMaximo = montosMaximosM.A[2];
        } else if (aniosDifficional == 29) {
          valorMontoMinimo = montosMinimosM.A[3];
          valorMaximo = montosMaximosM.A[3];
        } else if (aniosDifficional >= 30) {
          valorMontoMinimo = montosMinimosM.A[4];
          valorMaximo = montosMaximosM.A[4];
        }
        break;
      case "B":
        if (aniosDifficional >= 0 && aniosDifficional <= 26) {
        valorMontoMinimo = montosMinimosM.B[0];
          valorMaximo = montosMaximosM.B[0];
        } else if (aniosDifficional == 27) {
          valorMontoMinimo = montosMinimosM.B[1];
          valorMaximo = montosMaximosM.B[1];
        } else if (aniosDifficional == 28) {
          valorMontoMinimo = montosMinimosM.B[2];
          valorMaximo = montosMaximosM.B[2];
        } else if (aniosDifficional == 29) {
          valorMontoMinimo = montosMinimosM.B[3];
          valorMaximo = montosMaximosM.B[3];
        } else if (aniosDifficional >= 30) {
          valorMontoMinimo = montosMinimosM.B[4];
          valorMaximo = montosMaximosM.B[4];
        }
        break;
      case "C":
        if (aniosDifficional >= 0 && aniosDifficional <= 26) {
            valorMontoMinimo = montosMinimosM.C[0];
            valorMaximo = montosMaximosM.C[0];
          } else if (aniosDifficional == 27) {
            valorMontoMinimo = montosMinimosM.C[1];
            valorMaximo = montosMaximosM.C[1];
          } else if (aniosDifficional == 28) {
            valorMontoMinimo = montosMinimosM.C[2];
            valorMaximo = montosMaximosM.B[2];
          } else if (aniosDifficional == 29) {
            valorMontoMinimo = montosMinimosM.C[3];
            valorMaximo = montosMaximosM.C[3];
          } else if (aniosDifficional >= 30) {
            valorMontoMinimo = montosMinimosM.C[4];
            valorMaximo = montosMaximosM.C[4];
          }
        break;
      case "D":
        if (aniosDifficional >= 0 && aniosDifficional <= 26) {
            valorMontoMinimo = montosMinimosM.D[0];
            valorMaximo = montosMaximosM.D[0];
          } else if (aniosDifficional == 27) {
            valorMontoMinimo = montosMinimosM.D[1];
            valorMaximo = montosMaximosM.D[1];
          } else if (aniosDifficional == 28) {
            valorMontoMinimo = montosMinimosM.D[2];
            valorMaximo = montosMaximosM.D[2];
          } else if (aniosDifficional == 29) {
            valorMontoMinimo = montosMinimosM.D[3];
            valorMaximo = montosMaximosM.B[3];
          } else if (aniosDifficional >= 30) {
            valorMontoMinimo = montosMinimosM.D[4];
            valorMaximo = montosMaximosM.D[4];
          }
        break;
      default:
        break;
    }
    montoMinimo.value = valorMontoMinimo;
    montoMaximo.value = valorMaximo;
  } else {
    switch (tipoNomina) {
        case "A":
          if (aniosDifficional >= 0 && aniosDifficional <= 26) {
            valorMontoMinimo = montosMinimosF.A[0];
            valorMaximo = montosMaximosF.A[0];
          } else if (aniosDifficional == 27) {
            valorMontoMinimo = montosMinimosF.A[1];
            valorMaximo = montosMaximosF.A[1];
          } else if (aniosDifficional == 28) {
            valorMontoMinimo = montosMinimosF.A[2];
            valorMaximo = montosMaximosF.A[2];
          } else if (aniosDifficional == 29) {
            valorMontoMinimo = montosMinimosF.A[3];
            valorMaximo = montosMaximosF.A[3];
          } else if (aniosDifficional >= 30) {
            valorMontoMinimo = montosMinimosF.A[4];
            valorMaximo = montosMaximosF.A[4];
          }
          break;
        case "B":
          if (aniosDifficional >= 0 && aniosDifficional <= 26) {
            valorMontoMinimo = montosMinimosF.B[0];
            valorMaximo = montosMaximosM.B[0];
          } else if (aniosDifficional == 27) {
            valorMontoMinimo = montosMinimosF.B[1];
            valorMaximo = montosMaximosF.B[1];
          } else if (aniosDifficional == 28) {
            valorMontoMinimo = montosMinimosF.B[2];
            valorMaximo = montosMaximosF.B[2];
          } else if (aniosDifficional == 29) {
            valorMontoMinimo = montosMinimosF.B[3];
            valorMaximo = montosMaximosF.B[3];
          } else if (aniosDifficional >= 30) {
            valorMontoMinimo = montosMinimosF.B[4];
            valorMaximo = montosMaximosF.B[4];
          }
          break;
        case "C":
          if (aniosDifficional >= 0 && aniosDifficional <= 26) {
              valorMontoMinimo = montosMinimosF.C[0];
              valorMaximo = montosMaximosF.C[0];
            } else if (aniosDifficional == 27) {
              valorMontoMinimo = montosMinimosF.C[1];
              valorMaximo = montosMaximosF.C[1];
            } else if (aniosDifficional == 28) {
              valorMontoMinimo = montosMinimosF.C[2];
              valorMaximo = montosMaximosF.B[2];
            } else if (aniosDifficional == 29) {
              valorMontoMinimo = montosMinimosF.C[3];
              valorMaximo = montosMaximosF.C[3];
            } else if (aniosDifficional >= 30) {
              valorMontoMinimo = montosMinimosF.C[4];
              valorMaximo = montosMaximosF.C[4];
            }
          break;
        case "D":
          if (aniosDifficional >= 0 && aniosDifficional <= 26) {
              valorMontoMinimo = montosMinimosF.D[0];
              valorMaximo = montosMaximosF.D[0];
            } else if (aniosDifficional == 27) {
              valorMontoMinimo = montosMinimosF.D[1];
              valorMaximo = montosMaximosF.D[1];
            } else if (aniosDifficional == 28) {
              valorMontoMinimo = montosMinimosF.D[2];
              valorMaximo = montosMaximosF.D[2];
            } else if (aniosDifficional == 29) {
              valorMontoMinimo = montosMinimosF.D[3];
              valorMaximo = montosMaximosF.B[3];
            } else if (aniosDifficional >= 30) {
              valorMontoMinimo = montosMinimosF.D[4];
              valorMaximo = montosMaximosF.D[4];
            }
          break;
        default:
          break;
      }
      montoMinimo.value = valorMontoMinimo;
      montoMaximo.value = valorMaximo;
  }
  alert( "Linea de credito Optima  " + calcularTotal(valorMontoMinimo, valorMaximo))
};

function calcularTotal  (valorMontoMinimo, valorMaximo){
    let sumaMinimoYMax = valorMaximo - valorMontoMinimo
    let p1 = valorMontoMinimo + Math.sqrt(sumaMinimoYMax);
    let p2 = valorMontoMinimo +  0.0175 * sumaMinimoYMax
    return Math.max(p1, p2);
}