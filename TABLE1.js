    let btn =document.querySelector('#processFiles')
    
  
    btn.addEventListener('click', () => {
      const tabla1 = document.getElementById('TABLA1');
      while(tabla1.rows.length>1){
        tabla1.deleteRow(1);
      }

      const input = document.getElementById('directoryInput');
      const files = input.files;
      if (!files.length) {
        alert('Espere el total de sus archivos '+'\n'+' O selecciona un directorio valido.');
        return;
      }

    
      // Limpiar resultados previos
      var conse =0;
      Array.from(files).forEach(file => {
        if (file.type === 'text/xml') {
          const reader = new FileReader();
          
          reader.onload = () => {
            conse= conse+1
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(reader.result, 'application/xml');
            const uuid =  xmlDoc.querySelector('TimbreFiscalDigital').getAttribute('UUID')
            const fecha=xmlDoc.querySelector('Comprobante').getAttribute('Fecha')
            const folio=xmlDoc.querySelector('Comprobante').getAttribute('Folio')
            const subtotal=xmlDoc.querySelector('Comprobante').getAttribute('SubTotal')
            const total=xmlDoc.querySelector('Comprobante').getAttribute('Total')
            const emisor = xmlDoc.querySelector('Emisor').getAttribute('Nombre');
            const conceptoD = xmlDoc.querySelector('Concepto').getAttribute('Descripcion') +' '+emisor;
           

            var imp='0.00';
            try{           
            imp = xmlDoc.querySelector('ImpuestosLocales').getAttribute('TotaldeTraslados');
            }catch{}

            const iva=(parseFloat(total)-parseFloat(subtotal)-parseFloat(imp)).toFixed(4)
            const subsub=(parseFloat(subtotal)+parseFloat(imp)).toFixed(4)

            let datos={ uuid, total,
            subtotal,imp,emisor,
            conceptoD,
            folio,
            fecha,
            subsub,  
            iva
            }
             //SI HAY DOCTO

            //SI HAY DOCTO

            const tbody = document.querySelector("#TABLA1 tbody");

                // Función para generar filas dinámicamente
            const fila = document.createElement("tr");

                 // Crear celdas para cada propiedad
            Object.values(datos).forEach(valor => {
            const celda = document.createElement("td");
            celda.textContent = valor;
            fila.appendChild(celda);
            });
            // Agregar la fila al cuerpo de la tabla
            tbody.appendChild(fila);

            // Aquí puedes analizar el contenido del archivo XML
            const rootElement = xmlDoc.documentElement.nodeName;
            
          };

          reader.onerror = () => {
           
          };

          reader.readAsText(file);
        } else {
          
        }
      });
    });