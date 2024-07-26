import React from 'react';

export const Alumno = () => {
    interface Alumno {
        name: string;
        edad: number;
        calificacion: number;
    }
    
    const alumnos: Alumno[] = [
        { name: 'Viviana', edad: 19, calificacion: 10 },
        { name: 'Wendy', edad: 20, calificacion: 8 },
        { name: 'Gerson', edad: 18, calificacion: 9 }
    ];
    
    // Función para calcular el promedio de calificaciones
    function promedioCalificaciones(alumnos: Alumno[]): number {
        const suma = alumnos.reduce((acumulador, alumno) => acumulador + alumno.calificacion, 0);
        return suma / alumnos.length;
    }

    // Calcular el promedio
    const promedio = promedioCalificaciones(alumnos);

    return (
        <div>
            <h3>Alumno</h3>
            <h4>Detalles de los Alumnos</h4>
            <ul>
                {alumnos.map((alumno, index) => (
                    <li key={index}>
                        <p>Nombre: {alumno.name}</p>
                        <p>Edad: {alumno.edad}</p>
                        <p>Calificación: {alumno.calificacion}</p>
                        <p>El promedio de calificaciones es: {promedio}</p>
                    </li>
                ))}
            </ul>
        </div>
        
    );
}
