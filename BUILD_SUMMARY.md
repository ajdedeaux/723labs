# 723 Labs Website - Build Summary

**Date:** December 17, 2025
**Status:** Alpha Build Complete
**Stack:** React + TypeScript + Vite + Tailwind + Shadcn

---

## 1. File Structure

```text
client/
├── index.html                 # Entry point with meta tags and font imports
├── src/
│   ├── App.tsx               # Main application component & Wouter routing
│   ├── index.css             # Global styles, Tailwind theme, custom variables
│   ├── main.tsx              # React DOM entry
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    # Responsive navigation bar
│   │   │   └── Footer.tsx    # Site footer with links
│   │   └── ui/               # Shadcn UI components (Button, Input, etc.)
│   ├── pages/
│   │   ├── Home.tsx          # Landing page (Story + Methodology)
│   │   ├── CaseStudy.tsx     # Chef G detailed breakdown
│   │   ├── Services.tsx      # Pricing packages grid
│   │   ├── About.tsx         # Founder story
│   │   └── Contact.tsx       # Discovery call form
│   └── lib/                  # Utilities
└── attached_assets/          # Generated assets
    ├── generated_images/     # AI-generated assets (backgrounds, mockups)
```

---

## 2. Pages Built

| Page | Route | Description | Key Sections |
|------|-------|-------------|--------------|
| **Home** | `/` | The main sales narrative. | Hero (Video/Grid), The Problem (Pain Points), The Solution (3 Pillars), Proof Teaser, Philosophy, Agency Comparison, CTA. |
| **Case Study** | `/case-study` | Proof of competence. | Chef G Transformation, Before/After Metrics, Feature Breakdown, Visual Mockup. |
| **Services** | `/services` | Productized offerings. | 5-Tier Pricing Grid (Foundation -> Full OS), ROI Calculation, "What's Not Included". |
| **About** | `/about` | Founder story & trust. | "Fresh Out" Narrative, Methodology Origin, Why 723 Labs. |
| **Contact** | `/contact` | Conversion point. | Discovery Form, Expectations Setting. |

---

## 3. Components Created

### Layout Components
- **`Navbar`**: Fixed, backdrop-blur header with responsive mobile menu.
- **`Footer`**: Minimal footer with site map and legal placeholders.

### UI Components (Shadcn/Custom)
- **`Button`**: Customized with sharp corners (`rounded-none`) and bracket style `[ Let's Talk ]` for technical feel.
- **`Input` / `Textarea`**: Styled with dark backgrounds and zinc borders to match the stealth aesthetic.
- **`Form`**: React Hook Form wrapper for validation.
- **`Toast`**: Notification system for form submission feedback.

---

## 4. Styling & Art Direction

**Aesthetic:** "Stealth Bomber" / "Dark Future"
- **Visuals:** Minimal, text-forward, high contrast, subtle grid textures.

**Typography:**
- **Headings:** `Space Grotesk` (Technical, bold, modern)
- **Body:** `Inter` (Clean, legible, neutral)
- **Mono:** `JetBrains Mono` (Code, data, technical specs)

**Color Palette (Tailwind Variables):**
- **Background:** `hsl(240 10% 3.9%)` (Dark Zinc/Black)
- **Foreground:** `hsl(0 0% 98%)` (Off-white)
- **Accent/Muted:** `hsl(240 3.7% 15.9%)` (Dark Grey)
- **Destructive:** `hsl(0 62.8% 30.6%)` (Deep Red)

**Custom CSS (`index.css`):**
- `.tech-grid`: Custom CSS background pattern for the Hero section.
- `.glass-card`: Backdrop blur utility for overlays.
- `rounded-none`: Global override for buttons to enforce the "sharp/technical" look.

---

## 5. Integrations

- **Routing:** `wouter` implemented for client-side routing.
- **Forms:** `react-hook-form` + `zod` validation.
  - **Current State:** The form logs data to the console and shows a success toast (simulation).
  - **Pending:** Integration with Google Sheets API (Backend required).
- **Assets:** AI-generated visuals for the Hero background and Case Study mockup using `generate_image_tool`.

---

## 6. Copy Implemented

✅ **Home:** Full sales copy from spec (Hook, Problem, Solution, Comparison Table).
✅ **Case Study:** Chef G narrative, metrics, and before/after points.
✅ **Services:** Complete 5-package grid with pricing and deliverables.
✅ **About:** "Fresh Out Framework" story and personal narrative.
✅ **Contact:** "45 minutes. No charge." framing and expectation setting.

