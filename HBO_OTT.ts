{
  "htmlDocument": {
    "doctype": "<!DOCTYPE html>",
    "html": {
      "lang": "th",
      "head": {
        "meta": [
          {
            "charset": "UTF-8"
          },
          {
            "name": "viewport",
            "content": "width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
          }
        ],
        "title": "HBO 3BB - Full Screen Player",
        "scripts": [
          "https://cdn.jsdelivr.net/npm/clappr@0.4.0/dist/clappr.min.js",
          "https://cdn.jsdelivr.net/npm/clappr-level-selector@latest/dist/level-selector.min.js",
          "https://cdn.jsdelivr.net/npm/hls.js@latest/dist/hls.min.js"
        ]
      },
      "body": {
        "structure": {
          "playerWrapper": {
            "id": "player-wrapper",
            "elements": [
              {
                "type": "div",
                "id": "player"
              },
              {
                "type": "div",
                "class": "loading",
                "text": "กำลังโหลด HBO 3BB"
              },
              {
                "type": "div",
                "id": "play-overlay",
                "class": "play-overlay",
                "style": "display: none;",
                "elements": [
                  {
                    "type": "p",
                    "text": "เบราว์เซอร์บล็อกการเล่นอัตโนมัติ"
                  },
                  {
                    "type": "p",
                    "text": "กรุณากดปุ่มด้านล่างเพื่อเริ่มเล่น"
                  },
                  {
                    "type": "button",
                    "class": "play-overlay-btn",
                    "id": "manual-play-btn",
                    "text": "เริ่มเล่น"
                  }
                ]
              },
              {
                "type": "div",
                "id": "error-message",
                "class": "error-message",
                "style": "display: none;"
              },
              {
                "type": "span",
                "class": "channel-label",
                "html": "<em>HBO 3BB</em>"
              },
              {
                "type": "div",
                "class": "controls",
                "id": "screen-controls",
                "elements": [
                  {
                    "type": "button",
                    "class": "control-btn",
                    "id": "fullscreen-btn",
                    "text": "เต็มจอ"
                  },
                  {
                    "type": "button",
                    "class": "control-btn",
                    "id": "reload-btn",
                    "text": "โหลดใหม่"
                  },
                  {
                    "type": "button",
                    "class": "control-btn",
                    "id": "auto-play-btn",
                    "text": "เล่นอัตโนมัติ: เปิด"
                  }
                ]
              },
              {
                "type": "div",
                "class": "volume-control",
                "id": "volume-control",
                "elements": [
                  {
                    "type": "button",
                    "class": "volume-btn",
                    "id": "mute-btn",
                    "text": "🔊"
                  },
                  {
                    "type": "input",
                    "class": "volume-slider",
                    "id": "volume-slider",
                    "attributes": {
                      "type": "range",
                      "min": "0",
                      "max": "100",
                      "value": "100"
                    }
                  }
                ]
              }
            ]
          }
        },
        "javascript": {
          "functions": {
            "toggleFullscreen": "ฟังก์ชันสำหรับสลับโหมดเต็มจอ",
            "showControlsTemporarily": "แสดงปุ่มควบคุมชั่วคราว",
            "initializePlayer": "สร้างตัวเล่นวิดีโอ",
            "handleFullscreenChange": "จัดการการเปลี่ยนแปลงโหมดเต็มจอ",
            "updateVolume": "อัปเดตระดับเสียง",
            "showError": "แสดงข้อผิดพลาด",
            "restartStream": "รีสตาร์ทสตรีม",
            "testM3U8Url": "ทดสอบ URL M3U8"
          },
          "variables": {
            "autoPlayEnabled": true,
            "player": null,
            "playPromise": null,
            "isMuted": false,
            "previousVolume": 100,
            "m3u8Url": "https://raw.githubusercontent.com/your-username/your-repo/main/HBO_3BB.m3u8",
            "fallbackUrls": [
              "https://raw.githubusercontent.com/your-username/your-repo/main/HBO_3BB.m3u8",
              "https://gist.githubusercontent.com/your-username/your-gist-id/raw/HBO_3BB.m3u8"
            ]
          },
          "eventListeners": [
            "fullscreen-btn: click - สลับโหมดเต็มจอ",
            "reload-btn: click - โหลดสตรีมใหม่",
            "auto-play-btn: click - สลับโหมดเล่นอัตโนมัติ",
            "manual-play-btn: click - เริ่มเล่นเมื่อเบราว์เซอร์บล็อก",
            "volume-slider: input - ควบคุมระดับเสียง",
            "mute-btn: click - ปิด/เปิดเสียง",
            "player-wrapper: mousemove - แสดงปุ่มควบคุมเมื่อเมาส์ใกล้ด้านล่าง",
            "player-wrapper: touchstart - แสดงปุ่มควบคุมบนมือถือ",
            "document: fullscreenchange - ตอบสนองการเปลี่ยนแปลงโหมดเต็มจอ",
            "document: visibilitychange - ตรวจสอบเมื่อหน้าเว็บกลับมาแสดง"
          ]
        }
      }
    }
  },
  "playerConfiguration": {
    "source": "https://raw.githubusercontent.com/your-username/your-repo/main/HBO_3BB.m3u8",
    "height": "100%",
    "width": "100%",
    "autoPlay": true,
    "mute": false,
    "plugins": [{"name": "level-selector", "plugin": LevelSelector}],
    "hlsjsConfig": {
      "enableWorker": true,
      "lowLatencyMode": true,
      "backBufferLength": 90,
      "maxMaxBufferLength": 600,
      "maxBufferSize": 60 * 1000 * 1000,
      "liveSyncDurationCount": 3,
      "liveMaxLatencyDurationCount": 10,
      "stretchShortVideoTrack": true,
      "maxLiveSyncPlaybackRate": 1.1
    },
    "playback": {
      "playsinline": true,
      "crossOrigin": "anonymous",
      "preload": "auto"
    },
    "events": {
      "onReady": "handlePlayerReady",
      "onError": "handlePlayerError",
      "onPlay": "handlePlayerPlay"
    },
    "parentId": "#player"
  },
  "cssStyles": {
    "general": {
      "reset": "* { margin: 0; padding: 0; box-sizing: border-box; }",
      "body": "background-color: #000000; font-family: Arial, sans-serif; overflow: hidden; height: 100vh; width: 100vw;"
    },
    "playerWrapper": {
      "position": "relative",
      "width": "100%",
      "height": "100%",
      "backgroundColor": "#000"
    },
    "player": {
      "width": "100%",
      "height": "100%"
    },
    "channelLabel": {
      "position": "absolute",
      "bottom": "20px",
      "right": "20px",
      "fontSize": "18px",
      "fontWeight": "bold",
      "color": "#ff0",
      "zIndex": "1000",
      "backgroundColor": "rgba(0, 0, 0, 0.5)",
      "padding": "5px 10px",
      "borderRadius": "5px"
    },
    "controls": {
      "position": "absolute",
      "bottom": "20px",
      "left": "20px",
      "zIndex": "1000",
      "display": "flex",
      "gap": "10px",
      "opacity": "0",
      "transition": "opacity 0.5s ease"
    },
    "controlBtn": {
      "backgroundColor": "rgba(0, 0, 0, 0.7)",
      "color": "white",
      "border": "1px solid #ff0",
      "padding": "8px 15px",
      "borderRadius": "5px",
      "cursor": "pointer",
      "fontSize": "14px",
      "transition": "all 0.3s"
    },
    "loading": {
      "position": "absolute",
      "top": "50%",
      "left": "50%",
      "transform": "translate(-50%, -50%)",
      "color": "white",
      "fontSize": "18px",
      "zIndex": "1001"
    },
    "errorMessage": {
      "position": "absolute",
      "top": "50%",
      "left": "50%",
      "transform": "translate(-50%, -50%)",
      "backgroundColor": "rgba(255, 0, 0, 0.8)",
      "color": "white",
      "padding": "20px",
      "borderRadius": "10px",
      "textAlign": "center",
      "zIndex": "1003",
      "maxWidth": "80%",
      "display": "none"
    },
    "playOverlay": {
      "position": "absolute",
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100%",
      "backgroundColor": "rgba(0, 0, 0, 0.7)",
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "center",
      "alignItems": "center",
      "zIndex": "1002",
      "color": "white",
      "textAlign": "center"
    },
    "volumeControl": {
      "position": "absolute",
      "top": "20px",
      "right": "20px",
      "zIndex": "1000",
      "display": "flex",
      "alignItems": "center",
      "gap": "10px",
      "opacity": "0",
      "transition": "opacity 0.5s ease"
    }
  },
  "githubSetup": {
    "requirements": [
      "ไฟล์ต้องอยู่ในรูปแบบ raw URL",
      "ใช้รูปแบบ: https://raw.githubusercontent.com/username/repo/branch/filename.m3u8",
      "ไฟล์ M3U8 ต้องมีลิงก์ TS ที่ถูกต้อง",
      "ลิงก์ TS ภายในไฟล์ต้องเข้าถึงได้และรองรับ CORS"
    ],
    "exampleUrls": {
      "rawGitHub": "https://raw.githubusercontent.com/your-username/your-repo/main/HBO_3BB.m3u8",
      "gist": "https://gist.githubusercontent.com/your-username/gist-id/raw/HBO_3BB.m3u8"
    }
  },
  "troubleshooting": {
    "commonIssues": [
      "ไฟล์ M3U8 ไม่มีลิงก์ TS ที่ถูกต้อง",
      "ลิงก์ TS ภายในไฟล์ M3U8 ไม่รองรับ CORS",
      "ไฟล์ M3U8 มีรูปแบบไม่ถูกต้อง",
      "ลิงก์ TS เป็น HTTP ในขณะที่หน้าเว็บเป็น HTTPS"
    ],
    "solutions": [
      "ตรวจสอบว่าไฟล์ M3U8 มีลิงก์ TS ที่ทำงานได้",
      "ใช้ CORS proxy สำหรับลิงก์ TS",
      "ตรวจสอบรูปแบบไฟล์ M3U8 ด้วยเครื่องมือออนไลน์",
      "ให้แน่ใจว่าทั้ง M3U8 และลิงก์ TS ใช้ HTTPS"
    ]
  }
}
