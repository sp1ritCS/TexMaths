 1. La barra de herramientas de TexMaths

Una vez la extensión TexMaths se ha instalado en LibreOffice, usted debe ver una nueva barra de herramientas en Writer, Impress y Draw. Ésta es la barra de herramientas de TexMaths. En Writer la barra de herramientas se compone de cuatro iconos mientras que en Impress y en Draw hay solamente tres.

En Writer dando clic sobre el icono más a la izquierda (aquel con el símbolo de Pi en azul) lanza la macro de ecuaciones de TexMaths. El segundo icono se usa para las ecuaciones TexMaths que son numeradas. El tercer icono abre el diálogo de "configuración del sistema"  de TexMaths. Finalmente el icono más a la derecha está asociado a la recompilación de las ecuaciones de TexMaths. Observe que en Impress y Draw el segundo icono no está presente.
 
 
 2. Comenzando con el editor de ecuaciones de TexMaths

Si LaTeX ya está instalado en su sistema, todo lo que tiene que hacer para iniciar TexMaths es dar clic sobre el icono de TexMaths de la barra de herramientas. TexMaths buscará los programas externos que usa para generar las ecuaciones LaTeX. Luego escriba algún código LaTeX en el campo de texto del editor de ecuaciones TexMaths y dé clic sobre el botón "LaTeX" para generar la imagen de la ecuación.

Por ejemplo: x(t) = \mu ^2 (t) debe producir la ecuación x(t)=µ²(t)

En la versión TexMaths 0.46, el editor de ecuaciones ofrece pestañas y bonotes para incrustar código LaTeX para más de 300 símbolos. Con sólo dar clic sobre el símbolo, el código LaTeX será insertado en la posición actual del cursor.


 3. Elección del formato de la imagen

TexMaths puede genera e insertar dos clases de imágenes en un documento LibreOffice. Para elegir el formato de la imagen use el selector localizado dentro del marco "Formato de Imagen".

El formato de imagen por defecto es el SVG o formato vectorial. Este permite que las ecuaciones LaTeX puedan cambiar de tamaño sin perder nitidez y no necesita que algún tipo especial de letra se instale en LibreOffice puesto que los símbolos matemáticos se dibujan usando simplemente curvas. Éste es el formato preferido (y por defecto) pero pueden existir algunos líos cuando se exportan documentos desde LibreOffice a versiones antiguas de MS Office como MS Office 2000 (ver abajo).

Otro formato de imagen soportado es el PNG y es un formato de imagen tipo escáner. En consecuencia, usted debe elegir la resolución de la imagen al usarlo. Mientras una resolución de 600 dpi es la resolución por defecto, usted puede elegir entre varios valores predefinidos. No debería existir problemas de compatibilidad cuando use el formato PNG al realizar la exportación del documento a MS Office.

Note que cada formato sólo está disponible si el programa externo correspondiente (dvisvgm para SVG y dvipng para PNG) está instalado en su sistema de cómputo con la ruta ajustada usando el diálogo de configuración de TeXMaths (Usualmente hecho cuando corre por primera vez). Al menos uno de esos dos programas se requiere para correr TexMaths.


 4. Tamaño de la fuente

TexMaths puede manejar distintos tamaños de caracteres para sus ecuaciones. Para cambiar el tamaño use el selector localizado dentro del marco "tamaño de fuente".

Usted puede elegir entre tamaños predefinidos de fuente o escribir el que prefiera si este no está en la lista.


 5. Transparencia
 
Usted puede cambiar la transparencia de la imagen de la ecuación marcando la caja de selección o "checkbox" en el dialogo de TexMaths. Esto puede ser útil cuando el fondo del documento no es el color blanco. La transparencia se puede usar con ambos formatos, tanto SVG como PNG.


 6. Tipo de ecuación

TexMaths puede generar tres tipos de ecuaciones LaTeX:
- ecuaciones tipo "display"
- ecuaciones en línea o renglón
- ecuaciones LaTeX

Para seleccionar el tipo de ecuación use el botón circular localizado dentro del marco "Tipo de Ecuación"

