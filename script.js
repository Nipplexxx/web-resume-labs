function validateForm() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    // Проверка логина: >=7 символов, содержит буквы и цифры
    if (login.length < 7 || !/[a-zA-Z]/.test(login) || !/\d/.test(login)) {
        alert("Логин должен быть не менее 7 символов и содержать как буквы, так и цифры.");
        return false;
    }

    // Проверка пароля: >=8 символов, содержит буквы и цифры
    if (password.length < 8 || !/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
        alert("Пароль должен быть не менее 8 символов и содержать как буквы, так и цифры.");
        return false;
    }

    // Проверка email: содержит @
    if (!/@/.test(email)) {
        alert("Email должен содержать символ @.");
        return false;
    }

    // Если все OK, открываем окно с видео
    openVideoWindow();
    return true;
}

function openDeveloperWindow() {
    var win = window.open("", "Developer Info", "width=400,height=300");
    win.document.write('<html><head><title>О разработчике</title></head><body>');
    win.document.write('<h2>Информация о разработчике</h2>');
    win.document.write('<p>ФИО: Епанчина Виктория Алексеевна</p>');
    win.document.write('<p>Группа: ФБ ЗБИСТ-211</p>');
    win.document.write('<p>Университет: Воронежский государственный технический университет</p>');
    win.document.write('<button onclick="window.close()">Закрыть</button>');
    win.document.write('</body></html>');
    win.document.close();
}

function showAlert() {
    alert("Добро пожаловать на страницу! Страница загружена.");
}

function showConfirm() {
    var result = confirm("Хотите узнать больше о резюме?");
    if (result) {
        alert("Да, вы хотите узнать больше!");
    } else {
        alert("Нет, спасибо.");
    }
}

function showPrompt() {
    var hint = prompt("Введите подсказку для логина (например, 'Используйте буквы и цифры')");
    if (hint) {
        alert("Ваша подсказка: " + hint);
    }
}

function openVideoWindow() {
    var videoWin = window.open("", "Video Window", "width=600,height=400");
    videoWin.document.write('<html><head><title>Видео после регистрации</title></head><body>');
    videoWin.document.write('<h2>Успешная регистрация!</h2>');
    videoWin.document.write('<video id="videoPlayer" width="560" height="315" controls>');
    videoWin.document.write('<source src="video.mp4" type="video/mp4">');
    videoWin.document.write('Ваш браузер не поддерживает видео.');
    videoWin.document.write('</video><br>');
    videoWin.document.write('<button onclick="togglePlayPause()">Пауза/Воспроизведение</button>');
    videoWin.document.write('<script>function togglePlayPause() { var video = document.getElementById("videoPlayer"); if (video.paused) { video.play(); } else { video.pause(); } }</script>');
    videoWin.document.write('<button onclick="window.close()">Закрыть</button>');
    videoWin.document.write('</body></html>');
    videoWin.document.close();
}