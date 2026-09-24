# Mihir's Portfolio — Exact ChatGPT Conversation Interface ☕💬

This portfolio operates as an authentic **ChatGPT conversation interface** displaying your exact, unedited conversations with full support for embedded media (Images, Videos, and Files).

---

## 🚀 How to Run the Website

1. Double-click **`index.html`** in this folder to open it in your browser.
2. That's all! Zero installation, zero terminal commands, zero AI APIs.

---

## 💬 The 5 Supported Message Types

In [`data.js`](file:///c:/Users/user/Desktop/Mihir%20Portfolio/data.js), every conversation is an array of items using these 5 exact types:

### 1. `YOU` (User message)
```javascript
{
  type: "YOU",
  text: "Your exact prompt text here."
}
```

### 2. `CHATGPT` (Assistant message)
```javascript
{
  type: "CHATGPT",
  text: "Your exact response text here."
}
```

### 3. `IMAGE` (Clickable uncropped image with Lightbox)
```javascript
{
  type: "IMAGE",
  src: "/images/livestream-cup.jpg",
  caption: "Livestream Coffee — Cup Back Line"
}
```

### 4. `VIDEO` (Embedded video player)
```javascript
{
  type: "VIDEO",
  src: "/videos/my-video.mp4",
  caption: "Project Walkthrough Video"
}
```

### 5. `FILE` (Downloadable attachment card)
```javascript
{
  type: "FILE",
  name: "Livestream_Brand_Deck.pdf",
  size: "2.4 MB",
  src: "/files/deck.pdf"
}
```

---

## 📸 Placing Your Images

1. Place your image files into the **`images/`** folder:
   - `images/livestream-cup.jpg`
   - `images/livestream-01.jpg`
   - `images/livestream-02.jpg`
2. Images are displayed with **uncropped natural aspect ratios** and are **clickable** to open a full-screen high-resolution **Lightbox preview**.

---

## ☕ Exact Livestream Coffee Conversation

Loaded automatically on startup:

- **YOU**:
  > *"A brand called Livestream Coffee, which is a very popular cafe in Surat, needs a line for the back of their coffee cup. I don’t need anything generic like bean there, done that; I need something that connects with the person drinking coffee, so that it enables them to click a picture, because there are more than 200 cafes in Surat selling the same coffee, but if we get to be braggy enough, people will choose Livestream.  just give me 1 copy option"*

- **CHATGPT**:
  > *"If you’re drinking Livestream,*
  > *you’re already having a better day than everyone else."*

- **[IMAGE 1]**: `/images/livestream-cup.jpg`
- **[IMAGE 2]**: `/images/livestream-01.jpg`
- **[IMAGE 3]**: `/images/livestream-02.jpg`

---

## 📁 File Structure

- **`index.html`**: Main ChatGPT conversation window & sidebar
- **`style.css`**: ChatGPT dark theme & uncropped media styling
- **`data.js`**: Exact predefined conversations database
- **`app.js`**: Conversation renderer & lightbox handler
- **`images/`**: Your images folder
