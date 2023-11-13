module.exports = {

areaTriangulo(base, altura) {
    return (base * altura)/2;
},

volumenEsfera(radio) {
    return (4/3)*(3.14)*(radio**3);
},

valorAbsoluto(n) {
let v = null;
    if (n < 0) {
        v = n * -1
    }else{
        v=n
    }
    return v;
},

factorial(num) {
    let acumuladora = null;
  if (num == 0) {
     acumuladora = 0;
  }else{
     acumuladora = 1;
  }
  
    for (let index = num ; index > 0; index--) {


      acumuladora *= index 
     
        
    }

    return acumuladora;
},

dividir(a,b) {
    if (a == 0 || b ==0) {
        return 0
    }
    return a/b;
},
};



