<?php
  //inclue o arquivo de conexão
  require_once("conecta_postgres.inc");
  //inicia sessão
  session_start();

  $email = $_POST['email'];
  $senha = $_POST['password'];

  $dom = new DOMDocument;
  $dom -> validateOnParse = true;
  libxml_use_internal_errors(true);
  $dom -> loadHTMLFile('../index.html');
  libxml_use_internal_errors(false);
  $entrar = $dom -> getElementById('entrar');
  $entrar ->removeChild($entrar -> childNodes -> item(0));

  //verifica se os campos estão vazios
  if(empty($email)) {
    $_SESSION['mensagem']="Preencha o campo E-mail";
    header("location: ../pages/login.html");
  } else if(empty($senha)) {
    $_SESSION['mensagem']="Preencha o campo Senha";
    header("location: ../pages/login.html");
  } else {
    //SQL para consulta de Usuário
    $sql = "SELECT * FROM cliente WHERE email = '$email' AND senha = '$senha'";
    //extrutura o SQL
    $resultado = pg_query ($sql);
    //manipula o retorno como array
    $dados = pg_fetch_assoc($resultado);
    //valida o login e a senha
    if($dados['email'] == $email and $dados['senha'] == $senha) {
      //cria um array com os dados
      $usuario = array("email"=> $dados['email'], "senha"=> $dados['senha']);
      //coloca o array na sessão
      $_SESSION['usuario'] = $usuario;
      
      $textNode = $dom -> createTextNode($dados['nome']);    
      $entrar -> appendChild($textNode);

      $dom -> saveHTMLFile('../index.html');

      header("location: ../index.html");
    } else {
      //cria uma sessão para exibir o erro
      $_SESSION['mensagem'] = "Login ou Senha inválidos";
      header("location: ../pages/login.html");
    }
  }

  // $dom = new DOMDocument;
  // $dom -> load('../index.html');
  // $entrar = $dom -> getElementById('entrar');

  // $sql = "SELECT * FROM cliente WHERE email = '$email' AND senha = '$senha'";
  // $resultado = pg_query ($sql);
  // $dados = pg_fetch_assoc($resultado);

  // $textNode = $entrar -> createTextNode($dados['nome']);

  // $entrar -> appendChild($textNode);
?>