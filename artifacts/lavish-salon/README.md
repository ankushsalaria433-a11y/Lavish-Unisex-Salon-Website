# Lavish Unisex Salon

The Lavish website is a frontend-only React/Vite site for the salon in Indore. The appointment form validates in the browser and shows a success state, but it does not store or send appointments until a booking channel is connected.

## Edit the content

Most owner-editable content lives in `src/data.ts`:

- `business` — phone, address, Google Maps link, rating, review count, Instagram placeholder, and hours placeholder
- `services` — service categories and service names
- `images` — central gallery and hero image URLs
- `gallery` and `faqs` — image captions, alt text, and FAQ copy

The page layout and interactions live in `src/App.tsx`. Update the SEO title and metadata in `index.html`.

## Run

```bash
pnpm --filter @workspace/lavish-salon run dev
```

The managed Replit workflow supplies the required port and base path variables.