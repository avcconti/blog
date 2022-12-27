---
title: "Five-Stage Model of Adult Skill Acquisition"
description: Resumen de las etapas que Stuart E. Dreyfus describe en su artículo de 2004, las cuales acompaño con ejemplos de mi día a día en desarrollo, testing y gestión.
tags:
    - skills
    - acquisition
    - engineering

image: /img/2022/five-stages-intuition_mastery.png
imageAlt: Hand putting wooden blocks in stair form
date: 2022-12-22
layout: layouts/post.njk
# eleventyExcludeFromCollections: false
# permalink: true
---

Hace unos días me compartieron por el Slack de la empresa un artículo del cual desconocía su existencia, se llama _"The Five-Stage Model of Adult Skill Acquisition"_ y lo podéis encontrar en [Google](https://www.google.com/search?q=five+stage+model+of+adult+acquisition&oq=five+stage+model+of+adult+acquisition&aqs=chrome..69i57j69i60.6076j0j7&sourceid=chrome&ie=UTF-8), [Wikipedia] o directamente [aquí](https://www.bumc.bu.edu/facdev-medicine/files/2012/03/Dreyfus-skill-level.pdf). El autor, _Stuart E. Dreyfus_, divulga en el artículo acerca de un modelo base sobre las etapas por las que pasamos cuando adquirimos habilidades y conocimiento.

Este asunto, el de _aprender_, es algo que siempre me ha llamado la atención, porque es fácil encontrar en nuestro entorno a personas que aprenden de diferentes maneras y a diferentes velocidades. A esto podemos sumarle que en los estudios primarios (colegio e instituto) no nos enseñan ni a estudiar ni a aprender, lo cual hace que sea muy fácil que nos saturemos o agobiemos cuando queremos aprender algo nuevo, o simplemente cuando metemos la cabeza de lleno en un tema concreto y vemos que hay más de lo que pensábamos.

La lectura del artículo es muy amena, y _Dreyfus_ usa la conducción de vehículos y el ajedrez para ejemplificar caada etapa del modelo, lo cual ayuda a entender de manera rápida el nivel que describe. Después de completar la lectura me pareció que sería un ejercicio divertido pensar en ejemplos de mi día a día para acompañar a estas etapas del modelo, y esto mismo fue lo que me empujó a escribir esta publicación.

## Stage 1: Novice

Bajo un entorno en el que no existe ni se fuerza contexto, nos enseñan reglas que al seguirlas nos llevan a un resultado concreto, muy similar a cuando un ordenador sigue las instrucciones que se le pasan sin rechistar.
## Stage 2: Advanced Beginner

Esta etapa es probablemente donde pasamos más tiempo, ya que es donde adquirimos experiencia viviendo y peleando con situaciones reales, loq ue me gusta llamar "la calle". Nos damos cuenta de que seguir las reglas de la etapa anterior no siempre es la mejor solución, de manera que comenzamos a adaptarlas, o incluso apartarlas, a medida que conocemos el contexto en el que nos movemos.
## Stage 3: Competence

Llegados a este punto hemos adquirido la suficiente experiencia como para profundizar en la propia habilidad, el problema es que esa experiencia nos abre la puerta a entender que sólo estábamos rascando la punta del iceberg, y que realmente son muchas más las variables a tener en cuenta en el buen aprendizaje del tema, por lo que es fácil sentirse abrumado.

En esta etapa desarrollamos la habilidad para filtrar el conocimiento que nos es realmente útil en el contexto que nos movemos, y en base a eso la toma de decisiones se vuelve más sencilla, además comenzamos a construir nuestras propias reglas y procesos para continuar con el aprendizaje.

En las etapas anteriores, si cometíamos fallos nos excusábamos en las reglas que aprendimos en su momento, pero ahora somos responsables directos de esas decisiones, para lo bueno y para lo malo, por lo que nos involucramos emocionalmente más.
## Stage 4: Proficiency

Si llegas aquí es porque has peleado con la ansiedad que genera la mera capacidad de tomar decisiones y ser responsable directo de ellas, la adoptas como parte del proceso. Las emociones que se generan, tanto con las decisiones buenas como con las malas, reforzarán nuestra capacidad para abrazar e inhibir las diferentes perspectivas con las que miremos el problema en cuestión.

Nuestra capacidad para entender el objetivo a alcanzar es grande, pero no así la capacidad de saber cómo llegar hasta él.
## Stage 5: Expertise

Si en la anterior etapa no teníamos claro como llegar al objetivo, es aquí donde se demuestra la maestría sabiendo de primeras cómo vamos a llegar hasta el final, podríamos decir que la respuesta es inmediata e intuitiva. Esto es así gracias a la gran capacidad de discriminación que hemos adquirido, que nos permite seleccionar rápidamente aquel conocimiento que sí/no es válido para el contexto.

Un experto no calcula, tampoco resuelve problemas, ni siquiera piensa, hace  lo que normalmente funciona, y funciona.
## Representación visual de las etapas

![The five stage model for adult skill acquisition by Stuart E. Dryfus, grpahical representation](/img/2022/five-stages-model_table.png)

## Ejemplos aplicados a mi entorno diario

A continuación describo los diferentes ejemplos en los que he podio pensar para intentar desgranar mejor cada nivel:

| Level | Dev | Testing | Management |
| --- | --- | --- | --- |
| Novice | Cuando haces un curso/bootcamp y sigues las reglas aprendidas a modo de religión | Asserts de happy paths | Sigues las reglas del anterior manager |
| Advance Beginner | Vemos que las reglas no siempre nos valen y empezamos a copiar y pegar de stackoverflow sin saber si lo conseguiremos. | Empezamos a cubrir caminos peligrosos, buscamos romper nuestro código tras cada commit, aportando el respectivo mantenimiento de tests | Ya te has encontrado con la primera en la frente, y empiezas a tomar tus propias decisiones. |
| Competence | Cogemos el código de stackoverflow como idea, pero la decisión final de implementación la tomamos nosotros. | Conocer distintas técnicas de testing, y ser capaz de implementarlas, hace que nos replanteemos el código del software escrito. | Consciente de que manejar personas es más complicado que manejar código, empiezas a buscar inspiración en otras personas para copiar y mejorar, buscando tus propios procesos. |
| Proficiency | Sabemos lo que queremos conseguir, es fácil salir de la zona de confort y define las reglas que el equipo debe seguir para alcanzar los objetivos de la manera más eficiente. | Gran capacidad para decidir qué porción del código es necesario probar y de escribir tests independientes de la implementación. | Construyes y planificas en tu cabeza el avance de carrera quieres para tu equipo. No escribes libros, pero tu gestión disminuye a 0 el nivel de rotación del equipo de ingeniería.  |
| Expertise | Eres un maestro de la intuición, tienes tus propias reglas ,cuestionas las “buenas prácticas” y evalúa el peso de sus decisiones con la máxima certidumbre. | Tiene argumentos y experiencia para decidir si TDD es una buena opción para el proyecto, y en caso positivo, implementarlo sin fricción. | Te piden un aumento de sueldo injustificado y eres capaz de contraargumentar en ese momento con ejemplos y situaciones. |

El modelo, a pesar de no ser perfecto, creo que describe bien las diferentes etapas de aprendizaje por las que podemos pasar, y resalta el papel fundamental que juega la experiencia e intuición e nuestro aprendizaje continuo.
