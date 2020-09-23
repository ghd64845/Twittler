function onClick() {}

function init() {
  const commentList = document.querySelector(".comment_list");
  DATA.map((data) => {
    const li = document.createElement("li");
    commentList.appendChild(li);
    li.classList.add("comment_item");
    li.innerHTML = `<span class="user_name">${data.user}</span>
                                     <span class="time_stamp">${data.created_at}</span>
                                     <p>${data.message}</p>`;
  });
}

init();
