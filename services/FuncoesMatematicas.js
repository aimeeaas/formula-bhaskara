import { Alert } from 'react-native';

class FuncoesMatematicas {

  static calcularMedia(n1, n2, n3, n4){

    var num1 = parseFloat(n1);
    var num2 = parseFloat(n2);
    var num3 = parseFloat(n3);
    var num4 = parseFloat(n4);

    if(isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)){
      alert('Erro. Insira números válidos!');
      return;
    }

    var media = (num1 + num2 + num3 + num4) / 4;

    alert(`Resultado: ${media}`);
  }
}

export default FuncoesMatematicas;  