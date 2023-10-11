document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('reset-password-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const matricula = document.getElementById('matricula').value;

    resetPassword(matricula);
  });
});

function resetPassword(matricula) {
  const novaSenha = matricula;

  axios
    .put(`http://localhost:8080/sicojurr/usuarios/${matricula}/reset-password`, { matricula, novaSenha })
    .then(response => {
      if (response.status === 200) {
        exibirMensagemDeSucesso("Senha redefinida com sucesso!");
      } else {
        console.error("Erro ao redefinir a senha. Status da resposta:", response.status);
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 400) {
        exibirMensagemDeErro("Usuário inválido! Por favor, verifique a sua matrícula.");
      }
    });
}

function exibirMensagemDeErro(mensagem) {
  const mensagemErro = document.getElementById('mensagemErro');
  mensagemErro.textContent = mensagem;
  mensagemErro.style.display = 'block';

  setTimeout(function () {
    mensagemErro.style.display = 'none';
  }, 2000);
}


function exibirMensagemDeSucesso(mensagem) {
  const mensagemSucesso = document.getElementById('mensagemSucesso');
  mensagemSucesso.textContent = mensagem;
  mensagemSucesso.style.display = 'block';

  setTimeout(function () {
    mensagemSucesso.style.display = 'none';
  }, 2000);
  
}

