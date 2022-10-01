import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tres-en-linea',
  templateUrl: './tres-en-linea.component.html',
  styleUrls: ['./tres-en-linea.component.scss']
})
export class TresEnLineaComponent implements OnInit {
  canvas:any;
  ctx:any;
  posiciones:string[]=['','','','','','','','',''];
  turno=true;
  ganador=false;
  gano!:string;
  constructor() { }

  ngOnInit():void {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.estructura();    
  }

  seleccionClick(e:any):void{
    let x = e.offsetX;
    let y = e.offsetY;

    if(this.ganador==false){
      this.figura(x,y)
    }
  }
  
  figura(x:any,y:any):void{

    if(x <= 100 && y <=100){   
      if(this.posiciones[0] == ''){

        if(this.turno==true){
          this.posiciones[0]='X';
          this.equiz(0);
          this.turno=false;
          this.ganar('X');
        }else{
          this.posiciones[0]='O'
          this.circulo(0);
          this.turno=true;
          this.ganar('O');
        }

      }

    }else if(x>=100 && x<=200 &&  y<=100 ){
      if(this.posiciones[1] == ''){
        if(this.turno==true){
          this.posiciones[1]='X';
          this.equiz(1);
          this.turno=false;
          this.ganar('X');
        }else{
          this.posiciones[1]='O'
          this.circulo(1);
          this.turno=true;
          this.ganar('O');
        }        
      }

    }else if(x>200 && y<=100){ 
      if(this.posiciones[2] == ''){
        if(this.turno==true){
          this.posiciones[2]='X';
          this.equiz(2);
          this.turno=false;
          this.ganar('X');
        }else{
          this.posiciones[2]='O'
          this.circulo(2);
          this.turno=true;
          this.ganar('O');
        }
      }

    }else if(x <= 100 && y >100 && y<=200){ 
      if(this.posiciones[3] == ''){
        if(this.turno==true){
          this.posiciones[3]='X';
          this.equiz(3);
          this.turno=false;
          this.ganar('X');
        }else{
          this.posiciones[3]='O'
          this.circulo(3);
          this.turno=true;
          this.ganar('O');
        }
      } 

    }else if(x>=100 && x<=200 &&  y >100 && y<=200){
      if(this.posiciones[4] == ''){
        if(this.turno==true){
          this.posiciones[4]='X';
          this.equiz(4);
          this.turno=false;
          this.ganar('X');
        }else{
          this.posiciones[4]='O'
          this.circulo(4);
          this.turno=true;
          this.ganar('O');
        }         
      }

    }else if(x>200 && y >100 && y<=200){ 
      if(this.posiciones[5] == ''){
        if(this.turno==true){
          this.posiciones[5]='X';
          this.equiz(5);
          this.turno=false;
          this.ganar('X');
        }else{
          this.posiciones[5]='O';
          this.circulo(5);
          this.turno=true;
          this.ganar('O');
        }
      }

    }else if(x <= 100  && y>=200){   
      if(this.posiciones[6] == ''){
        if(this.turno==true){
          this.posiciones[6]='X';
          this.equiz(6);
          this.turno=false;
          this.ganar('X');
        }else{
          this.posiciones[6]='O';
          this.circulo(6);
          this.turno=true;
          this.ganar('O');
        }
      }

    }else if(x>=100 && x<=200 && y>=200){
      if(this.posiciones[7] == ''){
        if(this.turno==true){
          this.posiciones[7]='X';
          this.equiz(7);
          this.turno=false;
          this.ganar('X');
        }else{
          this.posiciones[7]='O';
          this.circulo(7);
          this.turno=true;
          this.ganar('O');
        }
      }

    }else if(x>200 && y>200){ 
      if(this.posiciones[8] == ''){
        if(this.turno==true){
          this.posiciones[8]='X';
          this.equiz(8);
          this.turno=false;
          this.ganar('X');
        }else{
          this.posiciones[8]='O';
          this.circulo(8);
          this.turno=true;
          this.ganar('O');
        }
      }

    }
  }

