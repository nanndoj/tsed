import {Get} from "@tsed/common";
import {Interactions, OidcCtx, Prompt} from "@tsed/oidc-provider";
import {ConsentInteraction} from "../../interactions/ConsentInteraction";
import {LoginInteraction} from "../../interactions/LoginInteraction";

@Interactions({
  path: "/interaction/:uid",
  children: [
    LoginInteraction,
    ConsentInteraction
  ]
})
export class InteractionsCtrl {
  @Get("/")
  async promptInteraction(@OidcCtx() oidcCtx: OidcCtx, @Prompt() prompt: Prompt) {
    return oidcCtx.runInteraction(prompt.name);
  }
}