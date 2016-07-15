---
layout:     post
date:       2016-07-04 00:00:00 -0300
title:      "Workflow Back-end Java"
subtitle:   "Parte 3: Deploy no Heroku"
author:     Carlos Augusto Borges
categories: java workflow back-end workflow-back-end-java
comments:   true
serie: workflow-back-end-java
---

Nesta parte da série colocaremos nossa aplicação disponível para o mundo, ou seja,
em produção. Para isso utlizaremos o Heroku [Heroku][heroku] e o [Heroku Toolbelt][heroku-toolbelt].

{% include posts/introducao-serie-workflow-back-end-java.html %}

# Pré-Requisitos

* Heroku Toolbelt [toolbelt.heroku.com][heroku-toolbelt]
* Conta no Heroku [heroku.com][heroku]

# Passo 0: Verificar se está na pasta do projeto

```
cd taskify-api
```

# Passo 1: Fazer login no Heroku

```
heroku login
```

# Passo 2: Criar o seu App

```
heroku create
```

# Passo 3: Crie o arquivo `Procfile` na raiz do projeto

```
web:    java -jar target/taskify-api.jar
```

# Passo 4: Atualize o código para utilizar a porta do Heroku

No arquivo `App.java` no início do método `main`

```java
String strPort = System.getenv("PORT") != null ? System.getenv("PORT") : "4567";
port(Integer.valueOf(strPort));
```

# Passo 5: Adicione os arquivos e faça o commit no seu Git

```
git add --all
git commit -m="Adaptações para o Heroku"
```

# Passo 6: Faço o deploy no Heroku

```
git push heroku master
```

# Passo 7: Acesse sua aplicação em produção

```
heroku open
```

# Passo 8: Envie para o GitHub

```
git push
```

# Pronto

Seu projeto já está em produção e disponível para o mundo!

[java]:                 http://java.oracle.com
[maven]:                http://maven.apache.org/
[heroku-toolbelt]:      https://toolbelt.heroku.com/
[heroku]:               https://heroku.com/
[spark-java]:           http://sparkjava.com/
[github]:               http://github.com/
[git]:                  https://git-scm.com/
[heroku]:               http://heroku.com/
[travisci]:             http://travis-ci.org/
[editorconfig]:         http://editorconfig.org/
[google]:               http://google.com/
[localhost]:            http://localhost:4567/
