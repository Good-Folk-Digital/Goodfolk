import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Braces, Check, ChevronRight, Code2, FileText, Github, Layers, Mail, ShieldCheck, Sparkles, Terminal, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import workshopGrid from "@/assets/workshop-grid.jpg";

const stacksiftUrl = "https://stacksift.goodfolkdigital.com";
const toolboxUrl = "https://tools.goodfolkdigital.com";
const githubUrl = "https://github.com/MadeByGFK";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goodfolk Digital — Small, sharp digital tools for good folks" },
      { name: "description", content: "A small software workshop building sharp, useful web tools. Try StackSift for fast log analysis, or browse 100 free tools in Goodfolk Toolbox." },
      { property: "og:title", content: "Goodfolk Digital — Small, sharp digital tools for good folks" },
      { property: "og:description", content: "Meet StackSift: drop in a log file and get an incident summary in 30 seconds. Free tier, no signup. Built by GFK." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Wordmark() {
  return <a href="#" className="wordmark" aria-label="Goodfolk Digital home"><Code2 aria-hidden="true" /><span>goodfolk<span className="wordmark-secondary">digital</span><span className="brand-period">.</span></span></a>;
}

function StackSiftPreview() {
  return (
    <div className="report-preview" aria-label="StackSift sample incident analysis">
      <div className="report-window-bar"><div className="window-dots"><i /><i /><i /></div><span>stacksift / analysis</span><span className="preview-indicator">SAMPLE</span></div>
      <div className="report-body">
        <div className="report-file"><span><FileText size={16} /> production.log</span><span className="analysis-complete"><Check size={13} /> Analysis complete</span></div>
        <div className="report-heading"><h3>Incident summary</h3><span>1,248 lines analyzed</span></div>
        <div className="severity-counts"><div><span className="severity-label critical"><i /> CRITICAL</span><strong>3</strong></div><div><span className="severity-label error"><i /> ERROR</span><strong>24</strong></div><div><span className="severity-label warning"><i /> WARNING</span><strong>86</strong></div><div><span className="severity-label info"><i /> INFO</span><strong>1,135</strong></div></div>
        <div className="report-issues-title"><span>Recurring issues</span><span>Occurrences</span></div>
        <div className="report-issue"><span><i className="issue-dot critical" /> Database connection timeout</span><span>18 <ChevronRight size={13} /></span></div>
        <div className="report-issue"><span><i className="issue-dot error" /> Upstream service unavailable</span><span>6 <ChevronRight size={13} /></span></div>
        <div className="report-issue"><span><i className="issue-dot warning" /> Rate limit approaching</span><span>42 <ChevronRight size={13} /></span></div>
        <div className="report-footer"><ShieldCheck size={13} /><span>File deleted. Insights kept.</span><span>00:08</span></div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="workshop-site">
      <header className="site-header"><div className="page-container nav-inner"><Wordmark /><nav aria-label="Main navigation"><a href="#products">Products</a><a href="#about">About</a><a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-nav"><Github size={16} /><span>GitHub</span><ArrowUpRight size={13} /></a></nav></div></header>
      <main>
        <section className="hero">
          <img className="hero-art" src={workshopGrid} width={1920} height={1024} alt="" fetchPriority="high" />
          <div className="hero-content page-container">
            <div className="eyebrow hero-eyebrow"><span className="status-dot" /> INDEPENDENT SOFTWARE WORKSHOP</div>
            <h1>Small, sharp digital tools<br />for <span>good folks.</span></h1>
            <p>We build useful web tools that do one thing well.<br className="desktop-break" /> Less friction. Less noise. More getting things done.</p>
            <div className="hero-actions"><Button asChild variant="workshop"><a href={stacksiftUrl}>Try StackSift free <ArrowUpRight /></a></Button><Button asChild variant="workshopOutline"><a href={toolboxUrl}>Browse 100 free tools <ArrowRight /></a></Button></div>
            <div className="hero-assurance"><span><Check size={13} /> Free to get started</span><i /> No signup needed</div>
          </div>
          <div className="hero-bottom-label"><span>BUILT SMALL. MADE USEFUL.</span><span>↓</span></div>
        </section>
        <section className="spotlight section-band" aria-labelledby="stacksift-heading">
          <div className="page-container spotlight-grid">
            <div className="spotlight-copy"><div className="eyebrow"><Sparkles size={13} /> FRESH FROM THE WORKSHOP</div><div className="product-title"><Layers size={30} /><h2 id="stacksift-heading">StackSift</h2><span className="badge live-badge"><i /> LIVE</span></div><h3>Drop in a log file.<br />Get an incident summary<br className="desktop-break" /> in <span>30 seconds.</span></h3><p className="section-description">Turn a wall of logs into a clear picture of what went wrong.<br className="desktop-break" /> Find the signal. Skip the scrolling.</p>
              <ul className="feature-list"><li><Check />Severity counts, with recurring issues ranked by severity and frequency</li><li><Check />Auto-detected JSON-lines and plain-text logs</li><li><Check />Free tier. No signup. Straight to the useful stuff.</li><li><Check />Private by design. Files deleted immediately after analysis.</li></ul>
              <Button asChild variant="workshop"><a href={stacksiftUrl}>Try StackSift free <ArrowUpRight /></a></Button>
            </div>
            <div className="spotlight-visual"><StackSiftPreview /><div className="preview-caption"><Terminal size={13} /><span>From log overload to a little clarity.</span></div></div>
          </div>
        </section>
        <section id="products" className="products-section section-band" aria-labelledby="products-heading"><div className="page-container"><div className="section-heading"><div><div className="eyebrow">THE TOOL SHED</div><h2 id="products-heading">Small tools. Real utility.</h2></div><p>A growing collection, built to earn its place.</p></div><div className="product-grid">
          <a className="product-card featured-card" href={stacksiftUrl}><div className="card-top"><span className="product-icon"><Layers /></span><span className="badge live-badge"><i /> LIVE</span></div><h3>StackSift</h3><p>Log files in. Incident summaries out.<br />Find what matters in 30 seconds.</p><div className="card-link">Sift your logs <ArrowUpRight size={17} /></div></a>
          <a className="product-card" href={toolboxUrl}><div className="card-top"><span className="product-icon toolbox-icon"><Wrench /></span><span className="badge live-badge"><i /> LIVE</span></div><h3>Goodfolk Toolbox</h3><p>100 free browser-based calculators and utilities. No installs. Just useful.</p><div className="card-link">Open the toolbox <ArrowUpRight size={17} /></div></a>
          <article className="product-card coming-card"><div className="card-top"><span className="product-icon rilivery-icon"><Mail /></span><span className="badge soon-badge">COMING SOON</span></div><h3>Rilivery</h3><p>Reporting automation: SQL and PowerShell to Excel to email, on a schedule.</p><div className="coming-label"><span className="status-dot" /> In the workshop</div></article>
        </div></div></section>
        <section id="about" className="about-section section-band" aria-labelledby="about-heading"><div className="page-container about-grid"><div><div className="eyebrow">THE FOLK BEHIND THE TOOLS</div><h2 id="about-heading">One person.<br />A practical streak.</h2></div><div className="about-copy"><p>Goodfolk Digital is a one-person software workshop run by <strong>GFK</strong>, building practical tools and automation. The kind of things that save you a few clicks, untangle a messy task, or give you a bit of your day back.</p><p>No big team. No grand promises. Just thoughtfully built software that gets out of your way.</p><a className="text-link" href={githubUrl} target="_blank" rel="noopener noreferrer"><Github size={16} /> Find me on GitHub <ArrowUpRight size={15} /></a></div></div></section>
      </main>
      <footer className="site-footer"><div className="page-container"><div className="footer-top"><Wordmark /><nav aria-label="Footer navigation"><a href={stacksiftUrl}>StackSift <ArrowUpRight size={12} /></a><a href={toolboxUrl}>Toolbox <ArrowUpRight size={12} /></a><a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={12} /></a></nav></div><div className="footer-bottom"><span>© 2026 Goodfolk Digital</span><span>Built by <strong>GFK</strong><span className="footer-dot">·</span>For good folks.</span><span className="footer-signoff"><Braces size={13} /> Small by design.</span></div></div></footer>
    </div>
  );
}
