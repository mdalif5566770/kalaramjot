// Kalaramjot Village Website

document.addEventListener("DOMContentLoaded", function () {

    // Like Button
    const likeBtn = document.getElementById("likeBtn");

    if (likeBtn) {
        likeBtn.addEventListener("click", function () {
            likeBtn.textContent = "❤️ Liked";
        });
    }


    // Comment Button
    const commentBtn = document.getElementById("commentBtn");

    if (commentBtn) {
        commentBtn.addEventListener("click", function () {
            const comment = prompt("আপনার মন্তব্য লিখুন:");

            if (comment && comment.trim() !== "") {
                alert("আপনার মন্তব্য গ্রহণ করা হয়েছে। ধন্যবাদ! 🌿");
            }
        });
    }


    // Share Button
    const shareBtn = document.getElementById("shareBtn");

    if (shareBtn) {
        shareBtn.addEventListener("click", function () {

            if (navigator.share) {
                navigator.share({
                    title: "কালারামজোত গ্রাম",
                    text: "কালারামজোত গ্রামের ওয়েবসাইট দেখুন 🌿",
                    url: window.location.href
                });
            } else {
                alert("এই ব্রাউজারে Share অপশনটি সরাসরি পাওয়া যাচ্ছে না।");
            }

        });
    }

});