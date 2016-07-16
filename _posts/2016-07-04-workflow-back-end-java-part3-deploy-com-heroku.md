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
em produção. Para isso utlizaremos o [Heroku][heroku] e o [Heroku Toolbelt][heroku-toolbelt].

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

# Passo 3: Criar o arquivo `Procfile` na raiz do projeto

<code
    data-gist-id="d472ee5cb13bccd1f48b10f2fd97ead8"
    data-gist-file="Procfile"></code>


# Passo 4: Atualizar o código para utilizar a porta fornecida pelo ambiente do Heroku

No arquivo `App.java` no início do método `main`

<code
    data-gist-id="d472ee5cb13bccd1f48b10f2fd97ead8"
    data-gist-file="App.java"
    data-gist-highlight-line="7-8"></code>

# Passo 5: Adicionar os arquivos e fazer o *commit* no seu Git

```
git add --all
git commit -m="Adaptações para o Heroku"
```

# Passo 6: Fazer o deploy no Heroku

```
git push heroku master
```

# Passo 7: Acessar sua aplicação em produção

```
heroku open
```

# Passo 8: Enviar para o GitHub

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
