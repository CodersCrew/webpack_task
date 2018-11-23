import randomColor from 'random-color';
import randomTextFaces from 'random-text-faces';
import renderFace from './renderFace';
import './styles.css';

const color = randomColor().hexString();
const face = randomTextFaces.get();

renderFace(color, face);