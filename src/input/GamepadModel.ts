// See https://gamepad-tester.com/controllers for a list of some possible controller IDs.

import { GamepadStyle } from "./GamepadStyle";

const typemap: Map<RegExp,GamepadStyle> = new Map();
typemap.set(/^.*?[Xx][Ii][Nn][Pp][Uu][Tt].*$/, GamepadStyle.XBOX);
typemap.set(/Stadia\\ Controller/, GamepadStyle.STADIA);
typemap.set(/^.*054c.*$/, GamepadStyle.PLAYSTATION);

/**
 * Regular expression to extract vendor and product identifier.
 */
const productAndVendorMatcher = /^.*?[Vv]endor:?\s*(?<vendorId>.{4}).*?[Pp]roduct:?\s*(?<productId>.{4}).*?$/;

export class GamepadModel {

    constructor(public style: GamepadStyle, vendorId?: number|undefined, productId?: number|undefined) {
    }

    /**
     * Parses a gamepad identifier string and returns an object that encapsulates
     * @param str
     *   Gamepad identifier string as reported by the Gamepad API.
     */
    public static fromString(str: string): GamepadModel {
        for (const [key, value] of typemap) {
            if (key.exec(str)) {
                const productAndVendorMatch = productAndVendorMatcher.exec(str);
                let vendorId: string | undefined;
                let productId;
                if (productAndVendorMatch !== null) {
                    vendorId = productAndVendorMatch.groups?.vendorId;
                    productId = productAndVendorMatch.groups?.productId;
                }
                return new GamepadModel(value, parseInt(vendorId || "-1", 16), parseInt(productId || "-1"));
            }
        }
        // Nothing matches? Well,... that's bad luck...
        return DEFAULT_GAMEPAD_MODEL;
    }

}

export const DEFAULT_GAMEPAD_MODEL: GamepadModel = new GamepadModel(GamepadStyle.UNKNOWN);
