const users = [
  { name: "이경민", birth: "970718", role: "selector" },
  { name: "김태우", birth: "981127", role: "selector" },
  { name: "전윤표", birth: "010515", role: "writer" },
  { name: "오유빈", birth: "991003", role: "writer" },
  { name: "최선엽", birth: "980929", role: "writer" },
  { name: "김민", birth: "990824", role: "writer" },
];

function login() {
  const name = document.getElementById("name").value.trim();
  const birth = document.getElementById("birth").value.trim();

  const user = users.find(u => u.name === name && u.birth === birth);
  if (!user) {
    alert("정보가 일치하지 않습니다.");
    return;
  }

  localStorage.setItem("user", JSON.stringify(user));
  if (user.role === "writer") {
    location.href = "writer.html";
  } else {
    location.href = "selector.html";
  }
}
