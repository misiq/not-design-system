import { it, describe } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Default", () => {
  it("Should be true", () => {
    expect(true).toBeTruthy();
  });
});
