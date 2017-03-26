
//Validar os campos usados no Login
function ValidarLogin(strLogin,strSenha)
{
//linha de debug
//alert("Login " + strLogin + "\n" + "Senha: " + strSenha);
     if (strLogin == "")
      { 
         alert("Preencha corretamente o campo Login!");
         document.frmLogin.login_name.focus();
         return false;
      }
     else if (strSenha == "")
      { 
         alert("Preencha corretamente o campo Senha!");
         document.frmLogin.senha_login.focus();
         return false;
      }
     else if (strLogin == "marcelo" && strSenha == "123")
      { 
                 //poderia mandar o form fazer algo aqui ou mandar para alguma URL com window.location.href = URLDesejada; Ou deixar um action definida na propriedade action da tag form
         //exemplo de submit dinâmico
         //document.frmLogin.action = "noticias_login.asp"
         //document.frmLogin.submit();
         return true;
      }else{
	  alert("Email ou senha Errados");
	  return false;
	  }
}