
const DevolverNuevoArreglo = () => {
  const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  
  const nuevoArreglo = arreglo.map(numero => numero / 5);

  return (
      <div>
          <h3>Nuevo Arreglo con Valores Divididos por 5</h3>
          <p>Arreglo original: {arreglo.join(", ")}</p>
          <p>Nuevo arreglo: {nuevoArreglo.join(", ")}</p>
      </div>
  );
};

export default DevolverNuevoArreglo;
