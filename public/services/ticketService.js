app.service("ticketService", function($http) {

  this.getTickets = function() {
    return $http.get('./api/tickets')
  }

  this.getTicketById = function(id, cb) {
    if(id == "" || id == undefined || id == null) {
      var ticket = {
        artistName: "",
        date: "",
        price: "",
        section: "",
        row: "",
        seat: ""
      }

      cb(ticket)
    }
    else {
      $http.get('./api/tickets/' + id)
        .then(function(response) {
          console.log(response.data);
          cb(response.data);
        },
        function(error) {
          console.log(error);
        })
    }
  }

  this.addTicket = function(ticket) {
    return $http.post('./api/tickets', ticket)
  }

  this.updateTicket = function(ticket) {
    return $http.put('./api/tickets/' + ticket._id, ticket)
  }

  this.deleteTicket = function(id) {
    return $http.delete('./api/tickets/' + id)
  }

})
