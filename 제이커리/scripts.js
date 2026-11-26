$(document).ready(function(){
    $("button").click(function() {
        $(this).addClass("active");      // 버튼 글자색
        $(".study").addClass("active");  // 황토색 네모 배경
    });
});