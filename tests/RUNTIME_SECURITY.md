# Herramientas de desarrollo fuera del runtime

`ts-node-dev` pasa a `devDependencies`. Se elimina el paquete npm `tsc`, que no
es el compilador TypeScript. El script de compilación usa explícitamente
`node node_modules/typescript/bin/tsc`; los comandos de desarrollo se conservan.
No se modifican contratos, exports ni implementación compilada.

Se retiran también `se_configbase` y el alias `@types/se_configbase`: no existen
imports a ese paquete en las fuentes, módulos distribuidos ni declaraciones.
Ese vínculo sin uso producía un ciclo Git que reinstalaba Nodemailer antiguo y
las herramientas retiradas. La dirección inversa, configbase hacia holder, sí
es necesaria en runtime y se conserva en el otro repositorio.

```sh
node --test tests/runtime-dependencies.test.cjs tests/runtime-exports.test.cjs
npm run tsc
```

La prueba de declaraciones falló antes del cambio y pasó después, tanto en
Node 22.22.2 como en Node 24.22.2 aislado sin red. La compilación y los
consumidores MS01/CH01 se comprobaron en un fixture compuesto externo.
Tras retirar el vínculo sin uso, el lock nuevo no tiene dependencias Git y su
instalación `--omit=dev` no contiene configbase, Nodemailer ni compiladores.
La carga real del entrypoint distribuido en Node 24.22.2, sin red y con ese árbol
de producción, preservó sus 30 exports. La suite final pasó 4/4.
Todavía resta integrar este commit y actualizar deliberadamente el lock de
configbase y de los consumidores; los locks antiguos de ellos siguen pendientes.
