"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, Star, Truck, ShieldCheck, ExternalLink, ChevronDown, ChevronUp, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { PRODUCTS, CATEGORIES, MERCHANTS } from "@/data/products";
import { searchProducts, type ScoredProduct, type SearchFilters } from "@/lib/scoring";

const DEFAULT_FILTERS: SearchFilters = {
  query: "",
  maxBudget: 300,
  category: "all",
  merchant: "any",
  maxDeliveryDays: 7,
};

function ResultCard({ product }: { product: ScoredProduct }) {
  const [expanded, setExpanded] = useState(false);

  const confidencePct = Math.min(100, Math.round((product.score / 22) * 100));
  const confidenceColor =
    confidencePct >= 80 ? "text-emerald-700 bg-emerald-50 border-emerald-200" :
    confidencePct >= 60 ? "text-teal-700 bg-teal-50 border-teal-200" :
                          "text-amber-700 bg-amber-50 border-amber-200";

  return (
    <Card className="relative overflow-hidden">
      {product.rank === 1 && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-teal-400" />
      )}
      <CardContent className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              {product.rank === 1 && <Badge variant="teal">Top Pick</Badge>}
              <Badge variant="neutral">#{product.rank}</Badge>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm leading-snug">{product.name}</h3>
            <p className="text-xs text-gray-400 mt-0.5">{product.merchant}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-2xl font-bold text-gray-900">${product.price}</div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="rounded-lg bg-sand-50 border border-sand-200 p-2 text-center">
            <div className="flex items-center justify-center gap-1 text-amber-500 mb-0.5">
              <Star size={11} className="fill-amber-500" />
              <span className="text-xs font-bold text-gray-900">{product.rating}</span>
            </div>
            <div className="text-[10px] text-gray-400">Rating</div>
          </div>
          <div className="rounded-lg bg-sand-50 border border-sand-200 p-2 text-center">
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <Truck size={11} className="text-teal-600" />
              <span className="text-xs font-bold text-gray-900">{product.deliveryDays}d</span>
            </div>
            <div className="text-[10px] text-gray-400">Delivery</div>
          </div>
          <div className="rounded-lg bg-sand-50 border border-sand-200 p-2 text-center">
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <ShieldCheck size={11} className="text-teal-600" />
              <span className="text-xs font-bold text-gray-900">{product.trustScore}</span>
            </div>
            <div className="text-[10px] text-gray-400">Trust</div>
          </div>
        </div>

        {/* Confidence score */}
        <div className={`flex items-center justify-between rounded-lg border px-3 py-2 mb-4 ${confidenceColor}`}>
          <span className="text-xs font-semibold">Match confidence</span>
          <span className="text-xs font-bold">{confidencePct}%</span>
        </div>

        {/* Summary */}
        <p className="text-xs text-gray-500 leading-relaxed mb-3">{product.reasonSummary}</p>

        {/* Why this? */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 text-xs text-teal-700 font-semibold hover:text-teal-600 transition-colors mb-3 w-full"
          aria-expanded={expanded}
        >
          {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          Why this recommendation?
        </button>

        {expanded && (
          <ul className="mb-4 space-y-1.5 pl-3 border-l-2 border-teal-200">
            {product.explanation.map((line) => (
              <li key={line} className="text-xs text-gray-600 leading-relaxed flex items-start gap-1.5">
                <span className="text-teal-600 mt-0.5 flex-shrink-0">✓</span>
                {line}
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <Button variant="primary" size="sm" className="w-full" asChild>
          <a href={product.merchantUrl} target="_blank" rel="noopener noreferrer">
            View on {product.merchant}
            <ExternalLink size={12} />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export function DemoApp() {
  const [filters, setFilters]   = useState<SearchFilters>(DEFAULT_FILTERS);
  const [results, setResults]   = useState<ScoredProduct[]>([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  function handleSearch() {
    if (!filters.query.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setResults(searchProducts(PRODUCTS, filters));
      setSearched(true);
      setLoading(false);
    }, 1000);
  }

  function handleReset() {
    setFilters(DEFAULT_FILTERS);
    setResults([]);
    setSearched(false);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid lg:grid-cols-[320px_1fr] gap-8">
        {/* Sidebar filters */}
        <aside>
          <div className="rounded-xl border border-sand-300 bg-white p-6 sticky top-20">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-base font-semibold text-gray-900 flex items-center gap-2">
                <SlidersHorizontal size={16} className="text-teal-700" />
                Your Rules
              </h2>
              <button onClick={handleReset} className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1 transition-colors">
                <RotateCcw size={12} /> Reset
              </button>
            </div>

            <div className="space-y-5">
              {/* Query */}
              <div>
                <label htmlFor="demo-query" className="block text-xs font-semibold text-gray-700 mb-1.5">
                  What do you need?
                </label>
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="demo-query"
                    type="text"
                    value={filters.query}
                    onChange={(e) => setFilters((f) => ({ ...f, query: e.target.value }))}
                    placeholder="e.g. wireless earbuds"
                    className="w-full pl-8 pr-3 py-2 rounded-md border border-sand-300 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="demo-budget" className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Max budget: <span className="text-teal-700">${filters.maxBudget}</span>
                </label>
                <input
                  id="demo-budget"
                  type="range"
                  min={20}
                  max={500}
                  step={10}
                  value={filters.maxBudget}
                  onChange={(e) => setFilters((f) => ({ ...f, maxBudget: Number(e.target.value) }))}
                  className="w-full accent-teal-700"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>$20</span><span>$500</span>
                </div>
              </div>

              {/* Category */}
              <div>
                <label htmlFor="demo-category" className="block text-xs font-semibold text-gray-700 mb-1.5">Category</label>
                <select
                  id="demo-category"
                  value={filters.category}
                  onChange={(e) => setFilters((f) => ({ ...f, category: e.target.value }))}
                  className="w-full px-3 py-2 rounded-md border border-sand-300 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>

              {/* Merchant */}
              <div>
                <label htmlFor="demo-merchant" className="block text-xs font-semibold text-gray-700 mb-1.5">Preferred merchant</label>
                <select
                  id="demo-merchant"
                  value={filters.merchant}
                  onChange={(e) => setFilters((f) => ({ ...f, merchant: e.target.value }))}
                  className="w-full px-3 py-2 rounded-md border border-sand-300 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                >
                  {MERCHANTS.map((m) => (
                    <option key={m.value} value={m.value}>{m.label}</option>
                  ))}
                </select>
              </div>

              {/* Delivery */}
              <div>
                <label htmlFor="demo-delivery" className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Max delivery: <span className="text-teal-700">{filters.maxDeliveryDays} days</span>
                </label>
                <input
                  id="demo-delivery"
                  type="range"
                  min={1}
                  max={14}
                  step={1}
                  value={filters.maxDeliveryDays}
                  onChange={(e) => setFilters((f) => ({ ...f, maxDeliveryDays: Number(e.target.value) }))}
                  className="w-full accent-teal-700"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>1 day</span><span>14 days</span>
                </div>
              </div>

              <Button variant="primary" size="md" className="w-full" onClick={handleSearch} disabled={loading || !filters.query.trim()}>
                {loading ? "Searching…" : "Find Products"}
              </Button>
            </div>
          </div>
        </aside>

        {/* Results */}
        <div>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="h-3 w-3 rounded-full bg-teal-600 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
              <p className="text-sm text-gray-500">Evaluating options against your rules…</p>
            </div>
          )}

          {/* Results */}
          {!loading && searched && results.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="font-display text-lg font-semibold text-gray-900">
                    {results.length} result{results.length !== 1 ? "s" : ""} matched your rules
                  </h2>
                  <p className="text-xs text-gray-400 mt-0.5">Ranked by score · budget ${filters.maxBudget} · delivery ≤{filters.maxDeliveryDays}d</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {results.map((p) => <ResultCard key={p.id} product={p} />)}
              </div>
            </div>
          )}

          {/* No results */}
          {!loading && searched && results.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">No matches found</h3>
              <p className="text-sm text-gray-500 max-w-sm">
                No products matched all your rules. Try increasing your budget, extending the delivery window, or changing the category.
              </p>
            </div>
          )}

          {/* Empty state */}
          {!loading && !searched && (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="h-16 w-16 rounded-2xl bg-teal-700/10 flex items-center justify-center text-teal-700 mb-5">
                <Search size={28} />
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">Ready when you are</h3>
              <p className="text-sm text-gray-500 max-w-sm">
                Enter what you need in the panel on the left, set your rules, and hit "Find Products".
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
