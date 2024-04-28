function sendContact() {
    // Lấy thông tin từ các trường input trong form
    var name = document.getElementById("input-name").value;
    var phoneNumber = document.getElementById("input-phone").value;
    var email = document.getElementById("input-email").value;
    var message = document.querySelector("textarea[name='description']").value;

    // Tạo nội dung thông báo xác nhận
    var confirmationMessage = "Name: " + name + "\n";
    confirmationMessage += "Phone Number: " + phoneNumber + "\n";
    confirmationMessage += "Email: " + email + "\n";
    confirmationMessage += "Message: " + message + "\n";

    // Hiển thị thông báo xác nhận và lưu kết quả vào biến confirmed
    var confirmed = confirm("Bạn có chắc chắn muốn gửi thông tin sau:\n\n" + confirmationMessage);

    // Nếu người dùng nhấn OK trong thông báo xác nhận
    if (confirmed) {
        // Thực hiện hành động gửi thông tin ở đây, ví dụ: gửi dữ liệu đến máy chủ, xử lý dữ liệu, vv.
        alert("Thông tin đã được gửi thành công!");
    } else {
        // Nếu người dùng nhấn Cancel trong thông báo xác nhận hoặc không nhập đủ thông tin
        alert("Đã hủy bỏ việc gửi thông tin.");
    }
}
