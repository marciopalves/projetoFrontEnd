var angular;
var app = angular.module("App", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html"
        })
        .when("/identificador", {
            templateUrl: "templates/identificador.html"
        })
        .when("/nome", {
            templateUrl: "templates/nome.html"
        })
        .when("/dadosDemograficos", {
            templateUrl: "templates/dadosDemograficos.html"
        })
        .when("/endereco", {
            templateUrl: "templates/endereco.html"
        })
        .when("/comunicacoes", {
            templateUrl: "templates/comunicacoes.html"
        })
        .when("/vinculo", {
            templateUrl: "templates/vinculo.html"
        })
        .otherwise({redirectTo : "/"});
});