# PF03 A1 - TDD con Node.js, Vitest y CI
## Descripción
Proyecto de pruebas de software mediante TDD (Test-Driven Development), utilizando Node.js 24, Vitest y GitHub Actions.
El proyecto implementa dos funciones:

- `fibonacci(n)`: calcula el término de Fibonacci indicado.
- `esPinValido(pin)`: comprueba si un PIN cumple las condiciones establecidas.
## Tecnologías utilizadas

- Node.js 24 LTS
- JavaScript ES Modules
- Vitest
- Git y GitHub
- GitHub Actions
## Instalación
Clonar el repositorio y ejecutar:
```bash
npm ci
```
## Ejecución de pruebas
Para ejecutar todos los tests:

```bash
npm test
```
Para ejecutar Vitest en modo observación:
```bash
npm run test:watch
```
## Desarrollo mediante TDD
Se aplica el ciclo:
1. Red: escribir pruebas que inicialmente fallan.
2. Green: implementar el código necesario para superar las pruebas.
3. Refactor: mejorar el código manteniendo todas las pruebas superadas.

## Autoría y reparto del trabajo

Actividad realizada individualmente.
- Alumno/a A: [Marwane] 

## Integración continua
GitHub Actions ejecuta automáticamente las pruebas mediante Node.js 24, `npm ci` y `npm test`.