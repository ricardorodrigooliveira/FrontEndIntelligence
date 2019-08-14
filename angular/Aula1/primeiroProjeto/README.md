# Introdução ao Angular

## Como surgiu?

  * Foi criado por *Misko Hevery* e Adams Abrons em *2009*.
  
  * Inicialmente, o projeto tinha como objetivo facilitar a criação de aplicações web.
  
  * Alguns anos depois Misko foi trabalhar no Google, no projeto do Google Feedback, e
  ele encontrou um cenário um pouco complicado: o projeto já contava com 17.000
  linhas de código. Depois de alguns meses de trabalho ele decidiu fazer uma aposta
  com seu gerente. Ele apostou que reescreveria o código do projeto em 2 semanas,
  contanto que pudesse utilizar o framework que tinha desenvolvido. Eles terminaram
  de reescrever o código em 3 semanas, mas reduziu o projeto para 1.500 linhas! Com
  isso, aos poucos o Google foi adotando o framework para outro projetos internos. Em
  2014, foi divulgado que mais de 110 projetos do Google utilizam o AngularJS.

## O AngularJS morreu?
  ![imgMorteAng](https://github.com/ricardorodrigooliveira/FrontEndIntelligence/blob/master/angular/Aula1/primeiroProjeto/src/assets/killAngular.JPG)

## O que é o angular cli?
  ![criaAngular](https://github.com/ricardorodrigooliveira/FrontEndIntelligence/blob/master/angular/Aula1/primeiroProjeto/src/assets/criacaoAngular.JPG)

  O Angular CLI é uma ferramenta open source desenvolvida pelo próprio time do Angular e é utilizado para facilitar a criação de componentes, classes,services e outros.
  
  O Angular CLI facilita a criação de um aplicativo que já funciona, assim que
  sai da caixa. Seguindo as melhores práticas!

## Pré-requisitos do Angular CLI

  * Node 6.9.0 ou superior e o NPM 3 ou superior.

## Como instalar o Angular CLI?

  npm install -g @angular/cli
  
  ![install](https://github.com/ricardorodrigooliveira/FrontEndIntelligence/blob/master/angular/Aula1/primeiroProjeto/src/assets/install.jpg)

## Comandos principais (ng new)

  * ng new nome_do_comando
  
  * Este comando cria um novo projeto, totalmente pronto para ser utilizado.

  * Obs: Após finalizar este comando é importante executar o comando npm install ou npm i para que as
dependências sejam instaladas.

## Comandos principais (ng generate)

  * ng generate component nome_do_meu_component

  * Este comando gera um novo component, e atualiza os modules para que ele esteja pronto para uso.

## Comandos principais (ng generate)

  * ng generate service nome_do_meu_service
    
  * Este comando gera um novo service, e atualiza os modules para que esteja pronto para uso.

  ![typeScript](https://github.com/ricardorodrigooliveira/FrontEndIntelligence/blob/master/angular/Aula1/primeiroProjeto/src/assets/typeScript.jpg)

## O que é TypeScript?

  * TypeScript é um super conjunto da linguagem JavaScript que fornece classes,
    interfaces e tipagem estática opcional.

# Primeiro desafio

  * Clicar em uma imagem e remover ela do array.
