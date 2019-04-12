function getLongDate() {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var today = new Date();
  var dd = today.getDate();
  var mm = months[today.getMonth()];
  var yyyy = today.getFullYear();
  today = dd + ' ' + mm + ' ' + yyyy;
  return today;
}
