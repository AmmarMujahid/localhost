import { cva } from "class-variance-authority";

const typography = cva(
  [
    "px-7",
    "rounded-md",
    "whitespace-nowrap",
    "flex",
    "gap-2",
    "items-center",
    "justify-center",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-primary",
          "text-white",
          "py-4",
          "font-medium",
          "transition",
          "duration-300",
          "hover:scale-105",
        ],
        // **or**
        // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
        secondary: [
          "bg-white",
          "text-primary",
          "py-3",
          "border-[1px]",
          "border-primary",
          "font-semibold",
        ],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        size: "medium",
        // class: "uppercase",
        // **or** if you're a React.js user, `className` may feel more consistent:
        className: "uppercase",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

// button();
// => "font-semibold border rounded bg-blue-500 text-white border-transparent hover:bg-blue-600 text-base py-2 px-4 uppercase"

// button({ intent: "secondary", size: "small" });
// => "font-semibold border rounded bg-white text-gray-800 border-gray-400 hover:bg-gray-100 text-sm py-1 px-2"

export function Typography({ intent, size, children }) {
  return <button className={typography({ intent, size })}>{children}</button>;
}
