/**
 * 
 * @param {string} url Prendre le lien l'api 
 * @param {object} options prendre les options de l'api
 * @returns {string}
 */
export async function  JsonFetch(url,options={}){
    const headers={
        Accept:'application/json'
    }
    const r=await fetch(url,{...headers.options})   
    if(r.ok){
         
        return r.json()
    }else{
         throw new Error(`Erreur du server : ${r.status}`,{cause:r})
}
}