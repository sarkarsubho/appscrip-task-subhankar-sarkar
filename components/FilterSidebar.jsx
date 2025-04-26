"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/Checkbox";
import { Label } from "@/components/ui/Label";
import "./filterSidebar.css";

const filterCategories = [
  {
    id: "idealFor",
    title: "IDEAL FOR",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "babyKids", label: "Baby & Kids" },
    ],
  },
  {
    id: "occasion",
    title: "OCCASION",
    options: [
      { id: "casual", label: "Casual" },
      { id: "formal", label: "Formal" },
      { id: "party", label: "Party" },
      { id: "sports", label: "Sports" },
    ],
  },
  {
    id: "work",
    title: "WORK",
    options: [
      { id: "office", label: "Office" },
      { id: "outdoor", label: "Outdoor" },
      { id: "travel", label: "Travel" },
    ],
  },
  {
    id: "fabric",
    title: "FABRIC",
    options: [
      { id: "cotton", label: "Cotton" },
      { id: "polyester", label: "Polyester" },
      { id: "wool", label: "Wool" },
      { id: "silk", label: "Silk" },
    ],
  },
  {
    id: "segment",
    title: "SEGMENT",
    options: [
      { id: "premium", label: "Premium" },
      { id: "budget", label: "Budget" },
      { id: "luxury", label: "Luxury" },
    ],
  },
  {
    id: "suitableFor",
    title: "SUITABLE FOR",
    options: [
      { id: "summer", label: "Summer" },
      { id: "winter", label: "Winter" },
      { id: "rainy", label: "Rainy" },
      { id: "allSeason", label: "All Season" },
    ],
  },
];

export function FilterSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [expandedCategories, setExpandedCategories] = useState({
    idealFor: true, // Only first category expanded by default
  });

  // Get selected filters from URL params
  const getSelectedFilters = useCallback(() => {
    const selectedFilters = {};

    filterCategories.forEach((category) => {
      const paramValue = searchParams.get(category.id);
      if (paramValue) {
        selectedFilters[category.id] = paramValue.split(",");
      } else {
        selectedFilters[category.id] = [];
      }
    });

    return selectedFilters;
  }, [searchParams]);

  const [selectedFilters, setSelectedFilters] = useState(getSelectedFilters());

  // Update URL when filters change
  const updateUrl = useCallback(
    (newFilters) => {
      // Check if the URL actually needs to be updated
      const currentFilters = getSelectedFilters();
      let needsUpdate = false;

      // Compare current URL params with new filters
      for (const category of filterCategories) {
        const currentValues = currentFilters[category.id] || [];
        const newValues = newFilters[category.id] || [];

        if (
          currentValues.length !== newValues.length ||
          !currentValues.every((val) => newValues.includes(val))
        ) {
          needsUpdate = true;
          break;
        }
      }

      // Only update URL if needed
      if (needsUpdate) {
        const params = new URLSearchParams(searchParams.toString());

        Object.entries(newFilters).forEach(([category, values]) => {
          if (values.length > 0) {
            params.set(category, values.join(","));
          } else {
            params.delete(category);
          }
        });

        router.push(`${pathname}?${params.toString()}`);
      }
    },
    [pathname, router, searchParams, getSelectedFilters]
  );

  // Handle checkbox changes
  const handleFilterChange = (categoryId, optionId, checked) => {
    const newFilters = { ...selectedFilters };

    if (checked) {
      newFilters[categoryId] = [...(newFilters[categoryId] || []), optionId];
    } else {
      newFilters[categoryId] = (newFilters[categoryId] || []).filter(
        (id) => id !== optionId
      );
    }

    setSelectedFilters(newFilters);
    updateUrl(newFilters);
  };

  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  // Sync with URL params on mount and when URL changes
  useEffect(() => {
    const newFilters = getSelectedFilters();
    // Only update state if the filters have actually changed
    // This prevents the infinite loop
    const currentFiltersStr = JSON.stringify(selectedFilters);
    const newFiltersStr = JSON.stringify(newFilters);

    if (currentFiltersStr !== newFiltersStr) {
      setSelectedFilters(newFilters);
    }
  }, [searchParams, getSelectedFilters, selectedFilters]);

  return (
    <div className="filter-sidebar">
      {filterCategories.map((category) => (
        <div key={category.id} className="filter-category">
          <button
            onClick={() => toggleCategory(category.id)}
            className="filter-category-header"
          >
            <span>{category.title}</span>
            <span className="filter-category-icon">
              {/* {expandedCategories[category.id] ? (
                <ChevronUp />
              ) : (
                <ChevronDown />
              )} */}
              <ChevronDown
                style={{
                  rotate: expandedCategories[category.id] ? "180deg" : "0deg",
                }}
                className="arrow"
              />
            </span>
          </button>

          {!expandedCategories[category.id] && (
            <div className="filter-category-collapsed">All</div>
          )}

          {expandedCategories[category.id] && (
            <div className="filter-options">
              <div className="filter-category-collapsed">All</div>
              {category.options.map((option) => (
                <div key={option.id} className="filter-option">
                  <Checkbox
                    id={`${category.id}-${option.id}`}
                    checked={
                      selectedFilters[category.id]?.includes(option.id) || false
                    }
                    onCheckedChange={(checked) =>
                      handleFilterChange(
                        category.id,
                        option.id,
                        checked === true
                      )
                    }
                  />
                  <Label htmlFor={`${category.id}-${option.id}`}>
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
