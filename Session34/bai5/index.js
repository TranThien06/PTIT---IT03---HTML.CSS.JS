
document.addEventListener('DOMContentLoaded', loadStaff);

function addStaff() {
    const nameInput = document.getElementById('nameInput');
    const positionInput = document.getElementById('positionInput');
    const name = nameInput.value.trim();
    const position = positionInput.value.trim();

    if (name === '' || position === '') {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }

    
    let staffList = getStaffFromLocalStorage();

   
    staffList.push({ name, position });

    
    localStorage.setItem('staffList', JSON.stringify(staffList));


    nameInput.value = '';
    positionInput.value = '';


    loadStaff();
}


function loadStaff() {
    const staffTableBody = document.getElementById('staffTableBody');
    staffTableBody.innerHTML = '';

    let staffList = getStaffFromLocalStorage();

    staffList.forEach((staff, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${staff.name}</td>
            <td>${staff.position}</td>
        `;
        staffTableBody.appendChild(row);
    });
}


function getStaffFromLocalStorage() {
    const staffList = localStorage.getItem('staffList');
    return staffList ? JSON.parse(staffList) : [
       
    ]; 
}