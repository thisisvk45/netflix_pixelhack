# Netflix India - Pixel-Perfect Frontend Clone with Mood-Based Discovery  
**A submission for the Pixel Plus Hackathon 2025**

---

## 🧾 Overview

This project is part of my submission for the **Pixel Plus Hackathon 2025**. The goal was to replicate a real-world website with pixel-level precision and enhance it with original, functional features that improve the overall user experience.

I chose to build a **Netflix India** front-end clone using only **HTML**, **CSS**, and **Vanilla JavaScript** — with **no frameworks, no backend**, and a fully responsive layout.

The site includes advanced features such as **mood-based recommendations**, **voice input**, **weather-aware suggestions**, and a **simulated co-watch experience**, all built from scratch and fully functional.

---

## 🌐 Live Demo

**Live Site:** [https://pixelhacknetfl1x.netlify.app](https://pixelhacknetfl1x.netlify.app)

**GitHub Repo:** _[add your GitHub repo URL here]_

---

## ✅ Key Features

### 🎯 Core Experience
- Pixel-perfect UI based on [Netflix India](https://www.netflix.com/in)
- Each page is uniquely styled (not reused or duplicated)
- Fully responsive (mobile, tablet, desktop)
- Built entirely with **HTML, CSS, and vanilla JS**

### 🔍 UX Enhancements (All Visible & Functional in Header)
- **Mood-Based Filtering:** Select moods like Calm, Sad, Romantic, etc. to filter content
- **Voice + Text Input:** Users can describe how they feel; system returns content suggestions using Web Speech API
- **Story Vibe Generator:** Filter content by tone, plot twist level, and ending type
- **Weather-Aware Recommendations:** Simulates local weather and suggests content + snacks (e.g. “Rain in 30 minutes? Grab samosas and start a cozy drama”)
- **Watch Together (Simulated):** Mock feature with avatars and emoji reactions for shared viewing experience
- **Save This Mood:** Store mood-based watchlists locally with custom names
- **Surprise Me Button:** Random mood and show picker with simple animation
- **Dark/Light Mode Toggle:** Smooth transition + saved preference

---

## 📄 Pages Included

| Page            | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| `index.html`    | Landing page with voice/text mood input and weather banner                  |
| `login.html`    | Login form with basic validation and theme options                          |
| `signup.html`   | Signup layout with visual distinction                                       |
| `profiles.html` | Avatar-based profile selection                                              |
| `browse.html`   | Main dashboard with mood tools and personalized rows                        |
| `movie.html`    | Detailed movie view + related content                                       |
| `pricing.html`  | INR-based Netflix plan comparison layout                                    |

---

## 📦 Tech Used

- HTML5  
- CSS3  
- JavaScript (ES6 Modules)  
- Web Speech API (for voice input)  
- `localStorage` (for theme and playlist persistence)

---

## 📊 Movie Data

Movie content is sourced from a local `movies.json` file with 20+ unique entries, each tagged with:
- Genre
- Language
- Mood
- Tone
- Twist level
- Ending type

These tags are used for mood and story-based filtering.

---

## 🔐 License & Attribution

This project is built **only for educational and hackathon use**. It is not affiliated with or endorsed by Netflix, Inc. All branding and styling are for demonstration purposes only.

---

## 🙌 Credits

Built by [Your Name]  
Submitted to **Pixel Plus Hackathon 2025**
