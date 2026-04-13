import type { Product } from "@/data/products";

export interface SearchFilters {
  query: string;
  maxBudget: number;
  category: string;
  merchant: string;
  maxDeliveryDays: number;
}

export interface ScoredProduct extends Product {
  score: number;
  explanation: string[];
  rank: number;
}

/**
 * Score = (rating * 2) + trustScore + deliveryBonus - pricePenalty
 * All normalised to produce a 0–20 range score.
 */
export function scoreProduct(product: Product, filters: SearchFilters): number {
  const ratingScore   = product.rating * 2;                          // 0–10
  const trustScore    = product.trustScore;                          // 0–10
  const deliveryBonus = product.deliveryDays <= 2 ? 2 : product.deliveryDays <= 4 ? 1 : 0;
  const pricePenalty  = (product.price / filters.maxBudget) * 2;    // higher price = higher penalty

  return ratingScore + trustScore + deliveryBonus - pricePenalty;
}

export function buildExplanation(product: Product, filters: SearchFilters): string[] {
  const lines: string[] = [];

  if (product.price <= filters.maxBudget) {
    lines.push(`Within your $${filters.maxBudget} budget at $${product.price}`);
  }
  if (product.deliveryDays <= 2) {
    lines.push(`Fast delivery — arrives in ${product.deliveryDays} day${product.deliveryDays === 1 ? "" : "s"}`);
  } else {
    lines.push(`Delivery in ${product.deliveryDays} days`);
  }
  if (product.rating >= 4.5) {
    lines.push(`Highly rated at ${product.rating}/5 across thousands of reviews`);
  } else {
    lines.push(`Rated ${product.rating}/5`);
  }
  if (product.trustScore >= 9) {
    lines.push(`High merchant trust score (${product.trustScore}/10) — verified seller`);
  } else {
    lines.push(`Merchant trust score: ${product.trustScore}/10`);
  }
  if (filters.merchant !== "any" && product.merchant === filters.merchant) {
    lines.push(`Matches your preferred merchant: ${product.merchant}`);
  }

  return lines;
}

export function searchProducts(
  products: Product[],
  filters: SearchFilters
): ScoredProduct[] {
  const filtered = products.filter((p) => {
    if (p.price > filters.maxBudget) return false;
    if (filters.category !== "all" && p.category !== filters.category) return false;
    if (filters.merchant !== "any" && p.merchant !== filters.merchant) return false;
    if (p.deliveryDays > filters.maxDeliveryDays) return false;

    // Loose keyword match on name, category, tags
    if (filters.query.trim()) {
      const q = filters.query.toLowerCase();
      const haystack = `${p.name} ${p.category} ${p.tags.join(" ")} ${p.reasonSummary}`.toLowerCase();
      if (!haystack.includes(q.split(" ")[0])) return false;
    }

    return true;
  });

  const scored: ScoredProduct[] = filtered.map((p) => ({
    ...p,
    score: scoreProduct(p, filters),
    explanation: buildExplanation(p, filters),
    rank: 0,
  }));

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, 3).map((p, i) => ({ ...p, rank: i + 1 }));
}
