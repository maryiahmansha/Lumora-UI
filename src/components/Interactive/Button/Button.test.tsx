/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";
import userEvent from "@testing-library/user-event";
import { cn } from "../../../utils";

// Mocking Cn func
vi.mock("../../../utils", () => ({
    cn: vi.fn((...classes) => classes.filter(Boolean).join(' '))
}))

describe("Button", () => {

    describe("Rendering", () => {
        it("renders with default props", () => {
            render(<Button>Click Me</Button>)
            const button = screen.getByRole("button", { name: /Click Me/i })

            expect(button).toBeInTheDocument();
            expect(button).toHaveTextContent('Click me');
            expect(button).not.toBeDisabled();
        });

        it("renders with custom children", () => {
            render(<Button>Custom Text</Button>)
            expect(screen.getByText("Custom Text")).toBeInTheDocument()
        })
    })

    describe("Variants", () => {
        it("applies variant classes correctly", () => {
            render(<Button variant="primary">Primary</Button>)
            const btn = screen.getByRole("button")
            expect(btn).toHaveClass("bg-blue-600 text-white hover:bg-blue-700")
        })
    })

    describe("Sizes", () => {
        it("applies size classes correctly", () => {
            render(<Button size="md">Medium</Button>)
            const btn = screen.getByRole("button")
            expect(btn).toHaveClass("h-10 px-4 py-2")
        })
    })

    describe("States", () => {
        it("handles disabled state", () => {
            render(<Button disabled={true}>Disabled Button</Button>)
            const btn = screen.getByRole("button")
            expect(btn).toBeDisabled()
        })

        it("handles loading state", () => {
            render(<Button loading={true}>Loading</Button>)
            const btn = screen.getByRole("button")
            expect(btn).toBeDisabled()
            expect(screen.getByText("Loading")).toBeInTheDocument()

            //Check for loading spinner
            const spinner = btn.querySelector("svg")
            expect(spinner).toBeInTheDocument()
            expect(spinner).toHaveClass("animate-spin")
        })
    })

    describe("Events", () => {
        it("handles click events", () => {
            const handleClick = vi.fn()
            const user = userEvent.setup();

            render(<Button onClick={handleClick}>Click Me</Button>)
            const btn = screen.getByRole("button")

            user.click(btn)
            expect(handleClick).toHaveBeenCalledTimes(1)
        })
    })
})