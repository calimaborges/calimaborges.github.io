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

# Passo 2: Verifique o status do repositório

```bash
git status
```

# Passo 3: Crie o arquivo `.gitignore` na raiz do projeto

Os arquivos abaixo são específicos para a minha IDE. O ideal é que cada
time/desenvolvedor adicione os arquivos pertinentes a esse arquivo.

```
.idea
*.iml
target
```

# Passo 4: Adicione os arquivos ao repositório

```bash
git add --all
```

# Passo 5: Faça o commit

```bash
git commit -m "Primeiro commit"
```

# Passo 6: Crie o projeto no GitHub

![GitHub project creation]({{ site.url }}/img/taskify-api-github-project-creation.gif)

# Passo 7: Adicione os arquivos `LICENSE` e `README.md`

Arquivo `README.md`

```
# taskify-api
Simple tasks app
```

Arquivo `LICENSE`

```
The MIT License (MIT)

Copyright (c) 2016 Carlos Augusto Borges

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

# Passo 8: Faça commit dos arquivos adicionados

```bash
git commit -a -m "Adicionando arquivos recomendados pelo GitHub"
```

# Passo 8: Adicione o repositório do GitHub ao seu projeto

```bash
git remote add origin https://github.com/<your_username>/taskify-api.git
```

# Passo 9: Envie seu projeto ao GitHub

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
