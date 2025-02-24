# Lighthouse CI Demo Site

This is a **demo website** created to test and showcase how to integrate and utilize **Lighthouse CI** for automated performance auditing and monitoring. The site consists of **2-3 simple web pages**, hosted on **GitHub Pages**, and includes a GitHub Actions workflow to run Lighthouse CI automatically on every push to the repository.

## how do i Demonstrate how to set up **Lighthouse CI** for performance testing.

- Show how **GitHub Actions** can automate Lighthouse audits.
- Analyze **core web vitals** such as performance, accessibility, best practices, and SEO.
- Present insights into optimizing web performance using Lighthouse reports.

## Features

- **Static website** with multiple pages for testing.
- **Automated Lighthouse CI workflow** running in GitHub Actions.
- **Performance reports** generated and stored as artifacts.
- **Public Lighthouse report links** for easy sharing.

## Setup and Deployment

1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/lighthouse-ci-demo.git
   cd lighthouse-ci-demo
   ```
2. Install dependencies (if needed for local testing):
   ```sh
   npm install -g serve
   serve .
   ```
3. Deploy to **GitHub Pages** by enabling it in the repository settings.
4. GitHub Actions will automatically run Lighthouse audits on deployment.

## Viewing Lighthouse Reports

- After a successful workflow run, reports can be accessed under **GitHub Actions**.
- Public reports are available via Lighthouse’s **temporary public storage** feature.

## Why This Matters

Using Lighthouse CI with GitHub Actions provides an **automated, scalable way** to measure and maintain web performance over time. This demo showcases **best practices** for integrating Lighthouse into a development workflow, ensuring websites stay optimized for speed, accessibility, and user experience.

---

📌 **This project is for educational and demonstration purposes.** Feel free to modify and expand upon it for your own needs!

