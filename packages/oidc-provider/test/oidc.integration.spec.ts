import {PlatformTest} from "@tsed/common/src";
import {PlatformExpress} from "@tsed/platform-express/src";
import {PlatformTestUtils} from "@tsed/platform-test-utils/src";
import SuperTest from "supertest";
import {rootDir} from "../../platform-express/test/app/Server";
import {InteractionsCtrl} from "./app/controllers/oidc/InteractionsCtrl";
import {Server} from "./app/Server";

const utils = PlatformTestUtils.create({
  rootDir,
  platform: PlatformExpress,
  server: Server
});

describe("OIDC", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeEach(utils.bootstrap({
    mount: {
      "/": [InteractionsCtrl]
    }
  }));
  beforeEach(() => {
    request = SuperTest(PlatformTest.callback());
  });

  afterEach(() => PlatformTest.reset());

  it("should display the OIDC login page", async () => {
    const response = await request.get("/auth?client_id=client_id&response_type=id_token&scope=openid+email&nonce=foobar&prompt=login");

    console.log(response.text);
  });
});