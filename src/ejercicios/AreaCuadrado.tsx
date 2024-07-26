

export const AreaCuadrado = () => {
    const calcularAreaCuadrado = (lado: number): number => {
        return lado * lado;
    }
  return (
    <div>
        <h3>Area del Cuadrado</h3>
       <span>El área del cuadrado es: {calcularAreaCuadrado(4)}</span>
    </div>
  )
}

