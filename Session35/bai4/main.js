
        let employees = [
          
        ];

        const pageSize = 3;
        let currentPage = 1;

        function renderTable() {
            const tbody = document.getElementById("employeeTableBody");
            tbody.innerHTML = "";

            const start = (currentPage - 1) * pageSize;
            const paginatedEmployees = employees.slice(start, start + pageSize);

            paginatedEmployees.forEach((emp, index) => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
          <td>${start + index + 1}</td>
          <td>${emp.name}</td>
          <td>${emp.position}</td>
        `;
                tbody.appendChild(tr);
            });

            renderPagination();
        }

        function renderPagination() {
            const totalPages = Math.ceil(employees.length / pageSize);
            const pagination = document.getElementById("pagination");
            pagination.innerHTML = "";

            const prevBtn = document.createElement("button");
            prevBtn.textContent = "Previous";
            prevBtn.disabled = currentPage === 1;
            prevBtn.onclick = () => {
                currentPage--;
                renderTable();
            };
            pagination.appendChild(prevBtn);

            for (let i = 1; i <= totalPages; i++) {
                const btn = document.createElement("button");
                btn.textContent = i;
                if (i === currentPage) {
                    btn.classList.add("active");
                }
                btn.onclick = () => {
                    currentPage = i;
                    renderTable();
                };
                pagination.appendChild(btn);
            }

            const nextBtn = document.createElement("button");
            nextBtn.textContent = "Next";
            nextBtn.disabled = currentPage === totalPages;
            nextBtn.onclick = () => {
                currentPage++;
                renderTable();
            };
            pagination.appendChild(nextBtn);
        }

        function addEmployee() {
            const name = document.getElementById("nameInput").value.trim();
            const position = document.getElementById("positionInput").value.trim();
            if (name && position) {
                employees.push({ name, position });
                currentPage = Math.ceil(employees.length / pageSize);
                renderTable();
                document.getElementById("nameInput").value = "";
                document.getElementById("positionInput").value = "";
            } else {
                alert("Vui lòng nhập đủ thông tin!");
            }
        }

        renderTable(); // khởi tạo lần đầu
    