import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {

  canvas:any;
  ctx:any;
  //aqui guardo la palabra
  palabra!:string;
  //aqui guardo la palabra en un arreglo
  palabraArray:string[]=[];
  //aqui guardo los _ de la palabra
  palabraEscondida:string[]=[];
  //aqui guardo un arreglo de las letras(botones precionas) que se usaron
  letrasUsadas:string[]=[];
  //con esto cuento los numeros de intentos
  intentos:number=0;
  //aqui escribo si ganas o pierdes
  winOrLosse!:string;
  //con esta variable muestro las palabras
  PalabraMostrando='';

  constructor() {
    
   }

  ngOnInit(): void {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.Estructura();
    document.querySelectorAll('.boton').forEach(a  =>{
      a.setAttribute('disabled','')
    });
  }

  jugar():void{
    document.getElementById('reiniciar')?.removeAttribute('disabled');
    document.getElementById('jugar')?.setAttribute('disabled','');  
    document.querySelectorAll('.boton').forEach(a  =>{
      a.removeAttribute('disabled')
    });

    let palabraAdd = prompt('Escribe una palabra');
    this.ingresarPalabra(palabraAdd);
  }

  //Agrego la palabra y la convierto en mayuscula
  ingresarPalabra(palabraAgregada:any){
    let palabraMayus = palabraAgregada.toUpperCase();
    this.palabra=palabraMayus;    
    this.palabraEsconder();
  }

  // aqui escondo la palabra
  palabraEsconder(){
    for(let i = 0; i<this.palabra.length; i++){
      this.palabraArray.push(this.palabra[i]);
      //aqui agrego los _ en el arreglo, para despues encontrarlo
      this.palabraEscondida.push('_')
    }
    this.muestraPalabraBuscar();
  }

  letraEscogida(letra:string):void{
    this.letrasUsadas.push(letra);
    let id= document.getElementById(letra);
    //Desactiva el boton
    id?.setAttribute('disabled','');
    //quito la clase
    id?.classList.remove('btn-primary');
  
    //verifico que tenga la letra
    if(this.palabraArray.includes(letra)){
      id?.classList.add('btn-success');
      //agrego la letra al arreglo
      this.palabraArray.forEach((arregloLetra,index) =>  {
        if(arregloLetra == letra){
          this.palabraEscondida[index]=letra;
        }  
      }); 
      this.muestraPalabraBuscar();
    }else{
      //agrego una clase para cambiar el color
      id?.classList.add('btn-danger')
      //llamo al metodo 
      this.letraIncorrecta(this.intentos);
    }
    //verifico si ganaste
    if(this.palabraEscondida.includes('_') == false){
      this.ganaste();
    }
    
    
  }

  ganaste():void{
    this.winOrLosse='GANASTE!..';
    document.getElementById('comment')?.classList.remove('perdedor');
    document.getElementById('comment')?.classList.add('ganador');
    //bloqueo los botones
    document.querySelectorAll('.boton').forEach(a  =>{
      a.setAttribute('disabled','')
    });
    this.limpiarCanvas();
    this.Estructura();
    this.monitoVivo();
  }

  letraIncorrecta(fallo:any):void{
    switch (fallo) {
        case 0:
          this.caraTriste();
          this.intentos++          
        break;
      
        case 1:
          this.cuerpo();
          this.intentos++
        break;

        case 2:
          this.brazoIzquierdo();
          this.intentos++
        break;

        case 3:
          this.brazoDerecho();
          this.intentos++
        break;

        case 4:
          this.pieIzquierdo();
          this.intentos++
        break;

        case 5:
          this.pieDerecho();
          this.intentos++
          this.winOrLosse='PERDISTE!..';
          document.getElementById('comment')?.classList.remove('ganador');
          document.getElementById('comment')?.classList.add('perdedor');
          document.querySelectorAll('.boton').forEach(a  =>{
            a.setAttribute('disabled','')
          });
          
          
        break;

        case 'reinicio':
          this.winOrLosse=''
          this.limpiarCanvas();
          this.Estructura();
          this.intentos=0;
          //recorro el arreglo y voy quitandole las propiedades a cada boton que modifique
          document.querySelectorAll('.boton').forEach(a  =>{
            a.removeAttribute('disabled');
            a.classList.remove('btn-danger');
            a.classList.remove('btn-success');
            a.classList.add('btn-primary');
          });
          let letrasUse = this.letrasUsadas.length;
          for(let i = 0; i < letrasUse; i++){
            let a = this.letrasUsadas.pop();
          }
          this.borrarArray();
          let palabraAdd = prompt('Escribe una palabra');
          this.ingresarPalabra(palabraAdd);
        break;
    }
  }

  borrarArray():void{
    let letras = this.palabraEscondida.length;
    for(let i =0; i< letras; i++){
      this.palabraEscondida.pop();
      this.palabraArray.pop();
    }
    
  }

  muestraPalabraBuscar():void{
    this.PalabraMostrando='';
      this.palabraEscondida.forEach( data =>{
        this.PalabraMostrando = this.PalabraMostrando + `${data} `;
      });    
    
  }
  
  limpiarCanvas():void{
    this.ctx.clearRect(0, 0, 300, 250);
  }

  Estructura():void{
    this.ctx.fillRect(10, 230, 150, 1);
    this.ctx.fillRect(75, 50, 1, 180);
    this.ctx.fillRect(75,50,100,1);
    this.ctx.fillRect(175,50,1,10);
  }

  caraTriste():void{
    this.ctx.beginPath();
    this.ctx.arc(175, 85, 25, 0, Math.PI * 2, true); // Outer circle
    this.ctx.moveTo(190, 100);
    this.ctx.arc(175, 100, 15, 0, Math.PI, true); // Mouth (clockwise)
    this.ctx.moveTo(170, 75);
    this.ctx.arc(165, 75, 5, 0, Math.PI * 2, true); // Left eye
    this.ctx.moveTo(190, 75);
    this.ctx.arc(185, 75, 5, 0, Math.PI * 2, true); // Right eye
    this.ctx.stroke();
  }
  
  cuerpo():void{
    this.ctx.strokeRect(175, 110, 0, 50);
  }

  pieIzquierdo():void{
    this.ctx.beginPath();
    this.ctx.moveTo(175, 160);
    this.ctx.lineTo(175, 160);
    this.ctx.lineTo(150, 185);
    this.ctx.stroke();
  }

  pieDerecho():void{
    this.ctx.beginPath();
    this.ctx.moveTo(175, 160);
    this.ctx.lineTo(175, 160);
    this.ctx.lineTo(200, 185);
    this.ctx.stroke();
  }

  brazoIzquierdo():void{
    this.ctx.beginPath();
    this.ctx.moveTo(175, 120);
    this.ctx.lineTo(175, 120);
    this.ctx.lineTo(155, 150);
    this.ctx.stroke();
  }

  brazoDerecho():void{
    this.ctx.beginPath();
    this.ctx.moveTo(175, 120);
    this.ctx.lineTo(175, 120);
    this.ctx.lineTo(195, 150);
    this.ctx.stroke();
  }

  monitoVivo():void{
    this.ctx.beginPath();
    //face
    this.ctx.arc(220, 125, 25, 0, Math.PI * 2, true); // Outer circle
    this.ctx.moveTo(235, 130);
    this.ctx.arc(220, 130, 15, 0, Math.PI, false); // Mouth (clockwise)
    this.ctx.moveTo(215, 120);
    this.ctx.arc(210, 120, 5, 0, Math.PI * 2, true); // Left eye
    this.ctx.moveTo(235, 120);
    this.ctx.arc(230, 120, 5, 0, Math.PI * 2, true); // Right eye
    //left arm
    this.ctx.moveTo(220, 165);
    this.ctx.lineTo(220, 165);
    this.ctx.lineTo(200, 190);
    //right arm
    this.ctx.moveTo(220, 165);
    this.ctx.lineTo(220, 165);
    this.ctx.lineTo(240, 190);
    //body
    this.ctx.strokeRect(220, 150, 0, 50);
    //left leg
    this.ctx.moveTo(220, 200);
    this.ctx.lineTo(220, 200);
    this.ctx.lineTo(195, 230);
    //right leg
    this.ctx.moveTo(220, 200);
    this.ctx.lineTo(220, 200);
    this.ctx.lineTo(245, 230);
    this.ctx.stroke();
  }
}
