---
layout:     post
date:       2016-07-11 00:00:00 -0300
title:      "Workflow Back-end Java"
subtitle:   "Parte 4: Teste automatizado"
author:     Carlos Augusto Borges
categories: java workflow back-end workflow-back-end-java
comments:   true
serie: workflow-back-end-java
---

Nesta parte da série criaremos um teste automatizado para nosso *Hello World*.

{% include posts/introducao-serie-workflow-back-end-java.html %}

# Pré-Requisitos

* Java 8 [java.oracle.com][java]
* Maven  [maven.apache.org][maven]

# Passo 0: Verificar se está na pasta do projeto

```
cd taskify-api
```

# Passo 1: Preparar servidor para ser iniciado em outra classe

Extrair inicialização do servidor para outro método no arquivo `App.java`

<code
    data-gist-id="c768595c04f8c0056928be78177d1df7"
    data-gist-file="App.java"
    data-gist-highlight-line="8-9,12-17"></code>

# Passo 2: Atualizar versão do JUnit

<code
    data-gist-id="c768595c04f8c0056928be78177d1df7"
    data-gist-file="pom.xml"
    data-gist-highlight-line="21"
    data-gist-line="18-23"></code>

# Passo 3: Adicionar a dependência para fazer requisições no servidor

<code
    data-gist-id="c768595c04f8c0056928be78177d1df7"
    data-gist-file="pom.xml"
    data-gist-highlight-line="21"
    data-gist-line="24-29"></code>


# Passo 4: Preparar servidor na classe de testes `AppTest.java`

<code
    data-gist-id="c768595c04f8c0056928be78177d1df7"
    data-gist-file="preparacao-servidor::AppTest.java"></code>

# Passo 5: Criar teste falhando

<code
    data-gist-id="c768595c04f8c0056928be78177d1df7"
    data-gist-file="teste-falho::AppTest.java"
    data-gist-highlight-line="17-21,3,4,6,8"></code>

# Passo 6: Executar teste e confirmar que falha

```
mvn test
```

# Passo 7: Criar teste passando

<code
    data-gist-id="c768595c04f8c0056928be78177d1df7"
    data-gist-file="AppTest.java"
    data-gist-highlight-line="20"></code>

# Passo 8: Executar teste e confirmar que passa

```
mvn test
```

# Passo 9: Adicionar os arquivos, fazer o *commit* e o push para o GitHub

```
git add --all
git commit -m "Adicionando teste básico"
git push
```

# Passo 10: Enviar para o Heroku

```
git push heroku master
```

# Pronto

Pronto! Seu código já possui um teste automatizado que não é lá essas coisas, mas
já é um começo.

[java]:                 http://java.oracle.com
[maven]:                http://maven.apache.org/
[heroku-toolbelt]:      https://toolbelt.heroku.com/
[spark-java]:           http://sparkjava.com/  
[github]:               http://github.com/
[heroku]:               http://heroku.com/
[travisci]:             http://travis-ci.org/
