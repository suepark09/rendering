
function renderTweetsStyling(tweets) {
    return `
        <div class="mt-5">
            <div style="
                border: solid 1px black;
                padding: 20px;
                height: 100%;
                width: 450px;
            ">
            <div class="firstLine" style="
                display: flex;
                flex-direction: row;
                "
                >
                    <img src="${tweets.user.profilePic}" height="40px" width="40px" style="margin-right: 10px;">
                <div class="names">
                    `+ tweets.user.username +`<br>
                    `+ tweets.user.handle +`
                 </div>
            </div>
            <div class="tweetContent" style="font-size: 23px; line-height: 30px; padding-top: 12px;">
                `+ tweets.text +`
            </div>
            <div class="icons">
            <hr>
            `+ tweets.replies +`
            `+ tweets.retweets +`
            `+ tweets.likes +`
            </div>
            </div>
        </div>
    `
}

function renderTweets(tweets) {
   let viewTweet = [];
   for(let i = 0; i < tweets.length; i++) {
        let singleTweet = renderTweetsStyling(tweets[i]);
        viewTweet.push(singleTweet);
   }

   return viewTweet.join("")
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}