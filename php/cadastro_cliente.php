<?php
  //Inclue o arquivo de conexão
  include "conecta_postgres.inc";

  //Recupera os dados do post
  $nome = $_POST["name"];
  $email = $_POST["email"];
  $senha = $_POST["password"];

  //String sql
  $sql = "INSERT INTO cliente (nome, email, senha) VALUES ('$nome', '$email', '$senha')";

  //Executa o sql
  pg_query($sql);

  //Fecha conexão
  pg_close($conexao);

  //echo "Cliente cadastrado com sucesso!";
  //Substituindo pelo redirecionamento

  //Redireciona para listagem
  header("Location: ../pages/login.html");
?>