let count = 0;

export const jokeRender = ( element, joke ) => {
    count++;
    const li = document.createElement('li');
    li.innerHTML = `<strong>${count}.</strong> ${joke.value}`;

    li.classList.add('list-group-item');

    element.appendChild(li);

}
