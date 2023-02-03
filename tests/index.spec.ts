import "mocha";
import { assert } from "chai";
import { helloWorld } from "../src/index";

describe("Hello world function", () => {
  it("should be a function", () => {
    assert.isFunction(helloWorld);
  });
});
