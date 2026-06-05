# Emmanuel Security Systems

A business website for Emmanuel Security Systems — a security solutions provider based in Kumasi, Ghana, offering CCTV installation, electric fencing, gate motors, razor wire, doorbell cameras, and house wiring.

Live site: [emmanuelsecuritysystems.com](https://emmanuelsecuritysystems.com)

---

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Hosted on GitHub Pages with a custom domain

---

## Project Structure

```
/
├── index.html              # Root redirect to html/index.html (required by GitHub Pages)
├── CNAME                   # Custom domain config
├── html/
│   ├── index.html          # Homepage
│   ├── about-us.html       # About page + quote request form
│   ├── service-details.html# Full service breakdown
│   ├── contact-us.html     # Contact form + business info
│   ├── privacy-policy.html # Privacy policy
│   └── terms-of-service.html
├── css/
│   ├── homepage.css
│   ├── about.css
│   ├── contact-us.css
│   ├── service-details.css
│   └── legal.css           # Shared styles for privacy & terms pages
├── js/
│   ├── nav.js              # Mobile hamburger menu
│   ├── stars.js            # Animated star background (homepage only)
│   └── scroll.js
└── assets/
    ├── favicon.svg
    ├── camera/
    ├── Doorbell/
    ├── Gate/
    ├── electric_fence/
    ├── house_wiring/
    └── razor_fence/
```

---

## Pages

| Page | File | Description |
|---|---|---|
| Home | `html/index.html` | Hero, trust badges, solutions overview |
| About Us | `html/about-us.html` | Company history, services summary, quote form |
| Solutions | `html/service-details.html` | Detailed breakdown of all 6 services |
| Contact Us | `html/contact-us.html` | Contact form, direct contact info, business hours |
| Privacy Policy | `html/privacy-policy.html` | Data handling policy (Ghana Data Protection Act) |
| Terms of Service | `html/terms-of-service.html` | Service terms and conditions |

---



## Deployment

The site is deployed via GitHub Pages. Pushing to the `main` branch automatically updates the live site.

The `CNAME` file maps the custom domain `emmanuelsecuritysystems.com` to the GitHub Pages URL. DNS is managed separately through the domain registrar.

---

## License

Copyright (c) 2026 Emmanuel Security Systems. All rights reserved. See [LICENSE](LICENSE) for details.

---

## Contact

**Emmanuel Security Systems**  
Kumasi, Ghana  
Phone / WhatsApp: +233 20 748 1660  
Email: info@emmanuelsecurity.com
