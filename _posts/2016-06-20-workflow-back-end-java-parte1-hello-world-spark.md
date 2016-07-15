---
layout:     post
date:       2016-06-20 00:00:00 -0300
title:      "Workflow Back-end Java"
subtitle:   "Parte 1: Hello World Spark"
author:     Carlos Augusto Borges
categories: java workflow back-end workflow-back-end-java
comments:   true
serie: workflow-back-end-java
---

Na primeira parte da série criaremos um *Hello World* básico para a Web. Para isso utlizaremos o framework [Spark][spark-java]. A idéia é iniciarmos com um *archetype* básico do [Maven][maven] e irmos progredindo até chegarmos a aplicação web desejada.

{% include posts/introducao-serie-workflow-back-end-java.html %}

# Pré-Requisitos

* Java 8 [java.oracle.com][java]
* Maven [maven.apache.org][maven]

# Passo 1: Criar o esqueleto da aplicação

<code
    data-gist-hide-line-numbers="true"
    data-gist-id="b1014ede537693c09d4d2215221433a2"
    data-gist-file="criar-app.sh"></code>


Preencha os dados de acordo com as informações do seu projeto. Nesse projeto preencheremos da seguinte forma:

<code
    data-gist-hide-line-numbers="true"
    data-gist-id="b1014ede537693c09d4d2215221433a2"
    data-gist-file="confirmation-maven.sh"></code>

# Passo 2: Criar o arquivo `.editorconfig` na raiz do projeto


<code
    data-gist-id="b1014ede537693c09d4d2215221433a2"
    data-gist-file=".editorconfig"></code>

# Passo 3: Adicionar as dependências do Spark

Arquivo `pom.xml` dentro da tag `<dependencies>`

<code
    data-gist-id="b1014ede537693c09d4d2215221433a2"
    data-gist-file="pom.xml"
    data-gist-line="24-33"></code>
<!--data-gist-highlight-line="24-33"-->

# Passo 4: Criar um GET simples

Arquivo `App.java`

<code
    data-gist-id="b1014ede537693c09d4d2215221433a2"
    data-gist-file="App.java"></code>

# Passo 5: Preencher os dados de compilação no Maven

Arquivo `pom.xml` dentro da tag raiz `<project>`

<code
    data-gist-id="b1014ede537693c09d4d2215221433a2"
    data-gist-file="pom.xml"
    data-gist-line="38-46"></code>


# Passo 6: Fazer o Maven gerar um JAR

Arquivo `pom.xml` dentro da tag `<plugins>`

<code
    data-gist-id="b1014ede537693c09d4d2215221433a2"
    data-gist-file="pom.xml"
    data-gist-line="47-69"></code>

# Passo 7: Compilar o projeto

<code
    data-gist-hide-line-numbers="true"
    data-gist-id="b1014ede537693c09d4d2215221433a2"
    data-gist-file="compilar-projeto.sh"></code>

# Passo 8: Executar o servidor web

<code
    data-gist-hide-line-numbers="true"
    data-gist-id="b1014ede537693c09d4d2215221433a2"
    data-gist-file="executar-projeto.sh"></code>

# Passo 9: Verificar o resultado

Acesse [http://localhost:4567/][localhost] e verifique se o texto **Hello World** aparece na tela.

# Pronto

Pronto! Seu primeiro servidor web está rodando na sua máquina.

[java]:                 http://java.oracle.com
[maven]:                http://maven.apache.org/
[heroku-toolbelt]:      https://toolbelt.heroku.com/
[spark-java]:           http://sparkjava.com/
[github]:               http://github.com/
[git]:                  https://git-scm.com/
[heroku]:               http://heroku.com/
[travisci]:             http://travis-ci.org/
[editorconfig]:         http://editorconfig.org/
[google]:               http://google.com/
[localhost]:            http://localhost:4567/
