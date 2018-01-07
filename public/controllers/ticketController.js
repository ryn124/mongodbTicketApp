app.controller("ticketController", function($scope, $state, $stateParams, ticketService) {

  $scope.ticketSearch = "";

  if($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
    $scope.submitButton = true;
    $scope.heading = "Create A Ticket!"

    ticketService.getTicketById($stateParams.id, function(ticket) {
      $scope.ticket = ticket;
    })
  }
  else {
    $scope.submitButton = false;
    $scope.heading = "Update Ticket"

    ticketService.getTicketById($stateParams.id, function(ticket) {
      $scope.ticket = ticket;
    })
  }

  ticketService.getTickets()
    .then(function(response) {
      $scope.tickets = response.data
    },
    function(error) {
      console.log(error);
    })

  $scope.addTicket = function() {
    ticketService.addTicket($scope.ticket)
      .then(function(response) {
        console.log(response.data);
        $state.go('ticketsShow', {id: response.data._id})
      },
      function(error) {
        console.log(error);
      })
  }

  $scope.updateTicket = function() {
    ticketService.updateTicket($scope.ticket)
      .then(function(response) {
        $state.go('ticketsShow', {id: response.data._id})
      },
      function(error) {
        console.log(error);
      })
  }

  $scope.deleteTicket = function() {
    ticketService.deleteTicket($stateParams.id)
      .then(function(response) {
        $state.go('tickets')
      },
      function(error) {
        console.log(error);
      })
  }
});
