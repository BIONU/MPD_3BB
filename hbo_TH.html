<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>NUTV 3BB - Full Screen</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" type="text/css" href="/clap.css">
    <script src="//cdn.jsdelivr.net/npm/@clappr/player@0.4.0/dist/clappr.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/mux.js@5.6.7/dist/mux.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/level-selector@latest/dist/level-selector.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/clappr-chromecast-plugin@latest/dist/clappr-chromecast-plugin.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/clappr-pip@latest/dist/clappr-pip.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/clappr-playback-rate-plugin@latest/dist/clappr-playback-rate-plugin.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/shaka-player@2.5.10/dist/shaka-player.compiled.min.js"></script>
    <script src="//cdn.jsdelivr.net/gh/clappr/dash-shaka-playback@latest/dist/dash-shaka-playback.external.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/cdnbye-shaka@latest"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            background-color: #000000;
            font-family: Arial, sans-serif;
            overflow: hidden;
            height: 100vh;
            width: 100vw;
        }
        
        #player-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
        }
        
        #player {
            width: 100%;
            height: 100%;
        }
        
        .nutv-label {
            position: absolute;
            bottom: 20px;
            right: 20px;
            font-size: 18px;
            font-weight: bold;
            color: #ff0;
            z-index: 1000;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 5px 10px;
            border-radius: 5px;
        }
        
        .controls {
            position: absolute;
            bottom: 20px;
            left: 20px;
            z-index: 1000;
            display: flex;
            gap: 10px;
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        .controls.show {
            opacity: 1;
        }
        
        .control-btn {
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            border: 1px solid #ff0;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s;
        }
        
        .control-btn:hover {
            background-color: rgba(255, 255, 0, 0.2);
        }
        
        /* สไตล์สำหรับโหมดเต็มจอ */
        .fullscreen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 9999;
        }
        
        /* เอฟเฟกต์โหลด */
        .loading {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 18px;
            z-index: 1001;
        }
        
        .loading:after {
            content: '...';
            animation: dots 1.5s steps(5, end) infinite;
        }
        
        @keyframes dots {
            0%, 20% { color: rgba(255,255,255,0); text-shadow: .25em 0 0 rgba(255,255,255,0), .5em 0 0 rgba(255,255,255,0); }
            40% { color: white; text-shadow: .25em 0 0 rgba(255,255,255,0), .5em 0 0 rgba(255,255,255,0); }
            60% { text-shadow: .25em 0 0 white, .5em 0 0 rgba(255,255,255,0); }
            80%, 100% { text-shadow: .25em 0 0 white, .5em 0 0 white; }
        }
        
        /* สไตล์สำหรับการควบคุมเสียง */
        .volume-control {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        .volume-control.show {
            opacity: 1;
        }
        
        .volume-btn {
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            border: 1px solid #ff0;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            transition: all 0.3s;
        }
        
        .volume-btn:hover {
            background-color: rgba(255, 255, 0, 0.2);
        }
        
        .volume-slider {
            width: 100px;
            height: 5px;
            -webkit-appearance: none;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 5px;
            outline: none;
        }
        
        .volume-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: #ff0;
            cursor: pointer;
        }
        
        .volume-slider::-moz-range-thumb {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: #ff0;
            cursor: pointer;
            border: none;
        }
        
        /* สำหรับหน้าจอมือถือ */
        @media (max-width: 768px) {
            .volume-control {
                top: 10px;
                right: 10px;
            }
            
            .volume-slider {
                width: 80px;
            }
            
            .controls {
                bottom: 10px;
                left: 10px;
            }
            
            .nutv-label {
                bottom: 10px;
                right: 10px;
                font-size: 14px;
            }
        }
        
        /* สไตล์สำหรับปุ่มเล่นเมื่อเบราว์เซอร์บล็อก */
        .play-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 1002;
            color: white;
            text-align: center;
        }
        
        .play-overlay-btn {
            background-color: #ff0;
            color: black;
            border: none;
            padding: 15px 30px;
            font-size: 18px;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 20px;
            transition: all 0.3s;
        }
        
        .play-overlay-btn:hover {
            background-color: #ffcc00;
        }
    </style>
