---
layout:     post
date:       2016-06-27 00:00:00 -0300
title:      "Workflow Back-end Java"
subtitle:   "Parte 2: Versionando com Git e GitHub"
author:     Carlos Augusto Borges
categories: java workflow back-end workflow-back-end-java
comments:   true
serie: workflow-back-end-java
---

Nesta segunda parte da série criaremos um repositório Git local e logo em seguida enviaremos o código do nosso projeto para o GitHub.

{% include posts/introducao-serie-workflow-back-end-java.html %}

# Pré-Requisitos

* Git [git-scm.com][git]
* Conta no GitHub [github.com][github]

# Passo 0: Verificar se está na pasta do projeto

```
cd taskify-api
```

# Passo 1: Iniciar um repositório Git no projeto

```bash
git init
```

# Passo 2: Verificar o status do repositório

```bash
git status
```

# Passo 3: Criar o arquivo `.gitignore` na raiz do projeto

Os arquivos abaixo são específicos para a minha IDE. O ideal é que cada
time/desenvolvedor adicione os arquivos pertinentes a serem ignorados pelo Git
no `.gitignore`.

<!-- more -->
<code
    data-gist-id="d5c1c1aac585b38304e3da1c29a52c0c"
    data-gist-file=".gitignore"></code>

# Passo 4: Adicionar os arquivos ao repositório

```bash
git add --all
```

# Passo 5: Fazer o commit

```bash
git commit -m "Primeiro commit"
```

# Passo 6: Criar o projeto no GitHub

![GitHub project creation]({{ site.url }}/img/taskify-api-github-project-creation.gif)

# Passo 7: Adicionar os arquivos `LICENSE` e `README.md`

Arquivo `README.md`

```markdown
# taskify-api
Simple tasks app
```

Arquivo `LICENSE`

<code
    data-gist-id="d5c1c1aac585b38304e3da1c29a52c0c"
    data-gist-file="LICENSE"></code>

# Passo 8: Adicionar ao Git e fazer *commit* dos arquivos

```bash
git add --all
git commit -m "Adicionando arquivos recomendados pelo GitHub"
```

# Passo 8: Adicionar o repositório do GitHub ao seu projeto

```bash
git remote add origin https://github.com/<your_username>/taskify-api.git
```

# Passo 9: Enviar seu projeto ao GitHub

```bash
git push -u origin master
```

# Pronto

Seu projeto já está versionado com o Git e disponível no GitHub!

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
