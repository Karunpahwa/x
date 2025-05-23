# UI Component Tasks for ProcureAI

## 1. Requirement Input Form

- [ ] Create `RequirementForm.tsx` component
  - [ ] Use `shadcn/ui` form elements and validation messages
  - [ ] Integrate `React Hook Form` with `Zod` schema for input validation
  - [ ] Include fields: title, description, budget range, urgency level
  - [ ] Add rich text editor for enhanced specification entry
- [ ] Add auto-save logic and character limit indicators
- [ ] Hook up submit to backend API `/api/requirements`
- [ ] Acceptance Criteria:
  - All mandatory fields enforced
  - Inputs are type-validated using Zod
  - Error messages appear clearly
  - Form autosaves after each keystroke

---

## 2. Vendor Match Results Card

- [ ] Create `VendorCard.tsx`
  - [ ] Display: company name, rating, capabilities, relevance score
  - [ ] Add "Select for Invite" toggle
  - [ ] Use Tailwind utility classes for spacing, layout, and color
- [ ] Add filtering by rating, location, or category
- [ ] Acceptance Criteria:
  - Cards adapt responsively (mobile/desktop)
  - Match score visual indicator (0–100)
  - User can select/deselect vendors for negotiation

---

## 3. Bid Comparison Table

- [ ] Create `BidComparisonTable.tsx`
  - [ ] Display bids side-by-side
  - [ ] Add sortable headers for price, quality score, timeline
  - [ ] AI insights section (placeholder until model integration)
- [ ] Use sticky header + scrollable table UX
- [ ] Acceptance Criteria:
  - Table adapts to >5 bids without breaking layout
  - User can export comparison as PDF
  - Insights placeholder renders without error

---

## 4. Contract Editor

- [ ] Create `ContractEditor.tsx`
  - [ ] Show contract draft in editable format
  - [ ] Add buttons: Save Draft, Revert to Template, Submit
  - [ ] Track and show clause history
- [ ] Integrate with Supabase `/contracts` table
- [ ] Acceptance Criteria:
  - Users can edit any section inline
  - Changes are versioned in Supabase
  - Submission triggers email to vendor (mocked for now)

---

## 5. Dashboard Widgets

- [ ] Create `Dashboard.tsx` widgets:
  - [ ] Active negotiations
  - [ ] Savings to date
  - [ ] Cycle time analysis
- [ ] Show loading states (skeleton UI)
- [ ] Add links to relevant sections
- [ ] Acceptance Criteria:
  - Loads under 2s
  - Fallback when no data is available
  - Each widget component is independently testable
