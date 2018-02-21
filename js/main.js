document.addEventListener("DOMContentLoaded", function(){
	Typed.new(".element", {
		strings: ["I'm Emily, junior frontend developer with almost 1 year of experience in developing websites."],
		typeSpeed: 20
	});
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('mail').addEventListener('change', function() {
        var classText = 'errorField';
        var mailReg = new RegExp('^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$', 'i');

        if (!mailReg.test(this.value)) {
            this.className += " "+classText;
        } else {
            var regError = new RegExp('(\\s|^)'+classText+'(\\s|$)');
            this.className = this.className.replace(regError, '');
        }
    });
});
