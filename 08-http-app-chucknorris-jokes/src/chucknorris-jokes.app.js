import { jokeRender } from "./renders/joke.render";
import { pageRender } from "./renders/page.render";
import { loadJoke } from "./uses-cases/load-joke";

export const ChucknorrisJokesApp = async (element) => {
    pageRender(element);

    //referencias HTML
    const $ulList     = document.querySelector('ul');
    const $buttonMore = document.querySelector('button');

    //listener
    $buttonMore.addEventListener('click', async ()=>{
        const joke = await loadJoke();
        jokeRender($ulList, joke);//el render podria hacer la peticion
    });

    const joke = await loadJoke();
    jokeRender($ulList, joke);
}
