// API
const API_ENDPOINT = 'https://yesno.wtf/api';


fetch(API_ENDPOINT)

    .then((data)  => data.json())
    .then((data)=> {
        console.log(data);
    })
    .catch((error) => console.error("¡Error!", error));

    const respuesta = document.querySelector (".id-answer");

    const boton = document.querySelector("#button");
    let post= null;


    boton.addEventListener("click", ()=> {
        fetch(API_ENDPOINT)
        .then ((response)=> response.json())
        .then ((response)=>{
            mostarDatos(post);
        })
        .catch((error)=> console.error("Error, no se puede acceder a API", error));
    })

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
