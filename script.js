const users = {
  "이경민": { pw: "970718", role: "selector" },
  "김태우": { pw: "981127", role: "selector" },
  "전윤표": { pw: "010515", role: "writer" },
  "오유빈": { pw: "991003", role: "writer" },
  "최선엽": { pw: "980929", role: "writer" },
  "김민":   { pw: "990824", role: "writer" }
};

function login() {
  const name = document.getElementById('username').value.trim();
  const pw = document.getElementById('password').value.trim();

  if (!users[name]) {
    alert("존재하지 않는 사용자입니다.");
    return;
  }

  if (users[name].pw !== pw) {
    alert("비밀번호가 틀렸습니다.");
    return;
  }

  // 로그인 성공
  const role = users[name].role;
  localStorage.setItem("user", JSON.stringify({ name, role }));

  if (role === "writer") {
    location.href = "writer.html";
  } else if (role === "selector") {
    location.href = "selector.html";
  }
}
