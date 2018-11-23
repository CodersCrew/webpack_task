/**
 * Renderuje losową text-face na środku strony.
 * @param {string} faceColor - Kolor text-face.
 * @param {string} face - Tekst zawierający text-face.
 * 
*/
const renderFace = (faceColor, face) => {
    const faceDiv = document.getElementById('face');

    faceDiv.style.color = faceColor;
    faceDiv.innerText = face;
};

export default renderFace;
