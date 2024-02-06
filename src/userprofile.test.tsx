import React from "react"
import {screen, render} from "@testing-library/react"

import {Userprofile} from "./userprofile";

describe("Userprofile", () => {
    it("should render the component", () => {
        render(<Userprofile contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
