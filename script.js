function onSubmit() {
    const taskText = document.querySelector('.inputbox input[type="text"]').value.trim();
    const taskTime = document.querySelector('.inputbox input[type="time"]').value;
    const taskDate = document.querySelector('.inputbox input[type="date"]').value;

    if (taskText === '' || taskTime === '' || taskDate === '') {
        alert("Please fill in all fields.");
        return;
    }

    const li = document.createElement('li');

    const taskInfo = document.createElement('span');
    taskInfo.innerHTML = `<strong>${taskText}</strong><br><small>${taskDate} | ${taskTime}</small>`;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Done';
    completeBtn.onclick = () => {
        li.classList.toggle('completed');
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
        li.remove();
    };

    li.appendChild(taskInfo);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById('taskList').appendChild(li);

    document.querySelector('.inputbox input[type="text"]').value = '';
    document.querySelector('.inputbox input[type="time"]').value = '';
    document.querySelector('.inputbox input[type="date"]').value = '';
}
