import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { AuthContext, AuthProvider } from "./AuthProvider";

describe("AuthProvider", () => {
  it("authed is false by default", () => {
    const { getByText } = render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => <span>Is logged in: {value.authed.toString()}</span>}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    expect(getByText("Is logged in: false")).toBeTruthy();
  });

  describe(".login", () => {
    it("sets authed to true", () => {
      const { getByText } = render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => (
              <>
                <span>Is logged in: {value.authed.toString()}</span>
                <button onClick={value.login}>Login</button>
              </>
            )}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      fireEvent.click(getByText("Login"))

      expect(getByText("Is logged in: true")).toBeTruthy()
    });
  });

  describe(".logout", () => {
    it("sets authed to false", () => {
      const { getByText } = render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => (
              <>
                <span>Is logged in: {value.authed.toString()}</span>
                <button onClick={value.login}>Login</button>
                <button onClick={value.logout}>Logout</button>
              </>
            )}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      fireEvent.click(getByText("Login"))
      fireEvent.click(getByText("Logout"))

      expect(getByText("Is logged in: false")).toBeTruthy()
    });
  });
});