*Note: Placeholder text remains for Terms of Service and Privacy Policy links.*

---

## 7. What's Working

- **Navigation:** Fully responsive. Mobile menu works smoothly.
- **Routing:** All page links function correctly without full page reloads.
- **Forms:** Validation works (required fields, email format), submission state handles loading/success.
- **Responsive Design:** Grid layouts stack correctly on mobile (1 col) vs desktop (3 col).
- **Visuals:** Dark mode aesthetic is consistent across all pages.

---

## 8. What's Pending

- **Google Sheets Integration:** Backend endpoint needs to be connected to the form.
- **Calendly Embed:** User to provide Calendly link for the Contact page.
- **Real Analytics:** Analytics scripts (PostHog/Google) need to be added.
- **Legal Pages:** Privacy Policy and Terms of Service content is missing.

---

## 9. Deviations from Spec

- **Hero Visual:** Used an abstract "Tech Grid" instead of a generic dark background to give it more "engineering" character.
- **Mockup:** Generated a 3D isometric view of the dashboard for the Case Study to make the "Software" aspect tangible.
- **Menu Animation:** Added a slide-down animation to the mobile menu for a more polished feel.

---

## 10. Deploy Status

- **Current State:** Running locally in Replit Dev Environment.
- **Readiness:** Frontend is production-ready visually.
- **Next Steps:**
  1. Approve design.
  2. Add Calendly link.
  3. Deploy to Replit Production or connect custom domain `723labs.io`.

---

# Website Copy Inventory

## Home Page (/)

**Hero:**
> **Headline:** I BUILD THE MACHINE SO YOU CAN FOCUS ON THE WORK.
> **Subhead:** Complete business operating systems for service companies. Not websites — revenue machines that run while you sleep.
> **CTA:** [ Book a Discovery Call ]

**Problem Section:**
> **Headline:** You're Probably Doing This Right Now
> **Subhead:** Great service. No system. That's the gap.
> **Points:**
> - Leads come in through 5 different channels, none connected.
> - You respond when you can — sometimes same day, sometimes not.
> - Your 'CRM' is a spreadsheet you haven't opened in weeks.
> - Your website looks fine but doesn't actually convert.
> - You know you need a system but don't have time to build one.

**Solution Section:**
> **Headline:** What If Your Business Ran Without You?
> **Subhead:** One engagement. Complete system. You own everything.
> **Pillars:**
> 1. **Capture:** Website that converts, forms that qualify, 24/7 lead capture.
> 2. **Automate:** AI that responds instantly, calendars that sync, payments that collect.
> 3. **Grow:** Marketing strategy based on real data, ads that work, ROI you can measure.

**Proof Teaser:**
> **Headline:** Built in 6 Weeks. Paying for Itself in 60 Days.
> **Tag:** CASE STUDY: CHEF G EVENTS
> **Stats:**
> - 12+ page custom web application
> - Voice AI that calls leads in < 60s
> - $2,125 average ticket
> - 19% close rate
> - 20x+ projected ROAS
> **CTA:** See the Full Case Study

**Philosophy:**
> **Quote:** "Build Fast. Test Relentlessly. Kill What Doesn't Work."
> **Body:** We built a text-based AI assistant. It worked technically. But real-world testing showed it needed more personal touch. We killed it in a week and pivoted to voice AI — which performed significantly better on day one. That's the methodology: every automation is tested against real leads.
> **Tagline:** Automation finds the humans. That's the point.

**Comparison:**
> **Headers:** Cost | Timeline | Deliverables | AI Included | Ongoing Cost
> **Traditional Agency:** $45K - $133K | 3-6 months | Website, maybe strategy | $10K add-on | $850 - $3,700/mo
> **723 Labs:** $6K - $25K | 4-6 weeks | Complete Operating System | Standard | <$100/mo

**Final CTA:**
> **Headline:** Let's See If This Fits.
> **Body:** 45 minutes. No charge. You'll leave with clarity on what you need — even if you don't hire me.
> **Button:** Schedule Discovery Call

## Case Study Page (/case-study)

**Hero:**
> **Headline:** How a Catering Business Became a Revenue Machine
> **Subhead:** Chef G Events: From referral-dependent to systematically scalable in 6 weeks.