Para generar ecuaciones tipo "display" o ecuaciones en línea, todo lo que tiene que hacer es seleccionar el tipo adecuado de ecuación y luego escribir el texto de su ecuación en el campo de texto del diálogo de ecuaciones de TexMaths.

Ejemplo: para generar la letra griega alfa, escriba \alpha

Las ecuaciones en línea se obtienen de la misma forma, pero la diferencia es el estilo de ecuación generada, la cual se integra mejor con el texto que usted escribe. Por ejemplo, el índice sumatorio y el exponente se muestran delante del signo de suma y no debajo y encima como sucede en el estilo "display".
 
Ambas clases de ecuaciones son ideales para ecuaciones de una línea o renglón y para que la alineación dentro del texto sea correcta, pero en ellas no se puede manejar ecuaciones multilínea o ambientes LaTeX más generales. Para esa clase de ecuaciones, elija el tipo de ecuación "LaTeX" y escriba su ecuación dentro de las instrucciones \begin{} y \end{}. Usted puede usar cualquiera de las instrucciones del ambiente LaTeX.

Ejemplo: Escriba las siguientes líneas para mostrar una ecuación de tres líneas, alineadas en el signo igual.
\begin{align*}
x &= 1 \\
y &= 2x+1\\
&= 3\\
\end{align*}


 7. Nombre de ecuaciones
 
En el diálogo de ecuaciones TexMaths usted puede escribir una etiqueta en el campo de texto "Nombre". Esto se puede usar para recuperar una ecuación por su nombre y podría ayudar cuando utilice animaciones en Impress. 

 
 8. Genere ecuaciones LaTeX

Una vez escrita la ecuación usted puede generarla dando clic en el botón "LaTeX" del dialogo ecuaciones de TexMaths. Esto genera una imagen de su ecuación en el formato, tipo y tamaño que ha elegido. Puede elegir entre los compiladores LaTeX y XeLaTeX en el dialogo "Configuración de TexMaths".


 9. Numerando ecuaciones en Writer
 
El numerado de ecuaciones es tan sencillo como dar clic sobre el icono TexMaths Numbered Equations (u oprimiendo alguna combinación abreviada de teclas si ha definido alguna), escribir su ecuación y dar clic en el botón "LaTeX". Una ecuación centrada y numerada (con numeración a la izquierda o a la derecha) se inserta automáticamente en su documento Writer.

Usted puede igualmente seleccionar el espaciado que desee y leyenda en la pestaña de opciones del dialogo de configuración de TexMaths.


 10. Edición de ecuaciones LaTeX

Dentro de un documento LibreOffice, elija una imagen de ecuación (generada por TexMaths) y dé clic sobre el icono de ecuación TexMaths en la barra de herramientas de TexMaths (o use un método abreviado de teclas si lo ha definido). Esto muestra el diálogo de ecuaciones de TexMaths con el texto de la ecuación elegida. Edítelo y dé clic sobre el botón LaTeX para generar la ecuación modificada.

Usted puede incluso cerrar un documento, abrirlo nuevamente y editar sus ecuaciones grabadas.


 11. Texto para LaTeX en Writer
 
