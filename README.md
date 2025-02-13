# Valentine's Day Gift Website

A special Valentine's Day website that transforms based on the date. Before Valentine's Day, it shows a cute "Will you be my Valentine?" prompt with a countdown. On Valentine's Day, it becomes a Twitter-like feed of memories.

## Features

- **Pre-Valentine's Day**:
  - Interactive "Will you be my Valentine?" prompt
  - Fun "No" button response
  - Celebratory confetti animation on "Yes"
  - Countdown timer to Valentine's Day

- **Valentine's Day**:
  - Memory feed with photos and captions
  - Profile page with relationship statistics
  - Clean, modern UI with a Valentine's theme

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- React Confetti
- date-fns

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/            # React components
├── data/                  # Mock data
├── types/                 # TypeScript types
└── utils/                 # Utility functions
```

## Customization

1. Update the Valentine's Day date in `src/data/mockData.ts`
2. Add your own memories and photos in the `posts` array
3. Update relationship stats in `relationshipStats` object
4. Customize colors in `tailwind.config.ts`

## Deployment

The project is ready to be deployed on Vercel:

1. Push to GitHub
2. Import to Vercel
3. Deploy

## Design Decisions

- Used a dark theme with red accents for a romantic atmosphere
- Implemented responsive design for all screen sizes
- Added smooth transitions and animations for better UX
- Kept the UI minimal and focused on the content
- Used TypeScript for better type safety and development experience

## Future Enhancements

- Add more interactive elements to the memory feed
- Implement image optimization and lazy loading
- Add more relationship statistics and visualizations
- Include background music option
- Add more animations and transitions
