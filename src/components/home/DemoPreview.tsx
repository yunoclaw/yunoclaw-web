"use client";

import { useState } from "react";
import { Search, Star, Truck, ShieldCheck, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { PRODUCTS } from "@/data/products";
import { searchProducts, type ScoredProduct, type SearchFilters } from "@/lib/scoring";

const EXAMPLE_QUERIES = [
  "wireless earbuds under $150 with fast delivery",
  "noise-cancelling headphones under $250",
  "productivity mouse under $100",
];

const DEFAULT_FILTERS: SearchFilters = {
  query: "earbuds",
  maxBudget: 200,
  category: "all",
  merchant: "any",
  maxDeliveryDays: 7,
};

function ProductCard({ product, rank }: { product: ScoredProduct; rank: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card hover className="relative overflow-hidden">
      {rank === 1 && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-600 to-teal-400" />
      )}
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              {rank === 1 && <Badge variant="teal">Top Pick</Badge>}
              <span className="text-xs text-gray-400 font-medium">#{rank}</span>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm leading-snug">{product.name}</h3>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-lg font-bold text-gray-900">${product.price}</div>
            <div className="text-xs text-gray-500">{product.merchant}</div>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-3 mb-3 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <Star size={11} className="text-amber-500 fill-amber-500" />
            {product.rating}
          </span>
          <span className="flex items-center gap-1">
            <Truck size={11} className="text-teal-600" />
            {product.deliveryDays}d delivery
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck size={11} className="text-teal-600" />
            Trust {product.trustScore}/10
          </span>
        </div>

        {/* Reason summary */}
        <p className="text-xs text-gray-500 leading-relaxed mb-3">{product.reasonSummary}</p>

        {/* Why this? expandable */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1 text-xs text-teal-700 font-medium hover:text-teal-600 transition-colors mb-3"
          aria-expanded={expanded}
        >
          {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          Why this recommendation?
        </button>

        {expanded && (
          <ul className="mb-3 space-y-1 pl-2 border-l-2 border-teal-200">
            {product.explanation.map((line) => (
              <li key={line} className="text-xs text-gray-600 leading-relaxed">✓ {line}</li>
            ))}
          </ul>
        )}

        <Button variant="primary" size="sm" className="w-full text-xs" asChild>
          <a href={product.merchantUrl} target="_blank" rel="noopener noreferrer">
            View on {product.merchant}
            <ExternalLink size={12} />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export function DemoPreview() {
  const [query, setQuery]     = useState(EXAMPLE_QUERIES[0]);
  const [budget, setBudget]   = useState(200);
  const [results, setResults] = useState<ScoredProduct[]>([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading]   = useState(false);

  function handleSearch() {
    setLoading(true);
    // Simulate async agent thinking
    setTimeout(() => {
      const filters: SearchFilters = {
        query,
        maxBudget: budget,
        category: "all",
        merchant: "any",
        maxDeliveryDays: 7,
      };
      setResults(searchProducts(PRODUCTS, filters));
      setSearched(true);
      setLoading(false);
    }, 900);
  }

  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="demo-preview-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-3 block">Live Preview</span>
          <h2 id="demo-preview-heading" className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            See it work in real time
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Type what you need. Set your budget. YunoClaw ranks the best options and explains every choice.
          </p>
        </div>

        {/* Demo panel */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border border-sand-300 bg-sand-50 p-6 shadow-md">
            {/* Input row */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. wireless earbuds under $150 with fast delivery"
                  className="w-full pl-9 pr-4 py-2.5 rounded-md border border-sand-300 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <label htmlFor="budget-input" className="text-sm text-gray-600 whitespace-nowrap">Max $</label>
                <input
                  id="budget-input"
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  min={10}
                  max={2000}
                  className="w-24 px-3 py-2.5 rounded-md border border-sand-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
              <Button variant="primary" size="md" onClick={handleSearch} disabled={loading} className="flex-shrink-0">
                {loading ? "Searching…" : "Search"}
              </Button>
            </div>

            {/* Example prompts */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs text-gray-400">Try:</span>
              {EXAMPLE_QUERIES.map((q) => (
                <button
                  key={q}
                  onClick={() => setQuery(q)}
                  className="text-xs text-teal-700 bg-teal-700/8 hover:bg-teal-700/15 rounded-full px-3 py-1 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Loading state */}
            {loading && (
              <div className="text-center py-10 text-sm text-gray-500">
                <div className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-teal-600 animate-bounce [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 rounded-full bg-teal-600 animate-bounce [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 rounded-full bg-teal-600 animate-bounce" />
                  <span className="ml-2">Evaluating options…</span>
                </div>
              </div>
            )}

            {/* Results */}
            {!loading && searched && results.length > 0 && (
              <div>
                <p className="text-xs text-gray-500 mb-3 font-medium">
                  Found {results.length} ranked result{results.length !== 1 ? "s" : ""} within your rules
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {results.map((p) => (
                    <ProductCard key={p.id} product={p} rank={p.rank} />
                  ))}
                </div>
              </div>
            )}

            {!loading && searched && results.length === 0 && (
              <div className="text-center py-8 text-sm text-gray-500">
                No products matched your rules. Try adjusting your budget or category.
              </div>
            )}

            {!searched && !loading && (
              <div className="text-center py-8 text-sm text-gray-400">
                Enter a search above to see ranked results
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
