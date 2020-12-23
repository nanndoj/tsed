import {Controller} from "@tsed/common";
import {StoreMerge, useDecorators} from "@tsed/core";
import {INTERACTION_OPTIONS} from "../constants";
import {OidcInteractionOptions} from "../domain";

/**
 * @Oidc
 */
export function Interaction(options: OidcInteractionOptions): ClassDecorator {
  return useDecorators(
    Controller({
      path: "/",
      subType: "interaction"
    }),
    StoreMerge(INTERACTION_OPTIONS, options)
  );
}