</head>
<body>
    <div id="player-wrapper">
        <div id="player"></div>
        <div class="loading">กำลังโหลด NUTV</div>
        <div id="play-overlay" class="play-overlay" style="display: none;">
            <p>เบราว์เซอร์บล็อกการเล่นอัตโนมัติ</p>
            <p>กรุณากดปุ่มด้านล่างเพื่อเริ่มเล่น</p>
            <button class="play-overlay-btn" id="manual-play-btn">เริ่มเล่น</button>
        </div>
        <span class="nutv-label"><em>NUTV</em></span>
        <div class="controls" id="screen-controls">
            <button class="control-btn" id="fullscreen-btn">เต็มจอ</button>
            <button class="control-btn" id="normal-screen-btn">จอปกติ</button>
            <button class="control-btn" id="auto-play-btn">เล่นอัตโนมัติ: เปิด</button>
        </div>
        <div class="volume-control" id="volume-control">
            <button class="volume-btn" id="mute-btn">🔊</button>
            <input type="range" min="0" max="100" value="100" class="volume-slider" id="volume-slider">
        </div>
    </div>

    <script>
        // ฟังก์ชันสำหรับสลับโหมดเต็มจอ
        function toggleFullscreen(element) {
            if (!document.fullscreenElement) {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullscreen) {
                    element.webkitRequestFullscreen();
                } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        }
        
        // แสดงปุ่มควบคุมชั่วคราว
        function showControlsTemporarily() {
            const controls = document.getElementById('screen-controls');
            const volumeControl = document.getElementById('volume-control');
            
            controls.classList.add('show');
            volumeControl.classList.add('show');
            
            // ซ่อนปุ่มหลังจาก 3 วินาที
            setTimeout(() => {
                controls.classList.remove('show');
                volumeControl.classList.remove('show');
            }, 3000);
        }
        
        // ตัวแปรสำหรับการเล่นอัตโนมัติ
        let autoPlayEnabled = true;
        let player;
        let playPromise;
        
        // สร้างตัวเล่นวิดีโอ
        function initializePlayer() {
            player = new Clappr.Player({
                source: 'https://npt-streamer3.cdn.3bbtv.com:8443/3bb/live/103/103.mpd',
                mimeType: 'application/dash+xml',
                height: '100%',
                width: '100%',
                autoPlay: autoPlayEnabled,
                mute: false, // ไม่ปิดเสียงเพื่อให้เล่นอัตโนมัติได้
                plugins: [LevelSelector, DashShakaPlayback, Clappr.MediaControl],
                events: {
                    onReady: function() {
                        // ซ่อนข้อความกำลังโหลด
                        document.querySelector('.loading').style.display = 'none';
                        
                        // ปิดการคลิกเพื่อหยุดชั่วคราว
                        var plugin = this.getPlugin('click_to_pause');
                        plugin && plugin.disable();
                        
                        // ตั้งค่าเสียงเริ่มต้น
                        this.setVolume(100);
                        
                        // พยายามเล่นอัตโนมัติ
                        if (autoPlayEnabled) {
                            playPromise = this.play().catch(error => {
                                console.log('การเล่นอัตโนมัติถูกบล็อก:', error);
                                // แสดงปุ่มให้ผู้ใช้กดเล่นเอง
                                document.getElementById('play-overlay').style.display = 'flex';
                            });
                        }
                        
                        // แสดงปุ่มควบคุมชั่วคราวเมื่อโหลดเสร็จ
                        showControlsTemporarily();
                    },
                    onError: function(e) {
                        document.querySelector('.loading').textContent = 'เกิดข้อผิดพลาดในการโหลดวิดีโอ';
                        
                        // ถ้าเปิดโหมดเล่นอัตโนมัติและเกิดข้อผิดพลาด ให้ลองโหลดใหม่ใน 5 วินาที
                        if (autoPlayEnabled) {
                            setTimeout(() => {
                                player.destroy();
                                initializePlayer();
                            }, 5000);
                        }
                    },
                    onEnded: function() {
                        // ถ้าเปิดโหมดเล่นอัตโนมัติและวิดีโอจบ ให้เล่นใหม่
                        if (autoPlayEnabled) {
                            setTimeout(() => {
                                this.play();
                            }, 1000);
                        }
                    },
                    onPlay: function() {
                        // ซ่อน overlay เมื่อเริ่มเล่น
                        document.getElementById('play-overlay').style.display = 'none';
                    }
                },
                chromecast: {
                    preload: 'metadata',
                    contentType: 'video/mpd',
                },
                shakaConfiguration: {
                    drm: {
                        clearKeys: {
                            '9c5735afb4fd402580360aed8364469c': '128d55d9ac2b47ad85f86b5d08320179'
                        }
                    },
                },
                shakaOnBeforeLoad: function (shaka_player) {},
                parentId: '#player'
            });
        }
        
        // เริ่มต้นโหลดตัวเล่น
        initializePlayer();
        
        // การจัดการปุ่มควบคุม
        document.getElementById('fullscreen-btn').addEventListener('click', function() {
            toggleFullscreen(document.getElementById('player-wrapper'));
            showControlsTemporarily(); // แสดงปุ่มชั่วคราวอีกครั้ง
        });
        
        document.getElementById('normal-screen-btn').addEventListener('click', function() {
            if (document.fullscreenElement) {
                toggleFullscreen(document.getElementById('player-wrapper'));
                showControlsTemporarily(); // แสดงปุ่มชั่วคราวอีกครั้ง
            }
        });
        
        // การจัดการปุ่มเล่นอัตโนมัติ
        const autoPlayBtn = document.getElementById('auto-play-btn');
        autoPlayBtn.addEventListener('click', function() {
            autoPlayEnabled = !autoPlayEnabled;
            autoPlayBtn.textContent = autoPlayEnabled ? 'เล่นอัตโนมัติ: เปิด' : 'เล่นอัตโนมัติ: ปิด';
            
            // หากเปิดโหมดเล่นอัตโนมัติและวิดีโอหยุด ให้เล่นต่อ
            if (autoPlayEnabled && player && !player.isPlaying()) {
                player.play().catch(error => {
                    console.log('การเล่นอัตโนมัติถูกบล็อก:', error);
                    document.getElementById('play-overlay').style.display = 'flex';
                });
            }
            
            showControlsTemporarily(); // แสดงปุ่มชั่วคราวอีกครั้ง
        });
        
        // การจัดการปุ่มเล่นเมื่อเบราว์เซอร์บล็อก
        document.getElementById('manual-play-btn').addEventListener('click', function() {
            if (player) {
                player.play();
                document.getElementById('play-overlay').style.display = 'none';
            }
        });
        
        // การจัดการควบคุมเสียง
        const volumeSlider = document.getElementById('volume-slider');
        const muteBtn = document.getElementById('mute-btn');
        let isMuted = false;
        let previousVolume = 100;
        
        // ฟังก์ชันอัปเดตเสียง
        function updateVolume(value) {
            player.setVolume(value);
            volumeSlider.value = value;
            
            // อัปเดตไอคอนปุ่มเสียง
            if (value == 0) {
                muteBtn.textContent = '🔇';
                isMuted = true;
            } else if (value < 50) {
                muteBtn.textContent = '🔈';
                isMuted = false;
            } else {
                muteBtn.textContent = '🔊';
                isMuted = false;
            }
        }
        
        // เมื่อเลื่อนแถบเสียง
        volumeSlider.addEventListener('input', function() {
            updateVolume(this.value);
        });
        
        // เมื่อคลิกปุ่มปิดเสียง
        muteBtn.addEventListener('click', function() {
            if (isMuted) {
                // เปิดเสียง
                updateVolume(previousVolume);
            } else {
                // ปิดเสียง
                previousVolume = volumeSlider.value;
                updateVolume(0);
            }
            showControlsTemporarily(); // แสดงปุ่มชั่วคราวอีกครั้ง
        });
        
        // ตรวจจับการเปลี่ยนแปลงโหมดเต็มจอ
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);
        
        function handleFullscreenChange() {
            if (document.fullscreenElement) {
                document.getElementById('player-wrapper').classList.add('fullscreen');
            } else {
                document.getElementById('player-wrapper').classList.remove('fullscreen');
            }
        }
        
        // แสดงปุ่มควบคุมเมื่อเลื่อนเมาส์ใกล้ด้านล่าง
        document.getElementById('player-wrapper').addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const mouseY = e.clientY - rect.top;
            const height = rect.height;
            
            // ถ้าเมาส์อยู่ใกล้ด้านล่าง (ภายใน 100px)
            if (height - mouseY < 100) {
                showControlsTemporarily();
            }
        });
        
        // แสดงปุ่มควบคุมเมื่อแตะบนมือถือ
        document.getElementById('player-wrapper').addEventListener('touchstart', function() {
            showControlsTemporarily();
        });
        
        // ฟังก์ชันสำหรับเปลี่ยนไปใช้ M3U8 หากมี URL
        function switchToM3U8(m3u8Url) {
            player.load(m3u8Url, 'application/x-mpegURL');
        }
        
        // ฟังก์ชันสำหรับรีสตาร์ทสตรีมเมื่อมีการตัดสัญญาณ
        function restartStream() {
            if (player && autoPlayEnabled && !player.isPlaying()) {
                console.log('ตรวจพบสตรีมหยุดทำงาน, กำลังรีสตาร์ท...');
                player.destroy();
                document.querySelector('.loading').style.display = 'block';
                document.querySelector('.loading').textContent = 'กำลังโหลด NUTV';
                document.getElementById('play-overlay').style.display = 'none';
                initializePlayer();
            }
        }
        
        // ตรวจสอบการเชื่อมต่อเป็นระยะ (ทุก 30 วินาที)
        setInterval(() => {
            if (player && autoPlayEnabled && !player.isPlaying()) {
                restartStream();
            }
        }, 30000);
        
        // ตรวจสอบการเชื่อมต่อเมื่อโฟกัสกลับมาที่หน้าเว็บ
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden && autoPlayEnabled && player && !player.isPlaying()) {
                // ถ้าหน้าเว็บกลับมาแสดงและสตรีมหยุด ให้รีสตาร์ท
                setTimeout(restartStream, 1000);
            }
        });
    </script>
</body>
</html>
