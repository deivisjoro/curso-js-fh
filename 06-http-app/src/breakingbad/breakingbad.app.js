 
 /**
  * @returns {Promise<Object>} data of quote
  */
 const fecthQuote = async () => {
    const url = `https://api.breakingbadquotes.xyz/v1/quotes`;
    /**
     * el method por defecto en el fetch es el get, si se requiere utilizar otro u
     * se requieren enviar parametros se utiliza un segundo argumento en fetch
     * fetch(url, {})
     */
    const response = await fetch(url);
    // console.log({response})
    const data = await response.json();
    // console.log({data})
    console.log(data[0])
    return data[0];
    //el error lo capturamos en el nivel superior para interactuar con la ui    
 }

/**
 * 
 * @param {HTMLHeadElement} title 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async (title, element) => {

    title.innerHTML = 'Breakingbad App';
    element.innerHTML = 'Loading...';    
    
    const $quoteLabel      = document.createElement('blockquote');
    const $authorLabel     = document.createElement('h3');
    const $nextQuoteButton = document.createElement('button');
    $nextQuoteButton.textContent = 'Next Quote';
    
    const renderQuote = ({quote, author})=> {
        $quoteLabel.textContent      = quote;
        $authorLabel.textContent     = author;
        element.replaceChildren($quoteLabel, $authorLabel, $nextQuoteButton);
    }

    const quote = await fecthQuote();
    renderQuote(quote);

    $nextQuoteButton.addEventListener('click', async ()=>{
        element.innerHTML = 'Loading...';
        const quote = await fecthQuote();
        renderQuote(quote);
    });

}
