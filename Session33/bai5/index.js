// Bài 5:tìm kiếm sản phẩm trong danh sách sản phẩm
    const products = [
    {
        id: 1,
    name: 'Laptop Dell XPS 15',
    price: 35990000,
    image: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/xs9510t_cnb_00055rf110_bk.jpg',
    description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
            },
    {
        id: 2,
    name: 'iPhone 15 Pro Max',
    price: 32990000,
    image: 'https://tse3.mm.bing.net/th?id=OIP.N6W0-yvxcmFgUy360dsH9AHaHa&pid=Api&P=0&h=180',
    description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
            },
    {
        id: 3,
    name: 'Samsung Galaxy S24 Ultra',
    price: 28990000,
    image: 'https://tse4.mm.bing.net/th?id=OIP.seDkZ7w_josZda-_44JlyQHaE8&pid=Api&P=0&h=180',
    description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
            },
    {
        id: 4,
    name: 'Tai nghe Sony WH-1000XM5',
    price: 7990000,
    image: 'https://tse4.mm.bing.net/th?id=OIP.Ehi0TxW2G3f9L2ddzTYnwgHaHa&pid=Api&P=0&h=180',
    description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
            },
    {
        id: 5,
    name: 'Apple Watch Series 9',
    price: 11990000,
    image: 'https://tse4.mm.bing.net/th?id=OIP.lh0iPn7qptcRgpQ4QmQUUAHaFj&pid=Api&P=0&h=180',
    description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.'
            },
    {
        id: 6,
    name: 'Loa JBL Charge 5',
    price: 3990000,
    image: 'https://tse1.mm.bing.net/th?id=OIP._pZemf5lcuneKR30GGi0XAHaFj&pid=Api&P=0&h=180',
    description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
            }
    ];

    const list = document.getElementById('productList');
    const searchInput = document.getElementById('searchInput');

    function renderProducts() {
            const keyword = searchInput.value.trim().toLowerCase();
    list.innerHTML = '';

    if (keyword === '') return;

            const results = products.filter(p => p.name.toLowerCase().includes(keyword));

    if (results.length === 0) {
        list.innerHTML = `<p class="text-center text-danger">Không tìm thấy sản phẩm nào.</p>`;
    return;
            }

            results.forEach(p => {
        list.innerHTML += `
          <div class="col-md-3 mb-4">
            <div class="card h-100 text-center product-card">
              <img src="${p.image}" class="card-img-top" alt="${p.name}">
              <div class="card-body d-flex flex-column justify-content-between">
                <h6 class="card-title">${p.name}</h6>
                <p class="card-text" style="font-size: 13px;">${p.description}</p>
                <p class="fw-bold">${p.price.toLocaleString()} VND</p>
                <button class="btn btn-primary btn-sm mt-auto">Buy</button>
              </div>
            </div>
          </div>
        `;
            });
        }

    // Không hiện sản phẩm ban đầu
    // Tìm mới hiện kết quả
    searchInput.addEventListener('input', renderProducts);
