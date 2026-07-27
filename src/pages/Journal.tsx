import { useState, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Search, ArrowLeft, ArrowRight, Clock, Calendar, User, Tag, Sparkles, Share2, BookOpen, ChevronRight, CheckCircle2 } from "lucide-react";
import { D, M, B, GOLD, EASE } from "../lib/constants";
import { JOURNAL_ARTICLES, JOURNAL_CATEGORIES, JournalArticle } from "../lib/journalData";
import { useSEO } from "../lib/useSEO";

export default function JournalPage() {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const currentArticle = useMemo(() => {
    if (!slug) return null;
    return JOURNAL_ARTICLES.find(a => a.slug === slug) || null;
  }, [slug]);

  // SEO configuration
  useSEO({
    title: currentArticle
      ? `${currentArticle.title} | Cosmo Home Journal`
      : "Journal | Aesthetic Medicine Insights & Skin Health by Cosmo Home",
    description: currentArticle
      ? currentArticle.excerpt
      : "Explore evidence-based dermatology insights, skin science, and aesthetic medicine articles curated by Dr. Ruxana and the Cosmo Home team.",
    keywords: currentArticle
      ? currentArticle.tags.join(", ")
      : "dermatology blog, skin science, HIFU science, exosome therapy, skin boosters, aesthetic medicine articles"
  });

  // Filtered articles logic
  const filteredArticles = useMemo(() => {
    return JOURNAL_ARTICLES.filter(article => {
      const matchesCategory = selectedCategory === "All Articles" || article.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = useMemo(() => {
    return JOURNAL_ARTICLES.find(a => a.featured) || JOURNAL_ARTICLES[0];
  }, []);

  // Handle Share functionality
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentArticle?.title || "Cosmo Home Journal",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  // IF AN ARTICLE IS SELECTED (Detail View)
  if (currentArticle) {
    const relatedArticles = JOURNAL_ARTICLES.filter(a => a.slug !== currentArticle.slug).slice(0, 3);

    return (
      <div className="bg-[#FAF7F2] min-h-screen pt-24 pb-20 text-[#2C1810]">
        {/* Header Breadcrumb & Back */}
        <div className="max-w-4xl mx-auto px-6 mb-8 pt-4">
          <button
            onClick={() => navigate("/journal")}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#8C5D47] hover:text-[#2C1810] transition-colors py-2 group"
            style={B}
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </button>
        </div>

        {/* Article Container */}
        <article className="max-w-4xl mx-auto px-6">
          {/* Category & Tags */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#C9956A]/15 text-[#8C5D47] text-[10px] font-semibold tracking-[0.2em] uppercase rounded-full" style={M}>
              {currentArticle.category}
            </span>
            <div className="flex items-center gap-2 text-xs text-[#5C4A42]/70" style={B}>
              <Clock size={13} className="text-[#C9956A]" />
              <span>{currentArticle.readTime}</span>
              <span>•</span>
              <Calendar size={13} className="text-[#C9956A]" />
              <span>{currentArticle.publishedAt}</span>
            </div>
          </div>

          {/* Title */}
          <h1 style={D} className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C1810] leading-tight mb-6">
            {currentArticle.title}
          </h1>

          {/* Excerpt Lead */}
          <p style={B} className="text-lg md:text-xl text-[#5C4A42] leading-relaxed font-light mb-8 border-l-2 border-[#C9956A] pl-4 italic">
            {currentArticle.excerpt}
          </p>

          {/* Author Bar */}
          <div className="flex items-center justify-between py-4 border-y border-[#2C1810]/10 mb-10">
            <div className="flex items-center gap-4">
              <img
                src={currentArticle.author.avatar}
                alt={currentArticle.author.name}
                className="w-12 h-12 rounded-full object-cover border border-[#C9956A]/30"
              />
              <div>
                <h4 style={D} className="text-base font-medium text-[#2C1810]">
                  {currentArticle.author.name}
                </h4>
                <p style={M} className="text-[11px] text-[#C9956A] uppercase tracking-wider">
                  {currentArticle.author.role}
                </p>
              </div>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8C5D47] border border-[#8C5D47]/20 rounded-full px-4 py-2 hover:bg-[#8C5D47]/5 transition-colors uppercase"
              style={B}
            >
              <Share2 size={14} />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>

          {/* Main Hero Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-12 shadow-lg border border-[#2C1810]/5">
            <img
              src={currentArticle.image}
              alt={currentArticle.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Sections */}
          <div className="prose prose-lg max-w-none text-[#2C1810]/90 font-light leading-relaxed space-y-10" style={B}>
            {currentArticle.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                {sec.heading && (
                  <h2 style={D} className="text-2xl sm:text-3xl font-medium text-[#2C1810] pt-4">
                    {sec.heading}
                  </h2>
                )}
                <p className="whitespace-pre-line text-base sm:text-lg text-[#3E2D25] leading-relaxed">
                  {sec.content}
                </p>
                {sec.quote && (
                  <blockquote className="my-6 p-6 bg-[#FAF6F0] rounded-xl border-l-4 border-[#C9956A] text-[#2C1810] italic text-base sm:text-lg">
                    "{sec.quote}"
                  </blockquote>
                )}
                {sec.callout && (
                  <div className="my-6 p-6 bg-[#C9956A]/10 rounded-xl border border-[#C9956A]/30 flex items-start gap-4">
                    <Sparkles className="text-[#C9956A] shrink-0 mt-1" size={20} />
                    <p className="text-sm sm:text-base font-normal text-[#2C1810]" style={B}>
                      {sec.callout}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-[#2C1810]/10 flex flex-wrap gap-2 items-center">
            <Tag size={15} className="text-[#C9956A] mr-2" />
            {currentArticle.tags.map(tag => (
              <span
                key={tag}
                className="text-xs bg-[#2C1810]/5 text-[#5C4A42] px-3 py-1 rounded-md font-medium"
                style={B}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Doctor Consultation CTA Card */}
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#2C1810] text-[#FAF7F2] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 z-10 max-w-xl">
              <span className="text-[10px] tracking-[0.25em] text-[#C9956A] uppercase font-semibold" style={M}>
                EXPERT DERMATOLOGY CONSULTATION
              </span>
              <h3 style={D} className="text-2xl sm:text-3xl">
                Have questions about this treatment for your skin?
              </h3>
              <p style={B} className="text-sm text-[#FAF7F2]/80 leading-relaxed font-light">
                Schedule an in-depth clinical consultation with Dr. Ruxana and our specialist dermatologists for a personalized skin analysis.
              </p>
            </div>
            <motion.a
              href="https://wa.me/919495511628"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="z-10 shrink-0 bg-[#8C5D47] text-[#FAF7F2] px-7 py-3.5 rounded-[4px] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#A0603A] transition-all flex items-center gap-2.5 shadow-md"
              style={B}
            >
              Book Consultation
              <ArrowRight size={15} />
            </motion.a>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-20">
              <h3 style={D} className="text-2xl sm:text-3xl text-[#2C1810] mb-8">
                More Articles from the Journal
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedArticles.map(art => (
                  <Link
                    key={art.slug}
                    to={`/journal/${art.slug}`}
                    className="group bg-white rounded-xl border border-[#2C1810]/10 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-semibold text-[#C9956A] uppercase tracking-wider block mb-2" style={M}>
                          {art.category}
                        </span>
                        <h4 style={D} className="text-base font-normal text-[#2C1810] group-hover:text-[#C9956A] transition-colors leading-snug line-clamp-2 mb-2">
                          {art.title}
                        </h4>
                      </div>
                      <span style={B} className="text-xs text-[#8C5D47] font-semibold flex items-center gap-1 mt-4">
                        Read Story <ChevronRight size={13} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    );
  }

  // MAIN JOURNAL LISTING VIEW
  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-24 pb-20 text-[#2C1810]">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pt-8 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[#C9956A] text-xs">✦</span>
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#C9956A] uppercase" style={M}>
              Clinical Insights & Skin Philosophy
            </span>
            <span className="text-[#C9956A] text-xs">✦</span>
          </div>
          <h1 style={D} className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#2C1810] tracking-tight mb-6">
            The Cosmo Home Journal
          </h1>
          <p style={B} className="text-base sm:text-lg text-[#5C4A42] leading-relaxed font-light">
            Evidence-based skin guidance, treatment deep dives, and dermatological insights curated directly by Dr. Ruxana and our expert team.
          </p>
        </motion.div>
      </section>

      {/* Featured Article Hero Section (If available and no active search filter) */}
      {!searchQuery && selectedCategory === "All Articles" && featuredArticle && (
        <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            onClick={() => navigate(`/journal/${featuredArticle.slug}`)}
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E8E1D7] shadow-xl grid md:grid-cols-12 gap-0 hover:border-[#C9956A]/40 transition-all duration-500"
          >
            <div className="md:col-span-7 relative aspect-[16/10] md:aspect-auto overflow-hidden">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <span className="absolute top-4 left-4 bg-[#8C5D47] text-[#FAF7F2] text-[10px] font-semibold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-[4px]" style={M}>
                Featured Article
              </span>
            </div>
            <div className="md:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-[#FAF6F0]/60">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9956A]" style={M}>
                    {featuredArticle.category}
                  </span>
                  <span className="text-[#C9956A] text-xs">•</span>
                  <span className="text-xs text-[#5C4A42]/70" style={B}>
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 style={D} className="text-2xl sm:text-3xl font-normal text-[#2C1810] group-hover:text-[#C9956A] transition-colors leading-snug mb-4">
                  {featuredArticle.title}
                </h2>

                <p style={B} className="text-sm sm:text-base text-[#5C4A42] font-light leading-relaxed mb-6 line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-[#2C1810]/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredArticle.author.avatar}
                    alt={featuredArticle.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#C9956A]/40"
                  />
                  <div>
                    <p style={D} className="text-sm font-medium text-[#2C1810]">
                      {featuredArticle.author.name}
                    </p>
                    <p style={M} className="text-[10px] text-[#C9956A] uppercase tracking-wider">
                      {featuredArticle.author.role}
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#8C5D47]/10 text-[#8C5D47] group-hover:bg-[#8C5D47] group-hover:text-[#FAF7F2] transition-colors flex items-center justify-center shrink-0">
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-12">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pb-6 border-b border-[#2C1810]/10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-2 md:pb-0">
            {JOURNAL_CATEGORIES.map(category => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#8C5D47] text-[#FAF7F2] shadow-sm"
                      : "bg-white text-[#5C4A42] border border-[#E8E1D7] hover:border-[#8C5D47]/40"
                  }`}
                  style={B}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A6D5C]" />
            <input
              type="text"
              placeholder="Search articles or topics..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-full border border-[#E8E1D7] text-xs text-[#2C1810] focus:outline-none focus:border-[#C9956A] transition-colors"
              style={B}
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E8E1D7] p-8">
            <BookOpen size={40} className="mx-auto text-[#C9956A] mb-4 opacity-60" />
            <h3 style={D} className="text-xl text-[#2C1810] mb-2">No articles found</h3>
            <p style={B} className="text-sm text-[#5C4A42] mb-6">
              Try adjusting your search criteria or filter categories.
            </p>
            <button
              onClick={() => { setSelectedCategory("All Articles"); setSearchQuery(""); }}
              className="px-5 py-2 bg-[#8C5D47] text-white text-xs font-semibold uppercase tracking-wider rounded-[4px]"
              style={B}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
              >
                <Link
                  to={`/journal/${article.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E8E1D7] shadow-sm hover:shadow-xl hover:border-[#C9956A]/40 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Article Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#2C1810]/5">
                      <span className="text-[9px] font-semibold text-[#8C5D47] uppercase tracking-wider" style={M}>
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-[#5C4A42]/70 mb-3" style={B}>
                        <div className="flex items-center gap-1">
                          <Clock size={12} className="text-[#C9956A]" />
                          <span>{article.readTime}</span>
                        </div>
                        <span>•</span>
                        <span>{article.publishedAt}</span>
                      </div>

                      <h3 style={D} className="text-xl font-normal text-[#2C1810] group-hover:text-[#C9956A] transition-colors leading-snug mb-3 line-clamp-2">
                        {article.title}
                      </h3>

                      <p style={B} className="text-xs sm:text-sm text-[#5C4A42] font-light leading-relaxed line-clamp-3 mb-6">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Footer Author & Read link */}
                    <div className="pt-4 border-t border-[#2C1810]/10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={article.author.avatar}
                          alt={article.author.name}
                          className="w-7 h-7 rounded-full object-cover border border-[#C9956A]/30"
                        />
                        <span style={B} className="text-xs font-medium text-[#2C1810]">
                          {article.author.name}
                        </span>
                      </div>
                      <span style={B} className="text-xs text-[#8C5D47] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Book Consultation Footer Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mt-20">
        <div className="bg-[#2C1810] rounded-2xl p-8 sm:p-12 text-[#FAF7F2] text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C9956A]" style={M}>
              BEGIN YOUR SKIN JOURNEY
            </span>
            <h2 style={D} className="text-3xl sm:text-4xl">
              Personalized Dermal Care & Consultation
            </h2>
            <p style={B} className="text-sm sm:text-base text-[#FAF7F2]/80 font-light leading-relaxed">
              Have specific skin concerns? Speak directly with Dr. Ruxana for an ethical, evidence-based treatment plan tailored to you.
            </p>
            <div className="pt-4">
              <a
                href="https://wa.me/919495511628"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#8C5D47] text-[#FAF7F2] uppercase tracking-[0.18em] text-xs font-semibold px-8 py-4 rounded-[4px] hover:bg-[#A0603A] transition-all shadow-md"
                style={B}
              >
                Book Your Consultation
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
