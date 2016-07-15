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

```bash
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

# Passo 2: Crie o arquivo `.editorconfig` na raiz do projeto

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

# Passo 3: Adicione as dependências do Spark

Arquivo `pom.xml` dentro da tag `<dependencies>`

```xml
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-simple</artifactId>
    <version>1.6.4</version>
</dependency>
<dependency>
    <groupId>com.sparkjava</groupId>
    <artifactId>spark-core</artifactId>
    <version>2.5</version>
</dependency>
```

# Passo 4: Crie um GET simples

Arquivo `App.java`

```java
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

# Passo 5: Preencha os dados de compilação no Maven

Arquivo `pom.xml` dentro da tag raiz `<project>`

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.5.1</version>
            <configuration>
                <source>1.8</source>
                <target>1.8</target>
            </configuration>
        </plugin>
    </plugins>
</build>
```

# Passo 6: Faça o Maven gerar um JAR

Arquivo `pom.xml` dentro da tag `<plugins>`

```xml
<plugin>
    <artifactId>maven-assembly-plugin</artifactId>
    <configuration>
        <finalName>taskify-api</finalName>
        <descriptorRefs>
            <descriptorRef>jar-with-dependencies</descriptorRef>
        </descriptorRefs>
        <appendAssemblyId>false</appendAssemblyId>
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

# Passo 7: Compile o projeto

```
mvn clean package
```

# Passo 8: Execute o servidor web

```
java -jar target/taskify-api.jar
```

# Passo 9: Verifique o resultado

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
