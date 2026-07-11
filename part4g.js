function fetchUserProfile(userId) {
    return new Promise((resolve, reject) => {
        if (userId >= 0 && userId <= 2) {
            setTimeout(() => {
                const user = [
                    { id: userId, name: "John Doe", email: "john.doe@example.com", username: "johndoe" }, //TODO: Fill in user properties
                    { id: userId, name: "James Smith", email: "james.smith@example.com", username: "jamessmith" },
                    { id: userId, name: "Sam Fisher", email: "sam.fisher@example.com", username: "samfisher" }
                ];
                resolve(user[userId]);
            }, 1000);
        } else {
            reject("Please enter a valid user id!")
        }
    });
}


//Task B: Create fetchUserPosts(userId)
function fetchUserPost(userId) {
    return new Promise((resolve, reject) => {
        if (userId >= 0 && userId <= 3) {
            setTimeout(() => {
                const posts = [
                    { postId: 100, userId: userId, title: "Vegan Recipes", content: "Vegan Burger" },
                    { postId: 101, userId: userId, title: "Non-vegan Recipes", content: "Pizza" },
                    { postId: 102, userId: userId, title: "Pescatarian Diet", content: "Grilled Fish" },
                ];
                resolve(posts[userId]);
            }, 1500);
        } else {
            reject("Please enter an valid user id!");
        }
    })
}


//Task C: Create fetchPostComments(postId)
function fetchPostComments(postId) {
    return new Promise((resolve, reject) => {
        if (postId - 100 >= 0 && postId - 100 <= 3) {
            setTimeout(() => {
                const posts = [
                    { commentId: 10, postId: postId, userName: "johndoe", comment: "I love being a vegan!" },
                    { commentId: 11, postId: postId, userName: "jamessmith", comment: "I love pizza!" },
                    { commentId: 12, postId: postId, userName: "samfisher", comment: "Seafood is way too pricey in Toronto!" },
                ];
                resolve(posts[postId - 100]);
            }, 2000);
        } else {
            reject("Please enter a valid post id!");
        }
    })
}
async function fetchDataWithErrorHandling(userId) {
    try {

        if (isNaN(input)) {
            throw new Error("Your user id must be a number!");
        }

        const userProfile = await fetchUserProfile(userId);
        console.log("User profile retrieved:")
        console.log(userProfile);

        const userPost = await fetchUserPost(userId);
        console.log("Posts retrieved:")
        console.log(userPost);

        console.log("End of data fecthing.");

    } catch (error) {

        console.error('Error in sequential fetch:', error);

    }
}

const input = "0"
fetchDataWithErrorHandling(input)
console.log("End of data fecthing.");