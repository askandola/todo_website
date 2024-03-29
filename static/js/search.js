function filterTodos() {
  // Declare variables
  var input, filter, table, tr, td, i, j, txtValue, curr;
  input = document.getElementById("searchbar");
  filter = input.value.toUpperCase();
  table = document.getElementById("todos");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for(j = 0; j < 2; j++) {
      if(td[j]) {
        txtValue = td[j].textContent || td[j].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}
const input = document.querySelector('input[type="search"]');
input.addEventListener("search", filterTodos);