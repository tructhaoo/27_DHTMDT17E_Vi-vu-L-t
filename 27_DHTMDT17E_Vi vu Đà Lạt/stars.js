 // Lấy danh sách các tour từ Local Storage và hiển thị thông tin trung bình số sao và số lượng bình luận đánh giá cho mỗi tour
 document.addEventListener('DOMContentLoaded', function () {
    var tours = [
        { key: '2ngay1dem', selector: '.tour-2ngay1dem' },
        { key: 'sup', selector: '.tour-sup' },
        { key: 'pongour', selector: '.tour-pongour' },
        { key: 'congchieng', selector: '.tour-congchieng' },
        { key: 'muongthanh', selector: '.tour-muongthanh' },
        { key: 'western', selector: '.tour-western' },
        { key: 'maivang', selector: '.tour-maivang' },
        { key: 'anvilla', selector: '.tour-anvilla' },
        { key: 'nhaminh', selector: '.tour-nhaminh' },
        { key: 'soc', selector: '.tour-soc' },
      
        { key: 'hotuyenlam', selector: '.tour-hotuyenlam' },
        { key: 'nhatho', selector: '.tour-nhatho' },
        { key: 'langbiang', selector: '.tour-langbiang' },

        { key: 'suadaunanh', selector: '.tour-suadaunanh' },
    ];

    tours.forEach(function (tour) {
        var tourComments = JSON.parse(localStorage.getItem(tour.key)) || [];
        var totalRating = 0;
        var numComments = tourComments.length;

        tourComments.forEach(function (comment) {
            totalRating += comment.rating;
        });

        var averageRating = numComments > 0 ? totalRating / numComments : 0;
        var starsHTML = '';
        for (var i = 0; i < Math.floor(averageRating); i++) {
            starsHTML += '<i class="bi bi-star-fill"></i>';
        }
        if (averageRating % 1 !== 0) {
            starsHTML += '<i class="bi bi-star-half"></i>';
        }

        var tourElement = document.querySelector(tour.selector);
        if (tourElement) {
            tourElement.querySelector('.stars').innerHTML = starsHTML;
        }
    });
});
