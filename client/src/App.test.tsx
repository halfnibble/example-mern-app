import React from "react";
import { render, act, waitFor, screen } from "@testing-library/react";

import App from "./App";

import axios from "axios";

jest.mock("axios", () => ({
    post: jest.fn(),
    get: jest.fn(),
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;

test("renders learn react link", async () => {
    let app;
    mockedAxios.get.mockResolvedValue({ data: { time: "07:00:00" } });

    await act(async () => {
        app = render(<App />);
    });
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

    await waitFor(() => {
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(screen.getByText(/07:00:00/i)).toBeInTheDocument();
    });
});
