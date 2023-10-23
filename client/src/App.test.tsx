import React from "react";
import { render, act, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Add this line
import App from "./App";
import axios from "axios";

jest.mock("axios", () => ({
    post: jest.fn(),
    get: jest.fn(),
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;

test("renders learn react link", async () => {
    mockedAxios.get.mockResolvedValue({ data: { time: "07:00:00" } });

    let app;
    await act(async () => {
        app = render(<App />);
    });

    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument(); // Fix the error here

    await waitFor(() => {
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(screen.getByText(/07:00:00/i)).toBeInTheDocument(); // Fix the error here
    });
});
