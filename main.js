




const abrirModal = document.querySelector('.crear-cliente')
const modal = document.querySelector('.dialog-form')
const userInput = document.querySelector("#userInput");
const tabla=document.querySelector('#tabla');


userInput.addEventListener('submit', (event)=>{
    event.preventDefault()

    
    const nombre = document.querySelector('#nombre').value
    const nit = document.querySelector('#nit').value
    const ciudad = document.querySelector('#ciudad').value
    // const contacto = document.querySelector('#contacto').value
    
    const apellido = document.querySelector('#apellido').value
    const direccion = document.querySelector('#direccion').value
    const telefono= document.querySelector('#telefono').value
    // const cupo = document.querySelector('#cupo').value
    const disponible= document.querySelector('#disponible').value

    tabla.innerHTML+=`
    
        <tr ">
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${nit}</td>
            <td>${direccion}</td>
            <td>${ciudad}</td>
            <td>${telefono}</td>
            <td>${disponible}</td>
            <td>Activo</td>
            <td>
            <span class="material-symbols-outlined">
            edit
            </span>
            <span class="material-symbols-outlined" id="eliminar" >
            delete
            </span>
            </td>
        </tr>`
        modal.close();
        userInput.reset()

})

abrirModal.addEventListener('click',()=>{
    console.log('jajajaja')
    modal.showModal()
})


const cerraModal = document.querySelector('.atras')

cerraModal.addEventListener('click',()=>{
    modal.close()
})














