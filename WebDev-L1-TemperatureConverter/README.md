# 🌡️ Temperature Converter Website
**OASIS INFOBYTE Internship — Web Development & Designing — Level 1, Task 3**

## Objective
An interactive web tool that converts a temperature value between Celsius, Fahrenheit, and
Kelvin simultaneously, with real-time input validation.

## Tech Stack
HTML5 · CSS3 · JavaScript (Vanilla)

## Design Notes
- **Palette:** a cool neutral background with a deep navy action button, blue for the
  "source" value, and warm red reserved for validation errors — colour is used functionally
  (source vs. computed vs. error), not decoratively.
- **Type:** `Inter` throughout — a single utility tool doesn't need a second display face.
- **Layout:** a single centred card; all three converted values are shown at once rather than
  one at a time, so the relationship between units is visible immediately.

## Feature Checklist Coverage
- Numeric input field with real-time validation (rejects empty/non-numeric input with a clear error message)
- Radio-button unit selector for the **input** unit (Celsius / Fahrenheit / Kelvin)
- All three output units shown simultaneously (auto-conversion, no separate output selector needed)
- Convert button that triggers the calculation
- Result display area with correct unit labels, source unit visually highlighted
- Edge-case handling: rejects any input below absolute zero for the selected unit, with a
  specific message (e.g. entering `-300°C` explains the -273.15°C physical limit)
- Clean, centred UI with clear labels

## Folder Structure
```
WebDev-L1-TemperatureConverter/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to View
Open `index.html` directly in any browser — no build step or server required.

## Manually Tested Scenarios
| Input | Unit | Expected Result |
|---|---|---|
| `25` | °C | 25.00 °C · 77.00 °F · 298.15 K |
| `abc` | °C | Error: not a valid number |
| `-300` | °C | Error: below absolute zero (-273.15 °C) |
| *(empty)* | any | Error: please enter a value |
