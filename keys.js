if (window.location.hostname !== "ohkey.xyz") {
        document.body.innerHTML = `
            <style>
                html, body {
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    overflow: hidden;
                }
                .video-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    width: 100%;
                }
                video {
                    max-height: 100%;
                    width: 100%;
                }
            </style>
            <div class="video-container">
                <video controls autoplay>
                    <source src="https://pub-2d7ae65a6f9d41e9a8d2bb4d58f2c84d.r2.dev/pencuri.mp4" type="video/mp4">
                </video>
            </div>
        `;

}
