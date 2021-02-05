# HAPI FHIR Playground: Basic Test App

This project is a skeleton project for querying data from the [HAPI FHIR public test server](https://hapi.fhir.org/baseR4)

## DEMO:

https://fhir-3db34.web.app/home

### PERFORMANCE:

![lighthouse-screenshot](https://dsc.cloud/f89b77/Screen-Shot-2021-02-04-22-18-01.03.png)

### Features:

1. Created pages module
2. Created standardized shared ui component module using content projection
3. Created home screen with angular material table
4. Added patient information page with patient intake form — Intake form is dynamically rendered with form builder and angular material. Output is rendered dynamically in response component.
5. Upgraded project to Angular 11 solved security audit issue with npm packages. Can run project with hot module reloading
6. Added page routing with individual page modules
7. Added lazy loading support
8. Added loader when user navigates to a lazy loaded page
9. Added AOT compilation and completed performance optimization
10. Reduced production application size, removed compiler from production build
11. Responsive layout for mobile device
