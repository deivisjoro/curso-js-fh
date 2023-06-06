import { Joke } from "../models/joke.model";

const url = `https://api.chucknorris.io/jokes/random`;

export const loadJoke = async()=>{

    try{

        const res  = await fetch(url);
        const {id, value, icon_url} = await res.json();

        const joke = new Joke(id, value, icon_url);

        return joke;

    }
    catch(error){
        console.log(error)
        throw 'Error al realizar la peticion';
    }

}
