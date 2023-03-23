export function index2color(index) {
    const frequency=5/1000;
    const r = Math.floor(Math.sin(frequency*index + 0) * (127) + 128);
    const g = Math.floor(Math.sin(frequency*index + 2) * (127) + 128);
    const b = Math.floor(Math.sin(frequency*index + 4) * (127) + 128);
    return `rgba(${r}, ${g}, ${b}, 1)`;
}