  ganar(figura:string):void{
    if(figura='X'){
      if(this.posiciones[6]=='X' && this.posiciones[7]=='X' && this.posiciones[8]=='X'){
        this.gano='Gano X!..';
        this.ganador=true;
      }else if(this.posiciones[3]=='X' && this.posiciones[4]=='X' && this.posiciones[5]=='X'){
        this.gano='Gano X!..';
        this.ganador=true;
      }else if(this.posiciones[0]=='X' && this.posiciones[1]=='X' && this.posiciones[2]=='X'){
        this.gano='Gano X!..';
        this.ganador=true;
      }else if(this.posiciones[0]=='X' && this.posiciones[4]=='X' && this.posiciones[8]=='X'){
        this.gano='Gano X!..';
        this.ganador=true;
      }else if(this.posiciones[0]=='X' && this.posiciones[3]=='X' && this.posiciones[6]=='X'){
        this.gano='Gano X!..';
        this.ganador=true;
      }else if(this.posiciones[1]=='X' && this.posiciones[4]=='X' && this.posiciones[7]=='X'){
        this.gano='Gano X!..';
        this.ganador=true;
      }else if(this.posiciones[2]=='X' && this.posiciones[5]=='X' && this.posiciones[8]=='X'){
        this.gano='Gano X!..';
        this.ganador=true;
      }else if(this.posiciones[2]=='X' && this.posiciones[4]=='X' && this.posiciones[6]=='X'){
        this.gano='Gano X!..';
        this.ganador=true;
      }
    }
    if(figura='O'){
      if(this.posiciones[6]=='O' && this.posiciones[7]=='O' && this.posiciones[8]=='O'){
        this.gano='Gano O!..';
        this.ganador=true;
      }else if(this.posiciones[3]=='O' && this.posiciones[4]=='O' && this.posiciones[5]=='O'){
        this.gano='Gano O!..';
        this.ganador=true;
      }else if(this.posiciones[0]=='O' && this.posiciones[1]=='O' && this.posiciones[2]=='O'){
        this.gano='Gano O!..';
        this.ganador=true;
      }else if(this.posiciones[0]=='O' && this.posiciones[4]=='O' && this.posiciones[8]=='O'){
        this.gano='Gano O!..';
        this.ganador=true;
      }else if(this.posiciones[0]=='O' && this.posiciones[3]=='O' && this.posiciones[6]=='O'){
        this.gano='Gano O!..';
        this.ganador=true;
      }else if(this.posiciones[1]=='O' && this.posiciones[4]=='O' && this.posiciones[7]=='O'){
        this.gano='Gano O!..';
        this.ganador=true;
      }else if(this.posiciones[2]=='O' && this.posiciones[5]=='O' && this.posiciones[8]=='O'){
        this.gano='Gano O!..';
        this.ganador=true;
      }else if(this.posiciones[2]=='O' && this.posiciones[4]=='O' && this.posiciones[6]=='O'){
        this.gano='Gano O!..';
        this.ganador=true;
      }
    }    
  }

  reiniciar():void{
    this.posiciones.forEach((data,index)=>{
      this.posiciones[index] ='';
    })
    this.limpiarCanvas();
    this.estructura();
    this.ganador=false;
    this.gano='';
  }

  estructura():void{
    this.ctx.fillRect(100, 0, 1, 300);
    this.ctx.fillRect(200, 0, 1, 300);
    this.ctx.fillRect(0, 100, 300, 1);
    this.ctx.fillRect(0,200,300,1);

  }

  limpiarCanvas():void{
    this.ctx.clearRect(0, 0, 300, 300);
  }

