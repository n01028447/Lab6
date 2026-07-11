function FetchPostComments(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject(new Error('Failed to fetch comments'));
                return;
            } else {
                const posts = [
                    { commentId: 10, postId: postId, userName: "johndoe", comment: "I love being a vegan!" },
                    { commentId: 11, postId: postId, userName: "jamessmith", comment: "I love pizza!" },
                    { commentId: 12, postId: postId, userName: "samfisher", comment: "Seafood is way too pricey in Toronto!" },
                ];
                resolve(console.log(posts));
            }
        }, 2000);
    });
}

FetchPostComments(0).then((result) => { console.log(result) });