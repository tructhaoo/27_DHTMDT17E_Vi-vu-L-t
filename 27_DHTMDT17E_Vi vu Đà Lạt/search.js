 // Danh sách các từ khóa (tên các tour)
 const tourKeywords = [
    "COMBO DU LỊCH ĐÀ LẠT 2 NGÀY 1 ĐÊM",
    "TOUR CHÈO SUP TẠI HỒ TUYỀN LÂM",
    "TOUR THÁC PONGOUR ĐÀ LẠT", 
    " TOUR GIAO LƯU CỒNG CHIÊNG ĐÀ LẠT",
    "KHÁCH SẠN MƯỜNG THANH ĐÀ LẠT",
    "KHÁCH SẠN BEST WESTERN PLAZA",
    "KHÁCH SẠN MAI VÀNG",
    " AN VILLA YERSIN",
    " NHÀ MÌNH HOMESTAY ĐÀ LẠT",
    "SÓC HOMESTAY"
    ];

// Lấy phần tử input và form từ HTML
const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');

// Xử lý sự kiện khi nhập vào ô tìm kiếm
searchInput.addEventListener('input', function (event) {
const searchTerm = event.target.value.trim().toLowerCase();
const suggestions = [];

if (searchTerm) {
// Tạo các gợi ý dựa trên từ khóa nhập vào
tourKeywords.forEach(keyword => {
if (keyword.toLowerCase().includes(searchTerm)) {
suggestions.push(keyword);
}
});
}

// Hiển thị gợi ý trong ô tìm kiếm
displaySuggestions(suggestions);
});

// Hiển thị gợi ý trong ô tìm kiếm
function displaySuggestions(suggestions) {
const dropdown = document.createElement('div');
dropdown.classList.add('suggestions');

suggestions.forEach(suggestion => {
    const suggestionElement = document.createElement('div');
    suggestionElement.textContent = suggestion;
    suggestionElement.addEventListener('click', function () {
        searchInput.value = suggestion;
dropdown.remove(); // Xóa gợi ý khi chọn một gợi ý

// Chuyển hướng tới trang HTML tương ứng với từ khóa được chọn
window.location.href = getSuggestionURL(suggestion); // Hàm này cần phải được định nghĩa
            });
            dropdown.appendChild(suggestionElement);
        });

        // Xóa các gợi ý cũ trước khi hiển thị các gợi ý mới
        const existingDropdown = document.querySelector('.suggestions');
        if (existingDropdown) {
            existingDropdown.remove();
        }

        // Đưa dropdown vào gần ô tìm kiếm
        searchForm.appendChild(dropdown);
    };

    // Xóa các gợi ý khi click bất kỳ đâu trên trang
    document.addEventListener('click', function (event) {
        if (!searchForm.contains(event.target)) {
            const dropdown = document.querySelector('.suggestions');
            if (dropdown) {
                dropdown.remove();
            }
        }
    });

    // Xử lý sự kiện submit form (tìm kiếm)
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = searchInput.value.trim().toLowerCase();

        // Thực hiện hành động tìm kiếm (chuyển hướng hoặc hiển thị kết quả)
        // Ví dụ: có thể chuyển hướng đến trang chứa kết quả tìm kiếm
        if (searchTerm) {
            // Thực hiện hành động tìm kiếm ứng với từ khóa đã nhập
            console.log('Đang tìm kiếm cho:', searchTerm);
        }
    });
suggestionElement.addEventListener('click', function () {
searchInput.value = suggestion;
dropdown.remove(); // Xóa gợi ý khi chọn một gợi ý

// Chuyển hướng tới trang HTML tương ứng với từ khóa được chọn
window.location.href = getSuggestionURL(suggestion); // Hàm này cần phải được định nghĩa
});

// Hàm để lấy URL tương ứng với từ khóa
function getSuggestionURL(keyword) {
// Logic để ánh xạ từ khóa vào URL
// Ví dụ: nếu keyword là "COMBO DU LỊCH ĐÀ LẠT 2 NGÀY 1 ĐÊM" thì trả về URL tương ứng
// Lưu ý: bạn cần phải xây dựng logic này phù hợp với cấu trúc URL của trang web của bạn
if (keyword === "COMBO DU LỊCH ĐÀ LẠT 2 NGÀY 1 ĐÊM") {
return "2ngay1dem.html";
} else if (keyword === "TOUR CHÈO SUP TẠI HỒ TUYỀN LÂM") {
return "sup.html";
} else if (keyword === "TOUR THÁC PONGOUR ĐÀ LẠT") {
return "pongour.html";
}
else if (keyword === "TOUR GIAO LƯU CỒNG CHIÊNG ĐÀ LẠT") {
return "congchieng.html";
}
else if (keyword === "KHÁCH SẠN MƯỜNG THANH ĐÀ LẠT") {
return "muongthanh.html";
}
else if (keyword === "KHÁCH SẠN BEST WESTERN PLAZA") {
return "western.html";
}
else if (keyword === " KHÁCH SẠN MAI VÀNG") {
return "maivang.html";
}
else if (keyword === "AN VILLA YERSIN") {
return "anvilla.html";
}
else if (keyword === "NHÀ MÌNH HOMESTAY ĐÀ LẠT") {
return "nhaminh.html";
}
else if (keyword === "SÓC HOMESTAY") {
return "soc.html";
}
// Trong trường hợp không tìm thấy từ khóa nào phù hợp, có thể trả về một trang mặc định hoặc URL trống
return "";
}