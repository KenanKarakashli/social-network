const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let myTrigger = document.querySelector(".heart-icon");
let count = 0;
myTrigger.addEventListener("click", function(){
    console.log(count++)
    document.querySelector(".like-count").innerHTML =  count + " likes";
})

let commentTrigger = document.querySelector(".comment-icon");
commentTrigger.addEventListener("click",function(){
    let commE = document.querySelector(".commentator")
    commE.innerHTML = "<input type='text' class='commArea'/>";
})

let sendComment = document.querySelector(".comment-icon");
sendComment.addEventListener("click", function() {
  document.querySelector(".send-comment-btn").innerHTML =
    '<button>Submit</button>';
});

let commentSender = document.querySelector(".send-comment-btn")
commentSender.addEventListener("click", function(){
    document.querySelector(".comment-itself").innerHTML = document.querySelector(".commArea").value;
    document.querySelector(".commArea").value = "";
})



