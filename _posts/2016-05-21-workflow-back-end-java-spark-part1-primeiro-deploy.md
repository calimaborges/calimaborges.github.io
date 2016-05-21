---
layout:     post
date:       2016-05-01 21:07:16 -0300
title:      "Workflow Backend Java"
subtitle:   "Parte 1: visão geral e deploy da aplicação"
author:     Carlos Augusto Borges
categories: java workflow back-end workflow-back-end-java
comments:   true
---

Nesta série vou mostrar o *workflow* que utilizo atualmente para desenvolver
*back-ends*. O passo-a-passo será feito gerando uma API REST de um serviço de
gestão de tarefas.

Apesar do *workflow* ser agnóstico quanto a linguagem e tecnologias, para o
exemplo utilizaremos [Java][java], [Maven][maven], [Spark Framework][spark-java]
e o deploy da aplicação será feito no [Heroku][heroku].

A idéia é começar com um *archetype* básico do [Maven][maven] e aos poucos irmos
progredindo até chegarmos a aplicação web que desejamos.


# Pré-Requisitos

* Java 8 [java.oracle.com][java]
* Maven [maven.apache.org][maven]
* Heroku Toolbelt [toolbelt.heroku.com][heroku-toolbelt]
* Conta no GitHub [github.com][github]


# Passo 1: GitHub

A primeira coisa que gosto de fazer antes de iniciar qualquer projeto é criar
um repositório no [GitHub][github]. Por que? Porque o GitHub já cria um arquivo
`README.md` com título e descrição do projeto, outro arquivo `LICENSE`
descrevendo a licença do projeto e o `.gitignore` de acordo com configurações
comuns da linguagem selecionada.

O GIF a seguir mostra a criação do projeto **taskify** que será o exemplo
utilizado por nós nessa série.



[java]:                 http://java.oracle.com
[maven]:                http://maven.apache.org/
[heroku-toolbelt]:      https://toolbelt.heroku.com/
[spark-java]:           http://sparkjava.com/  
[github]:               http://github.com/
[heroku]:               http://heroku.com/
[travisci]:             http://travis-ci.org/