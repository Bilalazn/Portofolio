const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Tulis tugas dulu!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Tandai selesai
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Tombol hapus
  const delBtn = document.createElement("button");
  delBtn.textContent = "🗑️";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
}
