const image = document.getElementById('image');
        const startButton = document.getElementById('startButton');
        const stopButton = document.getElementById('stopButton');

        startButton.addEventListener('click', startAnimation);
        stopButton.addEventListener('click', stopAnimation);

        function startAnimation() {
            image.style.animationPlayState = 'running';
        }

        function stopAnimation() {
            image.style.animationPlayState = 'paused';
        }