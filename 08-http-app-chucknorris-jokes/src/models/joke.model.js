
export class Joke{

    constructor(id, value, icon_url){
        this.id       = id;
        this.value    = value;
        this.icon_url = icon_url; 
    }

    get getJoke(){
        return {
            id: this.id,
            value: this.value,
            icon_url: this.icon_url
        }
    }

}
