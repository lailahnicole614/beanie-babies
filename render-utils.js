export function renderBeanieBabies(beanieBaby) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const img = document.createElement('img');

    p.textContent = `Your Beanie Baby is named ${beanieBaby.title}`;
    img.src = `${beanieBaby.image}`;

    div.append(p, img);

    return div;
}
console;
