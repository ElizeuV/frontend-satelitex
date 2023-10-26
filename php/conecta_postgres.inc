<?php
  //String de conexão
  $str_conexao = "host=localhost port=5432 dbname=db_satelitex_cliente user=postgres password=admin";

  //Passa a string de conexão para a função pg_connect()
  $conexao = pg_connect($str_conexao);

  //Testa a conexão
  if($conexao == false) {
    echo "Não foi possível estabelecer conexão com banco de dados!";
  }
?>