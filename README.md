# KidApp｜小小遊戲樂園

適合小朋友使用的繁體中文兒童學習遊戲網站，支援手機、平板和桌面瀏覽器。

## 🎮 網頁入口

- **KidApp 遊戲導覽首頁**：https://shao1116.github.io/kidapp/
- **小小認字探險家**：https://shao1116.github.io/kidapp/apps/word-explorer/

目前已開放「小小認字探險家」，未來可以在導覽頁持續增加其他小遊戲。

## 🧩 小小認字探險家

- 六大主題：常見車輛、交通載具、工程車、餐具、水果、蔬菜，共 62 張圖卡。
- 顯示中英文名稱，每題從六張圖片中選擇正確答案。
- 中文和英文朗讀（視瀏覽器與裝置語音支援）、提示、答題回饋和闖關紀錄。
- 圖卡已內嵌在遊戲檔案中，不依賴外部圖片網址。

## 📁 專案結構

```text
kidapp/
├── index.html                       # KidApp 遊戲導覽首頁
├── apps/
│   └── word-explorer/
│       └── index.html               # 小小認字探險家
├── .nojekyll
└── README.md
```

## 🚀 GitHub Pages

此專案使用 **GitHub Pages**，發布來源為 `main` 分支的 `/ (root)`。新增遊戲時，可在 `apps/<game-name>/index.html` 新增獨立遊戲頁面，再將連結加入根目錄 `index.html` 的遊戲卡片。

若 GitHub Pages 發生排隊或部署失敗，請到 [Actions](https://github.com/shao1116/kidapp/actions) 查看部署狀態及日誌。提交成功不等於網站部署成功，須以最新的 Pages deploy 結果為準。

## 備註

語音發音依裝置是否支援 Web Speech API，以及是否具備適當語音套件而定。
