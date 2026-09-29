const fetchData = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Datos recibidos");
        }, 1500);
    });
}
fetchData();