import {PlatformTest} from "@tsed/common";
import {expect} from "chai";
import {Interactions} from "./interactions";

@Interactions({
  path: "/interaction/:uid",
  children: []
})
class InteractionsCtrl {}

describe("@Interactions", () => {
  beforeEach(() =>
    PlatformTest.create({
      oidc: {
        options: {
          claims: {}
        }
      }
    })
  );
  afterEach(() => PlatformTest.create());
  it("should create interactions", () => {
    PlatformTest.injector.resolveConfiguration();

    const oidc = PlatformTest.injector.settings.get("oidc");

    expect(oidc.options.claims).to.deep.equal({});
    expect(oidc.options.interactions.url).to.be.a("function");
    expect(
      oidc.options.interactions.url({
        oidc: {
          uid: "uid"
        }
      })
    ).to.equal("/interaction/uid");
  });
});
