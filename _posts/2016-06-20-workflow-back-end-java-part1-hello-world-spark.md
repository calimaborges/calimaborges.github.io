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

Na primeira parte da série criaremos um *Hello World* básico para a Web. Para isso utlizaremos o framework [Spark][spark-java]. A idéia é iniciarmos com um *archetype* básico do [Maven][maven] e aos poucos irmos progredindo até chegarmos a aplicação web desejada.

{% include posts/introducao-serie-workflow-back-end-java.html %}

# Pré-Requisitos

* Java 8 [java.oracle.com][java]
* Maven [maven.apache.org][maven]

# Passo 1: Criar o esqueleto da aplicação

Primeiramente criamos a estrutura básica de pastas do projeto. Normalmente cada linguagem ou gerenciador de pacotes possui um certo padrão para isso. No nosso projeto usaremos o Maven e o archetype quickstart.

```
mvn archetype:generate -DarchetypeGroupId=org.apache.maven.archetypes -DarchetypeArtifactId=maven-archetype-quickstart
```

Preencha os dados de acordo com as informações do seu projeto. Nesse projeto preencheremos da seguinte forma:

```
Define value for property 'groupId': : carlosborges.taskify
Define value for property 'artifactId': : taskify-api    
Define value for property 'version':  1.0-SNAPSHOT: :
Define value for property 'package':  carlosborges.taskify: :
Confirm properties configuration:
groupId: carlosborges.taskify
artifactId: taskify-api
version: 1.0-SNAPSHOT
package: carlosborges.taskify
 Y: : Y
```

# Passo 2: Crie arquivos básicos


### .gitignore

```
target
.idea
*.iml
```

### .editorconfig

```
# http://editorconfig.org
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 4
indent_style = space
insert_final_newline = true
max_line_length = 80
trim_trailing_whitespace = true

[*.md]
max_line_length = 0
trim_trailing_whitespace = false

[COMMIT_EDITMSG]
max_line_length = 0
```

Várias IDEs suportam ou possuem algum plugin para suportar o arquivo `.editorconfig`. Ele é muito útil para padronizar alguns detalhes dos arquivos, como por exemplo, tipo de EOL, tamanho de identação, tipo de identação etc. Leia mais em: [http://editorconfig.org/][editorconfig]

### README.md

```
# taskify-backend
Simple task manager to create, do, delete and postpone tasks
```

Costumo usar o padrão `# nome do projeto` e logo abaixo uma breve descrição do projeto.

### LICENSE

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

Preencha esse arquivo com a licença a ser adotada pelo seu software.


# Passo 3: Rode o projeto pela primeira vez

Agora que temos um esqueleto básico estamos prontos para a primeira build do projeto. Para isso execute o comando:

```
mvn clean package
```

Ao final o texto **BUILD SUCCESS** deve aparecer. Se não for o caso, verifique sua conexão com a internet, o arquivo `~/.m2/settings.xml`, pesquise o erro no [Google][google] ou poste um comentário abaixo.


# Passo 4: Crie um servidor web

Nosso objetivo nessa parte é criar um servidor simples que retorno o texto `Hello World` quando acessarmos o endereço [http://localhost:4567/][localhost]. Para esse passo usaremos o [Spark][spark-java] no seu arquivo `pom.xml`

## Adicione a dependência do Spark

```
<dependency>
    <groupId>com.sparkjava</groupId>
    <artifactId>spark-core</artifactId>
    <version>2.5</version>
</dependency>
```

## Crie o GET

Altere o arquivo `App.java` para que ele utilize o [Spark][spark-java] para responder a uma requisição `GET`, conforme o exemplo abaixo:

```
package carlosborges.taskify;

import static spark.Spark.*;

public class App
{
    public static void main( String[] args )
    {
        get("/", (req, res) -> "Hello World");
    }
}

```

## Informe ao Maven qual a versão do Java

Adicione as linhas abaixo ao seu `pom.xml`

```
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <configuration>
                <source>1.8</source>
                <target>1.8</target>
            </configuration>
        </plugin>
    </plugins>
</build>
```

## Verifique se o projeto está funcionando

```
mvn clean package
```

Ao final o texto **BUILD SUCCESS** deve aparecer. Se não for o caso, verifique sua conexão com a internet, o arquivo `~/.m2/settings.xml`, pesquise o erro no [Google][google] ou poste um comentário abaixo.


## Faça com que o Maven gere um JAR após a build

Adicione as linhas abaixo ao seu `pom.xml` dentro de `<plugins>` e faça as devidas adatações:

```
<plugin>
    <artifactId>maven-assembly-plugin</artifactId>
    <configuration>
        <descriptorRefs>
            <descriptorRef>jar-with-dependencies</descriptorRef>
        </descriptorRefs>
        <archive>
            <manifest>
                <mainClass>carlosborges.taskify.App</mainClass>
            </manifest>
        </archive>
    </configuration>
    <executions>
        <execution>
            <phase>package</phase>
            <goals>
                <goal>single</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

# Passo 5: Execute o projeto e verifique se está funcionando

## Execute o comando de *build*

```
mvn clean package
```

## Execute o projeto

```
java -jar target/taskify-api-1.0-SNAPSHOT-jar-with-dependencies.jar
```

## Corrija os problemas

Quando rodamos nosso projeto o seguinte texto aparece:

```
SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".
SLF4J: Defaulting to no-operation (NOP) logger implementation
SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
```

Isso quer dizer que nada está sendo *loggado* e isso é um problema. É importante que consigamos analisar o que está acontecendo com nossa aplicação. Para corrigir esse problema basta adicionar a dependência do SL4J no seu `pom.xml`:

```
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-simple</artifactId>
    <version>1.6.4</version>
</dependency>
```

## Compile e execute o servidor novamente

```
mvn clean package
java -jar target/taskify-api-1.0-SNAPSHOT-jar-with-dependencies.jar
```

## Verifique o resultado

Acesse [http://localhost:4567/][localhost] e verifique se o texto **Hello World** aparece na tela.

## Pronto

Pronto! Seu primeiro servidor web está rodando na sua máquina.


[java]:                 http://java.oracle.com
[maven]:                http://maven.apache.org/
[heroku-toolbelt]:      https://toolbelt.heroku.com/
[spark-java]:           http://sparkjava.com/  
[github]:               http://github.com/
[heroku]:               http://heroku.com/
[travisci]:             http://travis-ci.org/
[editorconfig]:         http://editorconfig.org/
[google]:               http://google.com/
[localhost]:            http://localhost:4567/