**Before:**
> **Headline:** Before: Great Food, No System
> **Points:**
> - No systematic lead capture (Instagram DMs, random emails)
> - Manual follow-up — every lead required personal response
> - No CRM — leads tracked in text messages and memory
> - Outdated website that didn't reflect brand quality
> - Inconsistent pricing — every quote started from scratch
> - No marketing strategy — occasional Instagram posts only
> **Quote:** "The business was successful on referrals alone — proof of an excellent product. But growth was capped by operational capacity."

**After:**
> **Headline:** After: Complete Operating System
> **Digital Presence:** 12+ page custom web application, Mobile-first premium aesthetic, Conversion-optimized homepage
> **Lead Capture & CRM:** Multi-step contact form, Unique Lead ID system, Auto-logging to Google Sheets
> **AI-Powered Response:** Voice AI calls leads in < 60s, Natural conversation & qualification, Warm handoff to human team
> **Booking & Payments:** Automated booking flow, Real-time calendar sync, $200 deposit collection via Stripe

**Numbers:**
> **Lead Response:** Instant (24/7)
> **Capture Rate:** 100% Tracked
> **Quote Time:** 5 Minutes
> **Projected ROAS:** 20x+

## Services Page (/services)

**Hero:**
> **Headline:** From Website to Operating System
> **Subhead:** Five packages. One methodology. You choose how deep to go.

**Packages:**
1. **Foundation Build ($3,500 - $5,000)**
   - For businesses that need a complete digital presence from scratch.
   - 5-8 page web application, Mobile-responsive design, Lead capture forms, CRM integration, Email + SMS notifications.
2. **Intelligence Layer ($6,000 - $8,500)**
   - For businesses ready to add AI capabilities.
   - Everything in Foundation + AI customer service assistant, Conversation logging, Lead scoring.
3. **Conversion Engine ($9,000 - $12,000)**
   - For businesses ready for automated booking and payments.
   - Everything in Intelligence + Automated booking flow, Stripe payment integration, Calendar integration.
4. **Growth System ($12,000 - $16,000)**
   - For businesses ready to scale with marketing.
   - Everything in Conversion + Lead data analysis, Marketing strategy, Ad creative library, ROI modeling.
5. **Full Operating System ($18,000 - $25,000)**
   - For businesses that want everything — the complete Chef G model.
   - Everything in Growth + Internal tools, Complete documentation, Brand kit, Priority support.

**CTA:**
> **Headline:** Not Sure Which Package?
> **Body:** Let's talk through your situation. I'll tell you what makes sense — even if it's not the biggest package.

## About Page (/about)

**Hero:**
> **Headline:** From Zero to Operating Systems.
> **Subhead:** The 723 Labs Story

**Story:**
> In April 2023, I walked out of federal prison after nine years. No network. No resume. No clue how much the world had changed.
> Within 18 months, I became the #1 Sleep Expert in my Mattress Firm district, generating $1.2M+ in annual sales. I landed a junior consultant role at Analytics AIML. And I built a complete business operating system for a catering company — while working a full-time W-2.

**How I Learned:**
> I didn't go to bootcamp. I didn't hire a coach. I learned by doing. My uncle Frank Shines — Lean Six Sigma Black Belt — taught me to see business as systems. But the real accelerator was AI. I realized that what took developers weeks, I could build in days. The constraint of having no formal training became an advantage.

**Why 723 Labs?**
> The name isn't random. 7/23 marks a turning point — a date that changed everything. It's a reminder that transformation happens on specific days, through specific decisions.
> "Small business owners don't need another agency that charges $50K and takes six months. They need someone who understands constraint. Who builds fast because they have to."

**Trust:**
> I don't hide my story. I lead with it. When a client asks "Why should I trust you?" — the answer is simple: Look at what I built. Look at the results. And understand that I built this while working 50+ hours a week at a day job.
> If I can build this under those constraints, imagine what I can do with your business.

## Contact Page (/contact)

**Hero:**
> **Headline:** Let's Talk.
> **Subhead:** 45 minutes. No charge. You'll leave with clarity on what you need — even if you don't hire me.

**Expectations:**
> **What happens next?**
> 1. You submit this form.
> 2. I'll email you to book a time.
> 3. We meet, audit your system, and see if there's a fit.

**Form Fields:**
> Name, Email, Company, Current Website (Optional), What's the biggest bottleneck right now?
