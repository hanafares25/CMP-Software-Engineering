function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteCell.appendChild(deleteButton);
        deleteButton.addEventListener('click', function (event) {
          event.preventDefault();
          deleteEmployee(item.id);
        });
        row.appendChild(deleteCell)

        tableBody.appendChild(row)
      })
    })
    .catch(error => console.error(error))
}

// TODO
// add event listener to submit button
document.querySelector('button[type="submit"]').addEventListener('click', (event) => {
    event.preventDefault();
    createEmployee();
  });

// TODO
// add event listener to delete button

// !! (Done in the fetch function above) !!


// document.getaddEventListener('click', function (event) {
//   if (event.target && event.target.classList.contains('deleteButton')) {
//     const employeeId = event.target.dataset.employeeId;
//     deleteEmployee(employeeId);
//   }
// });


// TODO
function createEmployee (){
  // get data from input field
  const employeeName = document.getElementById("name");
  const employeeID = document.getElementById("id");


  // send data to BE
  fetch('http://localhost:3000/api/v1/employee', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: employeeID.value,
      name: employeeName.value,
    }),
  }).then(() => {
    // call fetchEmployees
    fetchEmployees();
  });

}

// TODO
function deleteEmployee (id){
  // get id (already got it as an input parameter)
  // send id to BE
  fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: 'DELETE',}).then(() => {
      // call fetchEmployees
      fetchEmployees();
    });
  }

  



fetchEmployees()
