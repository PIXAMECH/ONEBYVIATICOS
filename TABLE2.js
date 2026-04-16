function FILLINGT2(xmlDoc,uuidElement,emisor) {
    
    HIJOS=xmlDoc.documentElement.getElementsByTagName('*')
    var htmlSTRING=''; Hrows=HIJOS.length; var cTRAS=0; var cDOCTOS=0;
    var TRAS_DOC=[];

 
    for (i =0;i <=Hrows-1;i++){
      htmlSTRING = HIJOS[i].outerHTML;
      if(htmlSTRING.startsWith('<pago20:DoctoRelacionado')){
        uuidR=HIJOS[i].getAttribute('IdDocumento')
        TRAS_DOC.push(['DOC',uuidR]);   cDOCTOS=cDOCTOS+1;     
        }
      if(htmlSTRING.startsWith('<pago20:TrasladoDR')&&(htmlSTRING.includes('TasaOCuotaDR="0.16'))){    //||htmlSTRING.includes('exento')
        base=HIJOS[i].getAttribute('BaseDR')
        TRAS_DOC.push(['BASE',base])
      }
      if(htmlSTRING.startsWith('<pago20:TrasladoDR')&&(htmlSTRING.includes('TasaOCuotaDR="0.03') )){
        base=HIJOS[i].getAttribute('BaseDR')
        TRAS_DOC.push(['03BASE',base])
      }
      if(htmlSTRING.startsWith('<pago20:TrasladoDR')&&(htmlSTRING.includes('TasaOCuotaDR="0.00') )){
        base=HIJOS[i].getAttribute('BaseDR')
        TRAS_DOC.push(['00BASE',base])
      }      
      if(htmlSTRING.startsWith('<pago20:TrasladoDR')&&(htmlSTRING.includes('TasaOCuotaDR="0.16') )){   //||htmlSTRING.includes('exento')
        importe=HIJOS[i].getAttribute('ImporteDR')
        TRAS_DOC.push(['16IMP',importe])
      }
      if(htmlSTRING.startsWith('<pago20:TrasladoDR')&&(htmlSTRING.includes('TasaOCuotaDR="0.03') )){
        importe=HIJOS[i].getAttribute('ImporteDR')
        TRAS_DOC.push(['03IMP',importe])
      }
      if(htmlSTRING.startsWith('<pago20:TrasladoDR')&&(htmlSTRING.includes('TasaOCuotaDR="0.00') )){
        importe=HIJOS[i].getAttribute('ImporteDR')
        TRAS_DOC.push(['00IMP',importe])
      }            
              
              };
    var ALL_ROWS=0;
    ALL_ROWS=cDOCTOS 
    var MATRIXa = []; var MATRIXb=[];
  for(i =0;i <=cDOCTOS-1;i++){ //DE 0 hasta ALL ROWS -1
    MATRIXa[i]= new Array(7);// 5 elementos de TR Y DOCS
    MATRIXa[i]=['','','','','','','']
    MATRIXb[i]= new Array(2);//3 elementos de tabla1
    MATRIXb[i]=['','']
  };

//SMATRIX[0][0]=u;SMATRIX[0][1]=rec;SMATRIX[0][2]=em
    let cont =0;
cont =-1;
  for(i =0;i <=TRAS_DOC.length-1;i++){ 
     
     if(TRAS_DOC[i][0]=='DOC'){
       cont=cont+1
       MATRIXa[cont][0]=TRAS_DOC[i][1]
     }
     if(TRAS_DOC[i][0]=='16IMP'){
       MATRIXa[cont][1]=TRAS_DOC[i][1]
     }
     if(TRAS_DOC[i][0]=='03IMP'){
       MATRIXa[cont][2]=TRAS_DOC[i][1]
     }
     if(TRAS_DOC[i][0]=='00IMP'){
       MATRIXa[cont][3]=TRAS_DOC[i][1]
     }           
     if(TRAS_DOC[i][0]=='BASE'){
       MATRIXa[cont][4]=TRAS_DOC[i][1]
     }
     if(TRAS_DOC[i][0]=='03BASE'){
       MATRIXa[cont][5]=TRAS_DOC[i][1]
     }
     if(TRAS_DOC[i][0]=='00BASE'){
       MATRIXa[cont][6]=TRAS_DOC[i][1]
     }     
     
                
    };

 MATRIXb[0][0]=uuidElement;MATRIXb[0][1]=emisor;

   const SECMATRIX = [];
  for (let i = 0; i < MATRIXa.length; i++) {
    // Concatenate the current row from matrixA with the current row from matrixB
    SECMATRIX.push(MATRIXb[i].concat(MATRIXa[i]));
  }
 const tbody = document.querySelector("#TABLA2 tbody");





                 for(i =0;i <=ALL_ROWS-1;i++){ 

                      var fila = document.createElement("tr");
                 // Crear celdas para cada propiedad
                      Object.values(SECMATRIX[i]).forEach(valor => {
                      const celda = document.createElement("td");
                      celda.textContent = valor;
                      fila.appendChild(celda);
                       });
                      tbody.appendChild(fila);
                };



 

}
  

  