export const uploadImg = async (file)=>{    

    try{

        const formData = new FormData();
        formData.append('upload_preset', import.meta.env.VITE_CLOUD_PRESET);
        formData.append('file', file);

        const res = await fetch(import.meta.env.VITE_CLOUD_URL, {
            method: 'POST',
            body: formData
        });

        const data = await res.json();

        if(res.ok){            
            return data;
        }
        else{
            throw data;
        }

    }
    catch(e){
        //console.log(e);
        throw 'Error: '+e;
    }

}