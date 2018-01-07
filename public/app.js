var app = angular.module("ticketApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider.state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })

    // USERS
    .state("users", {
      url: '/users',
      templateUrl: "./views/users.html",
      controller: "userController"
    })
        .state("usersNew", {
          url: '/users/new',
          templateUrl: "./views/users-form.html",
          controller: "userController"
        })
        .state("usersShow", {
          url: '/users/:id',
          templateUrl: "./views/user.html",
          controller: "userController"
        })
        .state("usersUpdate", {
          url: '/users/:id/edit',
          templateUrl: "./views/users-form.html",
          controller: "userController"
        })

    // TICKETS
    .state("tickets", {
      url: "/tickets",
      templateUrl: "./views/tickets.html",
      controller: "ticketController"
    })
        .state("ticketsNew", {
          url: "/tickets/new",
          templateUrl: "./views/tickets-form.html",
          controller: "ticketController"
        })
        .state("ticketsShow", {
          url: "/tickets/:id",
          templateUrl: "./views/ticket.html",
          controller: "ticketController"
        })
        .state("ticketsUpdate", {
          url: "/tickets/:id/edit",
          templateUrl: "./views/tickets-form.html",
          controller: "ticketController"
        })

    // SHOWS
    .state("shows", {
      url: "/shows",
      templateUrl: "./views/shows.html",
      controller: "showController"
    })
        .state("showsNew", {
          url: "/shows/new",
          templateUrl: "./views/shows-form.html",
          controller: "showController"
        })
        .state("showsShow", {
          url: "/shows/:id",
          templateUrl: "./views/show.html",
          controller: "showController"
        })
        .state("showsUpdate", {
          url: "/shows/:id/edit",
          templateUrl: "./views/shows-form.html",
          controller: "showController"
        })

    // ARTISTS
    .state("artists", {
      url: "/artists",
      templateUrl: "./views/artists.html",
      controller: "artistController"
    })
        .state("artistsNew", {
          url: "/artists/new",
          templateUrl: "./views/artists-form.html",
          controller: "artistController"
        })
        .state("artistsShow", {
          url: "/artists/:id",
          templateUrl: "./views/artist.html",
          controller: "artistController"
        })
        .state("artistsUpdate", {
          url: "/artists/:id/edit",
          templateUrl: "./views/artists-form.html",
          controller: "artistController"
        })

    // TOURS
    .state("tours", {
      url: "/tours",
      templateUrl: "./views/tours.html",
      controller: "tourController"
    })
        .state("toursNew", {
          url: "/tours/new",
          templateUrl: "./views/tours-form.html",
          controller: "tourController"
        })
        .state("toursShow", {
          url: "/tours/:id",
          templateUrl: "./views/tour.html",
          controller: "tourController"
        })
        .state("toursUpdate", {
          url: "/tours/:id/edit",
          templateUrl: "./views/tours-form.html",
          controller: "tourController"
        })
})
