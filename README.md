# Villager-bloc-h.github.io

Villager-bloc-h 的个人主页：单页 HTML / CSS / JS，无框架、无构建步骤。

内容只有：头像、姓名、身份「中文 Minecraft Wiki 协管员」，以及四个链接。

## 本地预览

直接打开 `index.html`，或：

```bash
cd Villager-bloc-h.github.io
python -m http.server 8000
```

## 部署

1. 新建公开仓库，名称必须是 `Villager-bloc-h.github.io`。
2. 推送本目录到 `main` 分支：

   ```bash
   git init
   git add .
   git commit -m "Add personal site"
   git branch -M main
   git remote add origin https://github.com/Villager-bloc-h/Villager-bloc-h.github.io.git
   git push -u origin main
   ```

3. 仓库 **Settings → Pages**：Source 选 **Deploy from a branch**，Branch 选 **main**、目录 **/ (root)**，保存。
4. 访问 <https://villager-bloc-h.github.io/>。

不要删除 `.nojekyll`。若用户名或域名不同，请同步修改 `index.html`、`404.html` 中的绝对地址。

## 文件

```
├── index.html          # 主页
├── 404.html            # 404 页
├── assets/
│   ├── style.css
│   ├── main.js
│   ├── Vbh.png
│   ├── apple-touch-icon.png
│   └── og.png
├── .nojekyll
├── LICENSE
└── README.md
```

## 修改

- 文字与链接：`index.html`
- 配色：`assets/style.css` 顶部的 `:root` 与 `[data-theme="light"]`
- 头像：替换 `assets/Vbh.png`（同时作为 favicon，建议正方形）
- 分享图：替换 `assets/og.png`（1200×630）

## 许可

代码以 [MIT License](LICENSE) 开源。头像图片来自 Minecraft，版权归原作者与 Mojang Studios。
