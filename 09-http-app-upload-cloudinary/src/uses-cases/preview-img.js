export const previewImg = (input, image)=>{
    if(input.files && input.files[0]){
        const reader = new FileReader();
        reader.readAsDataURL(input.files[0]);
        reader.onload = function(e){
            image.setAttribute("src", e.target.result);
        }
    }
};