  circulo(key:any):void{
    switch (key) {
        case 0:
        // 1-1
    this.ctx.beginPath();
    this.ctx.arc(50, 50, 47, 0, Math.PI * 2, true);
    this.ctx.stroke();
        break;
        case 1:
        // 1-2
    this.ctx.beginPath();
    this.ctx.arc(150, 50, 47, 0, Math.PI * 2, true);
    this.ctx.stroke();
        break;
        case 2:
        // 1-3
    this.ctx.beginPath();
    this.ctx.arc(250, 50, 47, 0, Math.PI * 2, true);
    this.ctx.stroke();
        break;
        case 3:
        // 2-1
    this.ctx.beginPath();
    this.ctx.arc(50, 150, 47, 0, Math.PI * 2, true);
    this.ctx.stroke();   
        break;
        case 4:
        // 2-2
    this.ctx.beginPath();
    this.ctx.arc(150, 150, 47, 0, Math.PI * 2, true);
    this.ctx.stroke();
        break;
        case 5:
        // 2-3
    this.ctx.beginPath();
    this.ctx.arc(250, 150, 47, 0, Math.PI * 2, true);
    this.ctx.stroke();
        break;
        case 6:
        // 3-1
    this.ctx.beginPath();
    this.ctx.arc(50, 250, 47, 0, Math.PI * 2, true);
    this.ctx.stroke();
        break;
        case 7:   
        // 3-2
    this.ctx.beginPath();
    this.ctx.arc(150, 250, 47, 0, Math.PI * 2, true);
    this.ctx.stroke();
        break;
        case 8:
        // 3-3
    this.ctx.beginPath();
    this.ctx.arc(250, 250, 47, 0, Math.PI * 2, true);
    this.ctx.stroke();
        break;
    }

  }

  equiz(key:any):void{
    switch (key) {
      case 0:
      // 1-1
    this.ctx.beginPath();
    this.ctx.lineTo(4,  4);
    this.ctx.lineTo(96, 96);
    this.ctx.moveTo(4,  96);
    this.ctx.lineTo(96, 4);
    this.ctx.stroke();
      break;
      case 1:
      // 1-2
    this.ctx.beginPath();
    this.ctx.lineTo(104, 4);
    this.ctx.lineTo(196, 96);
    this.ctx.moveTo(104, 96);
    this.ctx.lineTo(196, 4);
    this.ctx.stroke();
      break;
      case 2:
      // 1-3
    this.ctx.beginPath();
    this.ctx.lineTo(204, 4);
    this.ctx.lineTo(296, 96);
    this.ctx.moveTo(204, 96);
    this.ctx.lineTo(296, 4);
    this.ctx.stroke();
      break;
      case 3:
      // 2-1
    this.ctx.beginPath();
    this.ctx.lineTo(4,  104);
    this.ctx.lineTo(96, 196);
    this.ctx.moveTo(4,  196);
    this.ctx.lineTo(96, 104);
    this.ctx.stroke();
      break;
      case 4:
      // 2-2
    this.ctx.beginPath();
    this.ctx.lineTo(104, 104);
    this.ctx.lineTo(196, 196);
    this.ctx.moveTo(104, 196);
    this.ctx.lineTo(196, 104);
    this.ctx.stroke();
      break;
      case 5:
      // 2-3
    this.ctx.beginPath();
    this.ctx.lineTo(204, 104);
    this.ctx.lineTo(296, 196);
    this.ctx.moveTo(204, 196);
    this.ctx.lineTo(296, 104);
    this.ctx.stroke();
      break;
      case 6:
      // 3-1
    this.ctx.beginPath();
    this.ctx.lineTo(4,  204);
    this.ctx.lineTo(96, 296);
    this.ctx.moveTo(4,  296);
    this.ctx.lineTo(96, 204);
    this.ctx.stroke();
      break;
      case 7:
      // 3-2
    this.ctx.beginPath();
    this.ctx.lineTo(104, 204);
    this.ctx.lineTo(196, 296);
    this.ctx.moveTo(104, 296);
    this.ctx.lineTo(196, 204);
    this.ctx.stroke();
      break;
      case 8:
      // 3-3
    this.ctx.beginPath();
    this.ctx.lineTo(204, 204);
    this.ctx.lineTo(296, 296);
    this.ctx.moveTo(204, 296);
    this.ctx.lineTo(296, 204);
    this.ctx.stroke();
      break;
  }
  }
}