Escriba algún código LaTeX directamente dentro de un documento Writer (es decir, sin haber abierto el diálogo de TexMaths, elija el texto y dé clic sobre el icono de ecuaciones TexMaths ((o use un método abreviado de teclas si lo ha definido). El texto LaTeX elegido se convertirá en la imagen de su ecuación. El formato aplicado a la imagen como tamaño de la ecuación y el tipo son los que se han definido por defecto en las preferencias de TexMaths. 


 12. Preferencias


TexMaths viene con algunos ajustes por defecto. Si esos ajustes no llenan sus necesidades, usted puede cambiarlos usando el dialogo de preferencias de TexMaths el que se obtiene dando clic sobre el botón "Preferencias". Este dialogo permite cambiar el formato de la imagen, el tamaño de fuente, el tipo de ecuación, etc., para cada tipo de documento LibreOffice. Usted puede grabar su nueva configuración, restaurarla a la que viene por defecto o cargar ajustes ya guardados.


 13. Preámbulo LaTeX

Dando clic sobre el botón "Preámbulo" se muestra un diálogo de TexMaths denominado de la misma manera que le permite ajustar su preámbulo LaTeX.  Por ejemplo, para generar ecuaciones coloreadas, descomente las siguientes tres líneas del preámbulo por defecto, cambie los valores de color RGB como prefiera y guarde el preámbulo.

%\definecolor{fgcolor}{RGB}{0,0,255}
%\definecolor{bgcolor}{RGB}{255,0,0}
%\pagecolor{bgcolor}\color{fgcolor}

Ahora, cualquier ecuación nueva tendrá el esquema de color que ha definido en el preámbulo. Note que las ecuaciones con un color de fondo no tendrán color de fondo transparente nunca más, incluso si la opción de transparencia estuviese seleccionada. Entonces, usted debe remover el fondo coloreado si desea la transparencia.

A partir de TexMaths 0.38, las propiedades son almacenadas en las propiedades del documento. De esta forma cada documento puede tener su propio preámbulo. Note que el preámbulo por defecto es global y no puede cambiarse. Note, además, que LaTeX y XeLaTeX tienen diferente preámbulo.


 14. Comandos \input, \include y \usepackage
 
A partir de TexMaths 0.41, los comandos LaTeX \input e \include pueden usarse para insertar el contenido de un archivo de texto LaTeX (.tex). Se asume que los archivos de texto .tex serán puestos en el mismo directorio del documento que se está editando.

Ejemplo: En el documento my_doc.odt, el comando LaTeX:

\include{my_equations}

puede usarse para insertar el contenido del archivo LaTeX my_equations.tex supuesto que este archivo está localizado en el mismo directorio que my_doc.odt

Existe también la posibilidad de usar archivos personalizados .sty a partir del uso de comandos \usepackage.  Esos comandos tienen que ser insertos en el preámbulo y luego (si así lo desea) almacenados en el actual documento. Los archivos .sty se tienen que ubicar en el mismo directorio que el documento que edita.

Ejemplo: En el documento my_doc.odt, el documento de estilo my_style.sty se puede usar adicionando al preámbulo LaTeX el comando:

\usepackage{my_style}

El archivo my_style.sty tiene que ubicarse en el mismo directorio que my_doc.odt de otro modo no funcionará.


 15. Recompilación de ecuaciones TexMaths

Cuando un documento (en Writer, Impress o Draw) contiene muchas ecuaciones, puede ser útil cambiar su tamaño, transparencia, formato de imagen, etc, de una sola vez. Este es el propósito del macro de TexMaths "Recompilar ecuaciones".

Dando clic en el icono correspondiente de la barra de herramientas (el único con un engranaje) abre un diálogo en donde usted puede cambiar un número de parámetros de ecuación y el preámbulo. Si usted no desea cambiar un parámetro de la lista entonces elija la entrada '---' de la lista. Para cada caja de chequeo, elija el estado '-' si no desea cambiar el parámetro relacionado.

En cualquiera de los tres tipos de documentos, usted puede recompilar todas las ecuaciones desde el documento eligiendo la opción "Recompile todas las ecuaciones".

En los documentos Writer, eligiendo la opción "Recompile la ecuación elegida", usted puede elegir sólo recompilar las ecuaciones que están localizadas dentro del área de texto seleccionada. Note que debido a algunas limitaciones con las selecciones en LibreOffice, esta macro no recompila ecuaciones localizadas en tablas, cajas de texto, encabezados o pies. Si es necesario hacerlo tiene que realizar el proceso para cada ecuación editándola de la forma usual.

En los documentos Impress y Draw, eligiendo la recompilación de ecuaciones desde la opción deslizable, puede recompilar sólo ecuaciones que están localizadas dentro del deslizable actual.


 16. Diálogo de configuración
 
Dando clic sobre el tercer icono abre el diálogo de configuración de TexMaths. Dentro de la primera pestaña de este diálogo, puede cambiar las rutas de los archivos externos. Desde la versión de TexMaths 0.46, el archivo completo de rutas tiene que darse.

La segunda pestaña le permite elegir el compilador LaTeX (LaTeX o XeLaTeX, si el último está instalado y soportado por la versión del dvisvgm que usted usa. Note que el XeLaTeX no se puede usar para producir imágenes de ecuación PNG)

La tercera pestaña del diálogo "Configuración de TexMaths" permite definir algunos métodos abreviados de teclas para lanzar TexMaths. 

 
 17. Compatibilidad con ooolatex

A partir de la versión 0.34, TexMaths es compatible con ooolatex. Esto significa que si usted tiene un documento que contiene ecuaciones ooolatex, puede editar las ecuaciones seleccionándolas (una por una) y llamando la macro de ecuaciones TexMaths. Usted puede modificar el código LaTeX y regenerar la ecuación o en formato SVG o PNG como usted prefiera.


 18. Exportando documentos a MS Office
 
Si planea exportar sus documentos para MS Office (Word y Powerpoint, en cualquier versión), usted debe grabar sus documentos LibreOffice a formatos .doc y .ppt, NO a los formatos .docs o .pptx. Necesariamente, mientras LibreOffice puede producir estos formatos, las imágenes de ecuaciones son convertidas pobremente y tendrá problemas severos cuando se muestren en Word o Powerpoint.

Se recomienda, igualmente, ajustar la opción del alineamiento vertical en Word (en el diálogo de configuración TexMaths) si sus documentos Writer tienen que exportarse a Word. Esto mejorará muchísimo el alineamiento vertical en Word en las ecuaciones dentro del texto(?). Note que puede ser necesario incluso ajustar manualmente la alineación vertical de la ecuación en Word.

A partir de TexMaths 0.38, las ecuaciones exportadas de tipo SVG se dibujan muy bien en Word y Powerpoint 2003 y anteriores, pero no así en Word y Powerpoint 2000. Así si está trancado en esas versiones viejas, tendrá que usar el formato para exportación PNG.


 19. Combinaciones abreviadas de teclas

Para configurar las combinaciones de teclas tendientes a lanzar TexMaths con o sin numeración, dé clic sobre el botón de configuración de TexMaths en la barra de herramientas y defina sus combinaciones de tecla. Para ecuaciones sin numeración puede tener una única combinación para todas las aplicaciones o una diferente para cada una. Puesto que las ecuaciones numeradas sólo se pueden usar en Writer sólo hay una combinación de tecla para ello.

Dentro de el diálogo TexMaths usted puede usar las siguientes teclas o combinaciones de teclas:
- Esc para cerrar el diálogo sin generar una ecuación 
- Alt-L or Ctrl-L para generar una ecuación
- Alt-P or Ctrl-P para mostrar el diálogo de preferencias
- Alt-B or Ctrl-B para mostrar el diálogo del preámbulo


 20. Problemas conocidos
 
- El renderizado SVG es defectuoso en versiones de LibreOffice 3.x (las ecuaciones aparecen como si fuesen escritas en negrilla), pero trabaja bien en las versiones 4.x, 5.x y 6.x. Así si desea usar el formato SVG, se recomienda que actualice LibreOffice a cualquiera de las versiones 5.x o 6.x.

- TexMaths se puede usar en Apache Openoffice 3.4.x pero el renderizado SVG está completamente roto. Sin embargo, las ecuaciones en PNG se renderizan bien.

- TexMaths trabaja bien en Apache Openoffice 4.x (los formatos PNG y SVG).

- Las ecuaciones que incluyen comandos PSTricks no pueden renderizarse correctamente como imágenes PNG debido al programa dvipng. Aquí puede usar con seguridad el formato SVG.

- En Windows, se recomienda desactivar el renderizado OpenGL para LibreOffice (in Linux, OpenGL no trabaja del todo). Vaya a Herramientas/Opciones/Ver y desactive el uso de OpenGL para todas las opciones de renderizado. Así tendrá un LibreOffice más estable y con un renderizado SVG mejorado.
