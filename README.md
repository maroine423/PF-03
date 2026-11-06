# PF03 - Actividad 1: TDD con Node.js, Vitest y CI

## Objetivo

Desarrollar dos funciones aplicando TDD (Red → Green → Refactor),
revisando el trabajo del compañero mediante Pull Requests y
automatizando las pruebas con GitHub Actions.

## Funciones

- `fibonacci(n)`: devuelve el término n de la sucesión de Fibonacci
  (enteros de 0 a 78).
- `esPinValido(pin)`: comprueba que un PIN sea una cadena de 4 o 6
  dígitos y que no sean todos iguales.

## Requisitos

- Node.js 24 LTS

## Instalación

    npm ci

## Pruebas

    npm test

Ejecuta una pasada completa de Vitest y termina.

## Integración continua

GitHub Actions ejecuta `npm ci` y `npm test` en cada push a las
ramas del flujo y en cada Pull Request hacia `feature-code`,
`development` y `main`.