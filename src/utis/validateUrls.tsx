export default async function ValideURL(url){
    const urlsProperties = ["https://",'http://',"www.",".com",".net",".org",".gov"]
    let valited = false;
    urlsProperties.map((properties)=>
        if(url.indexOf(properties)!=-1){
            valited = true;
        })
    if (valited){  
        try {
            let url = new URL(url)
            return true
          } catch(err) {
              return false
          }
    }
    return false

}