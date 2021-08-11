function toggle() {
    var btn = document.getElementById("mode");
    if (btn.value == "dark") {
        document.getElementById("all").classList.remove('dark');
        document.getElementById("all").classList.add('light');
        btn.value = "light";
        btn.innerHTML = 'Toggle to <i class="fa fa-moon"></i> mode';
    }
    else {
        document.getElementById("all").classList.remove('light');
        document.getElementById("all").classList.add('dark');
        btn.value = "dark";
        btn.innerHTML = 'Toggle to <i class="fa fa-sun"></i> mode';
    }
}