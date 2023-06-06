import { pageRender } from "./renders/page.render"
import { previewImg, uploadImg } from "./uses-cases";

export const UploadApp = ( element ) =>{

    //Render inicial, cargar cascaron
    pageRender(element);

    //Referencias DOM
    const $inputFile    = document.querySelector('#archivo');
    const $formUpload   = document.querySelector('form');
    const $imgPreview1  = document.querySelector('#preview1 img');
    const $imgPreview2  = document.querySelector('#preview2 img');
    const $containerPreview1  = document.querySelector('#preview1');
    const $containerPreview2  = document.querySelector('#preview2');
    const $labelError  = document.querySelector('.text-error');
    const $imgLoading  = document.querySelector('#img-loading');

    //Llamar funciones inicializadoras y renders necesarios

    //Listeners -> Renderizadores
    $inputFile.addEventListener('change', (e)=>{
        $containerPreview1.classList.remove('hide');
        $containerPreview2.classList.remove('hide');
        previewImg(e.target, $imgPreview1);
        $labelError.classList.add('hide');
    });

    $formUpload.addEventListener('submit', async (e)=>{
        e.preventDefault();
        if(!$inputFile.files || !$inputFile.files[0]){
            $imgLoading.classList.add('hide');
            $labelError.classList.remove('hide');
            $labelError.innerHTML = 'Debe seleccionar un archivo';
            return;
        }

        try{
            $imgLoading.classList.remove('hide');
            $labelError.classList.add('hide');
            const data = await uploadImg($inputFile.files[0]);
            $imgLoading.classList.add('hide');
            $imgPreview2.src = data.secure_url;
            $imgPreview2.classList.remove('hide');

        }
        catch(e){
            $imgLoading.classList.add('hide');
            $labelError.classList.remove('hide');
            $labelError.innerHTML = e;
        }
    });
}
