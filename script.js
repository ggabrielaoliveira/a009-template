/*const nome= prompt("Qual é seu nome ?");
//const corFav= prompt ("Qyal sua cor favorita?");

/*let resposta1= "A cor favorita da" + nome + "é" + corFav;
console.log(resposta1);
cóigo com concatenação sla*/

/*let resposta2= `A cor favorita da ${nome} é ${corFav}`;
console.log(resposta2);

resposta2= `Nome: ${nome}\nCor favorita: ${corFav}` ;
console.log(resposta2);
~~~~~~~~~~~~~~~~~~
console.log(`O nome ${nome.toUpperCase()} possui ${nome.length} caracteres`);
~~~~~~~~~~~~~~~~
console.log(`O nome possui a letra A: ${nome.includes("a")}`);
*/
let nomeDeUsuario= prompt("Qual seu nome de usuario?");
let emailDeUsuario= prompt("Qual seu email?");

resposta= `O email ${emailDeUsuario} foi cadastrado com sucesso!
Boas vindas ${nomeDeUsuario}. E o seu nome ${nomeDeUsuario} possui ${nomeDeUsuario.length} letras.`;
console.log(resposta);
 
console.log(`Vamos substituir todos os R por L do seu nome: ${nomeDeUsuario.replaceAll("r","l")}`)

console.log(`E seu email ${emailDeUsuario} possui @: ${emailDeUsuario.includes("@")}`);


