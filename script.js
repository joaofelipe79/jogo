document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  verificarSelecoes();
});

function verificarSelecoes() {
  var nome = document.getElementById("nome").value;
  var idade = document.getElementById("idade").value;
  var checkboxSelecionadas = document.querySelectorAll('input[name="interesses[]"]:checked');

  console.log("Nome:", nome);
  console.log("Idade:", idade);
  console.log("Checkbox selecionadas:", checkboxSelecionadas.length);

  if (nome.toLowerCase() === "maria" && idade > 10 && checkboxSelecionadas.length > 0) {
      document.body.style.backgroundColor = "#ff69b4";
  } 
  else if (nome.toLowerCase() === "joao" && idade > 15 && checkboxSelecionadas.length > 0) {
      document.body.style.backgroundColor = "#00FF00";
  } 
  else if (nome.toLowerCase() === "ana" && idade > 11 && checkboxSelecionadas.length > 0) {
      document.body.style.backgroundColor = "#87CEEB";
  } 
  else if (nome.toLowerCase() === "carlos" && idade > 18 && checkboxSelecionadas.length > 1) {
      document.body.style.backgroundColor = "#32CD32";
  } 
  else if (nome.toLowerCase() === "laura" && idade > 17 && checkboxSelecionadas.length > 0) {
      document.body.style.backgroundColor = "#800080";
  } 
  else {
      document.body.style.backgroundColor = "#f8f9fa";
  }
}
