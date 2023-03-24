---
title: "OWASP Vulnerable Web Applications"
description: Salimos a la caza y captura de aplicaciones web vulnerables, que han sido preparadas a propósito para entrenar y practicar los conocimientos de seguridad que vamos adquiriendo.
tags:
    - security
    - owasp
    - web
    - directory
image: /img/2023/owasp-carraca.jpeg
imageAlt:
date: 2023-03-28
layout: layouts/post.njk
# eleventyExcludeFromCollections: false
# permalink: true
permalink: "/{{ title | slug }}/"
---

En la [compañía](https://producthackers.com/es/) en la que trabajo actualmente, tenemos los _devs_ la sana constumbre de juntarnos todos los jueves una horita para hablar de "nuestras cosas", ya sabéis, y hace poco me toco a mí y quise levantar una baldosa que no todos sabían que estaba allí, y era la del entrenamiento en **ataque y fortificación** de web apps, a nivel introductorio por supuesto.

De entre mis fuentes de información fiables estuvo siempre [OWASP](https://owasp.org/), que para el que no sepa, es una organización sin ánimo de lucro que se dedicar a trabajar y **divulgar** en aras a **mejorar la seguridad** del software. De entre los proyectos más famosos está el [Top 10](https://owasp.org/www-project-top-ten/), que es el listado de las 10 **vulnerabilidades más críticas** existentes a tener en cuenta cuando desarrollamos, o cuando la queremos integrar dentro de nuestra organizaciñon o infraestructura.

Tan interesante es ver el Top 10 como querer practicar y probar si puedes llevar a cabo ese tipo de ataques, aunque la mayoría de ellos son complejos y requieren de una preparación y analisis previo solo al alcance de profesionales del sector. No obstante siempre hay cabida para el aprendizaje de técnicas más sencilla, y eso es lo que me vino a la mente no hace mucho, quería _cacharrear_ un rato, y me dije _"necesito web apps vulnerables para probar algunas cosas, ¿de dónde las saco?"_. Había otro requisito a mi búsqueda, que las apps en si puediesen arrancar directamente con **Docker**, mi época de lanzar comandos para arrancar todos los procesos habidos y por haber se acabó, si hay que hacer un _SQL Injection_ va a tener que ser con un _mysql_ arracando en _Docker_.

## OWASP Vulnerable web applications directory
No sabía por donde empezar, así que le hice esta consulta a nuestro amigo [Google](https://www.google.com/search?q=owasp+vulnerable+apps&oq=owasp+vulnerable+apps) y el primer resultado fue precisamente el mejor punto de partida que pude tener, un [directorio oficial de OWASP](https://owasp.org/www-project-vulnerable-web-applications-directory/#) con aplicaciones vulnerables.
![OWASP vulnerable web applications directory](/img/2023/owasp-vulnerable-apps-directory.png)
El directorio es sencillo de explorar y gracias a los detalles, como el de el _badge_ de Github, podemos ver rápidamente si realmente nos interesa alguno de ellos. No todos son **código abierto**, pero el surtido de aquellos que sí lo son es bastante amplio, otra cosa es que tengan un mantenimiento reciente.

Antes dije que me sirvió como punto de partida, ya que si bien podría no interesarnos ninguno de los proyectos del directorio, podemos usar la información de estos proyectos en _Github_ para seguir con la exploración. Y esto nos lleva al siguiente punto.

## Github tags
Si visitamos el proyecto [VAmPI](https://github.com/erev0s/VAmPI) (API vulnerable) y dirijimos la mirada hacia la derecha, podemos ver que está bastante bien etiquetado.
![VAmPI vulnerable API](/img/2023/owasp-vulnerable-web-app-tag.png)
Si hacemos click en esa etiqueta, nos lleva directamente al [listado de proyectos](https://github.com/topics/vulnerable-web-app) que han sido etiquetados de la misma manera. Es decir, del listado curado de OWASP que hemos visto antes hemos llegado a otro más amplio, así que seguro que seguro que encontramos algo que nos seduzca.

## Pack de ejercicios
Explorando la etiqueta mencionada anteriormente me encontré con [esta perla](https://github.com/SasanLabs/VulnerableApp). Es una suite de entrenamiento que está dividida en niveles, y tiene ejercicios relacinoados con las vulnerabilidades más comunes y con las que más se ha trasteado: _SQL injection_ , _XSS_, _SSRF_ , etc. Sin duda un acierto para estar entretenido durante unas buenas jornadas.
![Training pack with XSS, SQL Injection and more](/img/2023/owasp-vulnerable-app.png)

## SQL injection
Yo buscaba algo más tradicional y sencillo, aunque el pack de entrenamiento visto en el anterior punto me parece super interesante. Seguí buscando y me encontré con algo que encajaba en mi objetivo final. [Este repo](https://github.com/appsecco/sqlinjection-training-app) contiene una app PHP vulnerable, usando MySQL como almacenamiento de datos, y lo **más importante**, fácilmente arrancable y configurable con Docker, lo cual hace que sea super rápido ponerte manos a la obra.

¡A jugar!




