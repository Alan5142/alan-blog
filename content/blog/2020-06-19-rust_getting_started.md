---
title: Iniciando con Rust
year: 2020
month: 06
day: 19
hour: 00:58
excerpt: Rust es un lenguaje de programación que ha estado creciendo en popularidad y con buenas razones, he decidido probarlo y te comparto un breve resúmen de este lenguaje y algunas de mis opiniones respecto a este lenguaje
picture: /images/blog/rust_getting_started/Rust.png
---

Un lenguaje que ha estado tomando muchísima fuerza es [Rust](https://rust-lang.org) y esto lleva varios años,
basta con ver la developer survey de [Stack Overflow](https://insights.stackoverflow.com/survey/2019#technology-_-most-loved-dreaded-and-wanted-languages) del 2019 para ver que es un lenguaje muy querido por los desarrolladores.

Ahora bien, ¿qué tiene de especial este lenguaje de programación?, ¡pues mucho!, Rust está diseñado para ser un lenguaje de programación de sistemas
(en la misma categoría que C, C++, D, Go), pero tiene algunas características muy interesantes:
* Está diseñado para ser seguro
* Está diseñado para ser concurrente
* No tiene recolector de basura

Y, desde mi punto de vista, es un lenguaje que ha venido para quedarse y creo que la etiqueta de "moderno" le queda muy bien :)

# Contenido
1. [Breve historia del lenguaje](#history) 📖
1. [Instalando Rust](#install) 💽
1. [¡Hola mundo!](#hello-world) 🌎
1. [Mis opiniones](#thoughts) 🤔

<br>
<h1 id="history">Breve historia del lenguaje</h1>

Rust inicio como un proyecto personal de Graydon Hoare y se mantuvo de esta forma durante tres años, no fue sino hasta 2009 que Mozilla se iteresó en el proyecto
y se metió al desarrollo de este proyecto.

En 2010 Mozilla dio a conocer este proyecto al público y este mismo año se empezó a implementar el compilador de Rust en Rust, anteriormente estaba escrito en OCaml y
fue hasta 2011 que por fin ```rustc``` pudo compilarse a si mismo :)

La primera versión alfa de Rust salió en 2012 y la primera versión estable salió hasta 2015 🎉

La versión más nueva a día de hoy es la 1.44.0

<br>
<h1 id="install">Instalando Rust</h1>

El proceso de instalación de Rust es muy sencillo, basta con descargar [rustup](https://www.rust-lang.org/tools/install) de la página oficial,
en el caso de Windows (que es el sistema operativo que utilizo principalmente), abrirá una ventana y tendrá el siguiente contenido:

```bash
Current installation options:


   default host triple: x86_64-pc-windows-msvc
     default toolchain: stable
               profile: default
  modify PATH variable: yes

1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
```

Podemos personalizar varias cosas, una de las principales es el host triple, el host triple sirve para indicar las siguientes cosas:
* Arquitectura 🏛
* Sistema operativo 💿
* Otras cuestiones, como utilizar msvc o gnu en el caso de Windows o utilizar glibc o musl en Linux 🔧
Y para instalarlo basta con escribir ``1`` y presionar ``ENTER``


<br>

Y si queremos actualizar Rust, el proceso es muy sencillo, pues basta con ejecutar el siguiente comando: 👉 ``rustup update``

<br>

<h1 id="hello-world">¡Hola mundo!</h1>

Escribir un hola mundo en Rust es muy sencillo, pues contamos con la herramienta _cargo_, cargo es el build system y gestor de paquetes de Rust,
con el podemos gestionar dependencias y compilar nuestro código.

Para crear un proyecto con cargo, basta con ejecutar el siguiente comando:
```powershell
cargo new [nombre del proyecto]
```

Esto creará una carpeta con el nombre del proyecto, vayamos creando uno llamado "hola_mundo":
```powershell
PS C:\rust> cargo new hello_world
Created binary (application) `hola_mundo` package
PS C:\rust> cd hello_world
PS C:\rust\hello_world>
```

Cargo habrá creado los siguientes archivos:
* .gitignore
* Cargo.toml 👈 aquí es donde van las dependencias y algunos datos del proyecto
* src/main.rs 👈 nuestro código

Analicemos el archivo ``Cargo.toml`` y ``main.rs``

Cargo.toml
```toml
[package]
name = "hola_mundo"
version = "0.1.0"
authors = ["Alan Ramírez Herrera <alan5142@hotmail.com>"]
edition = "2018"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
# Aquí van nuestras dependencias :)
```

Es importante mencionar que estas *NO* son todas las opciones, Rust cuenta con documentación [para esto](https://doc.rust-lang.org/cargo/reference/manifest.html)
* ``[package]`` indica que inicia un paquete (proyecto)
    * ``name`` es el nombre del paquete
    * ``verison`` es la versión del paquete
    * ``authors`` es una lista de las personas que son consideradas autores del proyecto
    * ``edition`` esta es importante, indica la edición de Rust que se utilizará, si no la especificamos por defecto utilizará 2015 (la primera versión estable)
* ``[dependencies]`` contiene todas las dependencias que queramos utilizar en nuestro proyecto, podemos especificar de donde descargarlo (por ejemplo, un repositorio en GitHub) o utilizar [crates.io](https://crates.io/)

Para agregar dependencias basta con listarla debajo de ``[dependencies]``, por ejemplo, si queremos instalar gfx (una API gráfica), basta con hacer esto:

```toml
[dependencies]
gfx = "0.18.2" # Esta es la versión
```

¡Eso es todo!, compilamos nuestro programa y ``cargo`` buscará las nuevas dependencias y las instalará, ¿no es genial?

Ahora si, ¿y cómo se ve un hola mundo?

```rust
fn main() {
    println!("Hello world");
}
```

Si queremos compilarlo utilizamos ``cargo build`` en la raíz del proyecto y si queremos ejecutarlo, utilizamos ``cargo run``;
al compilarlo se crea una carpeta llamada _target_, ahí se encuentran los resultados de haber compilado nuestro programa

De aquí podemos observar varías cosas: 
* Las funciones inician con la palabra reservada ``fn``
* Al igual que en C++, la función principal se llama ``main``
* Se utilizan llaves para delimitar bloques
* Para mostrar en pantalla, utilizamos ``println!``

Rust tiene algunas otras diferencias comparado con otros lenguajes, pero son fáciles de entender, veamos otro ejemplo.
```rust
fn sentido_de_la_vida() -> i32 {
    42
}

fn main() {
    let num = sentido_de_la_vida();
    if num != 42 {
        println!("Oops, hay algo mal :(");
    } else {
        println!("Todo esta perfecto");
    }
}
```

Efectuamos ``cargo run`` y mostrará lo siguiente (puedes verlo [aquí](https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&gist=206bf3a15a779ef8b8596d587a48179c)👈)
```powershell
Todo esta perfecto
```

<h1 id="thoughts">Mis opiniones</h1>

## Lo bueno

¡Rust es un lenguaje mágnifico!, y no solo eso, viniendo de C++ la adopción ha sido muy sencilla y creo que esto es un punto bastante fuerte del lenguaje,
quizá llega a ser un poco molesto la cantidad de veces que ``rustc`` no te permite compilar pero lo hace con mucha razón: el compilador de rust
es uno de sus puntos más fuertes, los mensajes son muy claros, te indica dónde puede estar el error y posiblemente como solucionarlo y muchas
veces te impide realizar acciones que puedan suponer un riesgo (como utilizar una variable que ya ha sido movida), simplemente es una maravilla 😎.

Además, hay algunas cosas que me gustaría que C++ tuviera:
* Que los compiladores sean más amigables con los errores (especialmente con los errores del _linker_ y con las templates)
* Un géstor de paquetes (aunque lentamente la situación está mejorando con herramientas como [vcpkg](https://github.com/Microsoft/vcpkg) y [conan](https://conan.io/))
* Los traits :( (aunque los _Concepts_ de C++20 pueden ayudar en esto)
* ¡Los tiempos de compilación!, cuando he utilizado _Boost_, específicamente Asio y Beast, los tiempos de compilación son exageradamente grandes (principalmente por culpa de las templates)


## Lo malo

Creo que es un lenguaje aún muy nuevo, falta que más proyectos lo utilicen de manera seria, pero estoy seguro de que esa situación cambiará en un futuro para bien


## Sin clasificar

Creo que el lenguaje llego para quedarse, sin embargo, no creo que sustituya a C ni sea un _C++ killer_, creo que cada lenguaje tiene su espacio.

Y finalmente, creo que todos deberían probar Rust, pues creo que es un lenguaje moderno que demuestra que no se necesita un recolector de basura para
ser seguro y, creo que ha hecho muchísimos aciertos en cuanto al diseño de este.

<br>
<br>
Finalmente, me gustaría saber, ¿ustedes ya han probado Rust?, ¿qué opinan?, deja un comentario o envíame un mensaje.

¡Hasta la próxima!
