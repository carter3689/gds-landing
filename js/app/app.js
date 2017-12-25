var app = angular.module("gdsMain", [])

app.controller("ourServices", function($scope){
  var services = {
    taxes:["Individual","Corporations","LLCs/LLPs","Non-Profit Organizations"],
    bookkeeping:["Accounts Payable & Receivables","Corporate Accounting","Payroll","Invoicing"],
    consulting:["Business Plan Setup","Social Media Development & Management","Marketing Strategies","Graphic Design Material","Incorporating Businesses"]
  }
  $scope.services = services;
})
