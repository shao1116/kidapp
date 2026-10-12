# KidApp｜小小認字探險家

一個適合小朋友玩的繁體中文／英文看圖認字網頁遊戲。

## 遊戲特色

- 六大主題：常見車輛、交通載具、工程車、餐具、水果、蔬菜，共 62 張圖卡。
- 每題顯示中英文名稱，並提供六張圖片讓小朋友選出正確答案。
- 中文及英文朗讀（需瀏覽器支援 Web Speech API）、答題提示、答對回饋與闖關記錄。
- 響應式設計，適合手機、平板與桌面瀏覽器。
- 圖卡內嵌於 `index.html`，無須額外圖片伺服器。

## 開始遊玩

開啟本儲存庫的 GitHub Pages 網址即可。亦可下載 `index.html` 並使用瀏覽器開啟。

## 在 GitHub Pages 發布

1. 建立名稱為 `kidapp` 的 **Public** GitHub repository。
2. 將 `index.html`、`README.md`、`.nojekyll` 放在預設分支（通常是 `main`）的根目錄。
3. 在 repo 的 **Settings → Pages** 中，選擇 **Deploy from a branch**、分支 `main` 與 `/ (root)`，儲存。
4. 等待 GitHub Pages 發布完成後，遊戲通常位於 `https://<你的 GitHub 使用者名稱>.github.io/kidapp/`。

## 備註

- 朗讀需瀏覽器提供對應語音；少數裝置可能沒有可用的中文／英文語音。
- 如要修改題庫或版面，可直接編輯 `index.html`。