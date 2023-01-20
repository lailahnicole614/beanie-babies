export function renderBeanieBabies(beanieBaby) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    li.classList.add('card');

    h2.textContent = beanieBaby.name;
    p.textContent = beanieBaby.sign;

    li.append;
    h2, p;

    return li;
}

export function renderSignOption(sign) {
    const option = document.createElement('sign');
    option.value = sign.name;
    option.textContent = sign.name;
    return option;
}
