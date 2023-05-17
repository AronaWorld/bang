// 토론 게시물을 동적으로 로드하는 JavaScript 코드
window.addEventListener('DOMContentLoaded', (event) => {
    // 서버에서 토론 게시물 데이터를 가져와서 discussion 요소에 추가하는 코드
    fetch('/api/discussions')
      .then(response => response.json())
      .then(data => {
        const discussionElement = document.getElementById('discussion');
        data.forEach(discussion => {
          const discussionItem = document.createElement('div');
          discussionItem.innerHTML = `<h3>${discussion.title}</h3><p>${discussion.content}</p>`;
          discussionElement.appendChild(discussionItem);
        });
      });
  });
  