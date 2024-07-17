function addPost() {
    const postContent = document.getElementById('postContent').value;
    if (postContent.trim()) {
        const post = document.createElement('div');
        post.className = 'post';
        post.textContent = postContent;
        document.querySelector('.posts').appendChild(post);
        document.getElementById('postContent').value = '';
    } else {
        alert('Будь ласка, напишіть повідомлення');
    }
}
