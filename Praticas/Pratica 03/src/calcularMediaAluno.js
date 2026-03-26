function Calculo (A1,A2,A3) {

    if (A1 === undefined || A2 === undefined) {throw new Error ("Notas A1 ou A2 não informadas");}

    if (A1 < 0 || A2 < 0) {throw new Error ("Notas a1 ou a2 não podem ser negativas");}

    if (A3 === undefined) {return (A1 * 0.4 + A2 * 0.6);}

    if (A3 < 0) {throw new Error ("Nota a3 não pode ser negativa");}

    const mediaA1A2 = A1 * 0.4 + A2 * 0.6;
    const mediaA1A3 = A1 * 0.4 + A3 * 0.6;
    const mediaA2A3 = A2 * 0.4 + A3 * 0.6;

    return Math.max(mediaA1A2, mediaA1A3, mediaA2A3);
}

module.exports = { Calculo, };