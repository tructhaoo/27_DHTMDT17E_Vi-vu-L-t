  document.addEventListener("DOMContentLoaded", function () {
                        const form = document.getElementById("bookingForm");
                        const fname = document.getElementById("fname");
                        const phone = document.getElementById("phone");
                        const email = document.getElementById("email");
                        const start_date = document.getElementById("start_date");
                        const adults = document.getElementById("adults");
                        const children = document.getElementById("children") || 0;
                        const bookTourBtn = document.getElementById("bookTourBtn");
                        const errorMessages = document.getElementById("errorMessages");

                        // Xử lý sự kiện khi nhấn nút Đặt Tour
                        bookTourBtn.addEventListener("click", function () {
                            errorMessages.textContent = ""; // Xóa các thông báo lỗi trước đó
                            let isValid = true;

                            if (!fname.checkValidity()) {
                                errorMessages.innerHTML += "Họ và tên không được để trống.<br>";
                                isValid = false;
                            }

                            if (!phone.checkValidity()) {
                                errorMessages.innerHTML += "Số điện thoại không hợp lệ.<br>";
                                isValid = false;
                            }

                            if (!email.checkValidity()) {
                                errorMessages.innerHTML += "Email không hợp lệ.<br>";
                                isValid = false;
                            }

                            if (!start_date.checkValidity()) {
                                errorMessages.innerHTML += "Ngày đi không được để trống.<br>";
                                isValid = false;
                            }

                            if (!adults.checkValidity()) {
                                errorMessages.innerHTML += "Số lượng người lớn không hợp lệ.<br>";
                                isValid = false;
                            }

                            // if (!children.checkValidity()) {
                            //     errorMessages.innerHTML += "Số lượng trẻ em không hợp lệ.<br>";
                            //     isValid = false;
                            // }



                            if (isValid) {
                                alert("Đặt tour thành công!");
                                const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
                                modal.hide();
                            }
                        });

                        // Xử lý validate số điện thoại chỉ được nhập số
                        phone.addEventListener("input", function () {
                            phone.value = phone.value.replace(/\D/g, ""); // Chỉ giữ lại các ký tự số
                        });

                        // Xử lý validate định dạng email
                        email.addEventListener("input", function () {
                            const emailValue = email.value.trim();
                            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            if (!pattern.test(emailValue)) {
                                email.setCustomValidity("Email không hợp lệ");
                            } else {
                                email.setCustomValidity("");
                            }
                        });
                    });