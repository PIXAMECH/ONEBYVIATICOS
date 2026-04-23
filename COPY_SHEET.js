let btn2 = document.querySelector('#btnCOPY')
btn2.addEventListener('click',()=>{

    
    let textoTabla = '';
    const t1 = document.getElementById('TABLA1')
    let tabla
    tabla= document.getElementById('TABLA1')
    

    
    for (let i = 0; i < tabla.rows.length; i++) {
      for (let j = 5; j < tabla.rows[i].cells.length; j++) { // -1 para no incluir los botones
        textoTabla += tabla.rows[i].cells[j].textContent + '\t';
      }
      textoTabla += '\n';
    }

    navigator.clipboard.writeText(textoTabla.trim())
      .then(() => {
        alert('¡Tabla copiada al portapapeles!');
      })
      .catch(err => {
        console.error('Error al copiar:', err);
        alert('Error al copiar la tabla.');
      });  
    


});

