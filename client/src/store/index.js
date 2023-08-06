import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#48d6ef',
    isLogoTexture: false,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
})

export default state;